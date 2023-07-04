import type { PageServerLoad } from './$types';
import { pb } from '$lib/server/pocketbase';

export const load = (async ({ cookies }) => {
	const records = await pb.collection('sensitiveData').getFullList({
		sort: '-created'
	});

	return {
		length: records.length,
		records: records.map((record) => ({
			...record
		}))
	};
}) satisfies PageServerLoad;
