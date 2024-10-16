module.exports = {
    apps: [
      {
        name: "auth-service",      // 1. Name of the application
        script: "./build/server.js",       // 2. The script file to execute
        instances: 1,              // 3. Number of instances to run
        autorestart: true,         // 4. Auto-restart the application if it crashes
        watch: false,              // 5. Do not watch for file changes
        max_memory_restart: "1G",  // 6. Restart the app if it exceeds 1 GB of memory usage
      },
    ],
  };