import type { Actions, PageServerLoad } from './$types';
import { pb } from '$lib/server/pocketbase';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {
	throw redirect(303, '/');
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		pb.authStore.clear();
		event.locals.user = null;
	}
} satisfies Actions;
