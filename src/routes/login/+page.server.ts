import type { Actions, PageServerLoad } from './$types';
import { pb } from '$lib/server/pocketbase';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ request, cookies }) => {
	if (pb.authStore.isValid) {
		throw redirect(303, '/');
	} else {
		// Set redirect url to cookies
		const referer: string | null = request.headers.get('referer');

		if (referer) {
			cookies.set('redirect', referer, {
				secure: true,
				httpOnly: true,
				sameSite: 'lax'
			});
		}
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const user = data.get('user') as string;
		const password = data.get('password') as string;

		let success = false;

		try {
			await pb.collection('users').authWithPassword(user, password);
			success = true;
		} catch (e) {
			console.error('Login failed');

			return {
				success,
				user,
				message: 'Benutzername oder Passwort falsch'
			};
		}

		const url = cookies.get('redirect') ?? '/';
		cookies.delete('redirect');

		throw redirect(303, url);
	}
} satisfies Actions;
