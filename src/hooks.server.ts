import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/server/pocketbase';

const protectedRoutes = ['/protected', '/me'];

// Regex check to verify if the route is protected
const isProtectedRoute = (route: string | null) => {
	if (!route) return false;
	return protectedRoutes.some((r) => new RegExp(r).test(route));
};

export const handle = (async ({ event, resolve }) => {
	if (isProtectedRoute(event.route.id) && !pb.authStore.isValid && event.route.id !== '/login') {
		event.cookies.set('redirect', event.route.id ?? '/', {
			secure: true,
			httpOnly: true,
			sameSite: 'lax'
		});

		throw redirect(303, '/login');
	}

	// Add user to event
	if (pb.authStore.isValid) {
		event.locals.user = { ...pb.authStore.model };
	} else {
		event.locals.user = null;
	}

	return resolve(event);
}) satisfies Handle;
