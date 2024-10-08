const esbuild = require("esbuild");
const path = require("path");

esbuild
  .build({
    entryPoints: ["src/server.ts"],
    bundle: true,
    platform: "node",
    target: "node20", // Target depends on your environment
    outdir: "build", // Map dir name after build
    external: ["express"], // Specify Node.js packages here
    loader: {
      ".ts": "ts",
    },
    // Add this so that It Could Resolve the Path
    alias: {
      "@": path.resolve(__dirname, "."),
    },
    resolveExtensions: [".ts", ".js"],
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  })
  .catch((error) => {
    console.error("Build failed:", error);
    process.exit(1);
  });
