import PocketBase from 'pocketbase';
import { SECRET_PB_PASS, SECRET_PB_USER } from '$env/static/private';
import { PUBLIC_PB_URL } from '$env/static/public';

const pb = new PocketBase(PUBLIC_PB_URL);

try {
	await pb.collection('users').authWithPassword(SECRET_PB_USER, SECRET_PB_PASS);
} catch (e) {
	console.error('could not authenticate with PocketBase');
}

export { pb };
