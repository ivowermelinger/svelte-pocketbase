import type { LayoutServerLoad } from './$types';
import { pb } from '$lib/server/pocketbase';

export const load = (({ locals }) => {
	return {
		user: pb.authStore.isValid ? locals.user : null
	};
}) satisfies LayoutServerLoad;
