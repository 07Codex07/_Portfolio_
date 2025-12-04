import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isReplit = process.env.REPL_ID !== undefined;
const isDev = process.env.NODE_ENV !== "production";

export const getPlugins = async (): Promise<PluginOption[]> => {
  const plugins: PluginOption[] = [react()];

  if (isReplit) {
    try {
      const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
      plugins.push(runtimeErrorOverlay());
      
      if (isDev) {
        const { cartographer } = await import("@replit/vite-plugin-cartographer");
        const { devBanner } = await import("@replit/vite-plugin-dev-banner");
        plugins.push(cartographer());
        plugins.push(devBanner());
      }
    } catch {
      console.warn("Replit plugins not available, skipping...");
    }
  }

  return plugins;
};

const basePlugins: PluginOption[] = [react()];

const config = defineConfig({
  plugins: basePlugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

export default config;
