module.exports = {
    apps: [
        {
            name: 'frontend',
            script: './build/index.js',
            instances: "max",
            exec_mode: "cluster",
            env: {
                PORT: 80,
            }
        },
        {
            name: 'pocketbase',
            script: './build/pocketbase serve --http="127.0.0.1:8090"',
            env: {
                PUBLIC_PB_URL: "http://127.0.0.1:8090",
            }
        }
    ],

    deploy: {
        production: {
            user: 'SSH_USERNAME',
            host: 'SSH_HOSTMACHINE',
            ref: 'origin/master',
            repo: 'GIT_REPOSITORY',
            path: 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy': 'yarn install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};
