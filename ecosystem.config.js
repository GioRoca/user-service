module.exports = {
  apps: [
    {
      name: 'user-service',
      script: './dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      source_map_support: true,
      time: true,
      env: {
        NODE_ENV: 'local',
        //HOST:'',
      },
      env_dit: {
        NODE_ENV: 'dit',
        //HOST:'',
      },
    },
  ],
};
