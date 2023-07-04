module.exports = {
	apps: [
		{
			name: 'frontend',
			script: './build/index.js',
			instances: 'max',
			exec_mode: 'cluster',
			env_development: {
				PORT: 3000,
				NODE_ENV: 'development'
			},
			env_production: {
				PORT: 80,
				NODE_ENV: 'production'
			}
		},
		{
			name: 'pocketbase',
			script: './pocketbase serve --http="127.0.0.1:8090"',
			env_development: {
				PUBLIC_PB_URL: 'http://127.0.0.1:8090',
				NODE_ENV: 'development'
			},
			env_production: {
				PUBLIC_PB_URL: 'http://127.0.0.1:8090',
				NODE_ENV: 'production'
			}
		}
	],

	// Deployment configuration
	deploy: {
		production: {
			user: 'zugopent',
			key: '~/.ssh/id_ed25519',
			host: 'vsa-nyzida.cyon.net',
			ref: 'origin/main',
			repo: 'git@github.com:ivowermelinger/svelte-pocketbase.git',
			path: '/home/zugopent/www/staging',
			'post-deploy': 'yarn install && yarn build && yarn start',
			'pre-deploy': 'npm install --global yarn'
		}
	}
};
