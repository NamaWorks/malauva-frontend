// vite.config.ts
import { defineConfig } from "file:///Z:/Dropbox/2-NAMA/DEV%20RSRCS/courses/ROCKTHECODE/CODE/02-deliverables/22_RTC_P13_backend-react/malauva-frontend/node_modules/vite/dist/node/index.js";
import react from "file:///Z:/Dropbox/2-NAMA/DEV%20RSRCS/courses/ROCKTHECODE/CODE/02-deliverables/22_RTC_P13_backend-react/malauva-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        math: "parens-division"
      },
      scss: {
        api: "modern-compiler",
        // or "modern", "legacy"
        importers: [
          // ...
        ]
      }
    }
  }
  // resolve:{
  //   alias:{
  //     "@elements": path.resolve(__dirname, "src/components/elements"),
  //     "@pages": path.resolve(__dirname, "src/components/pages"),
  //     "@utils": path.resolve(__dirname, "src/utils"),
  //     "@functions": path.resolve(__dirname, "src/utils/functions")
  //   },
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJaOlxcXFxEcm9wYm94XFxcXDItTkFNQVxcXFxERVYgUlNSQ1NcXFxcY291cnNlc1xcXFxST0NLVEhFQ09ERVxcXFxDT0RFXFxcXDAyLWRlbGl2ZXJhYmxlc1xcXFwyMl9SVENfUDEzX2JhY2tlbmQtcmVhY3RcXFxcbWFsYXV2YS1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiWjpcXFxcRHJvcGJveFxcXFwyLU5BTUFcXFxcREVWIFJTUkNTXFxcXGNvdXJzZXNcXFxcUk9DS1RIRUNPREVcXFxcQ09ERVxcXFwwMi1kZWxpdmVyYWJsZXNcXFxcMjJfUlRDX1AxM19iYWNrZW5kLXJlYWN0XFxcXG1hbGF1dmEtZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1o6L0Ryb3Bib3gvMi1OQU1BL0RFViUyMFJTUkNTL2NvdXJzZXMvUk9DS1RIRUNPREUvQ09ERS8wMi1kZWxpdmVyYWJsZXMvMjJfUlRDX1AxM19iYWNrZW5kLXJlYWN0L21hbGF1dmEtZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuLy8gaW1wb3J0IHsgcGFyc2VQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIG1hdGg6ICdwYXJlbnMtZGl2aXNpb24nLFxuICAgICAgfSxcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYXBpOiAnbW9kZXJuLWNvbXBpbGVyJywgLy8gb3IgXCJtb2Rlcm5cIiwgXCJsZWdhY3lcIlxuICAgICAgICBpbXBvcnRlcnM6IFtcbiAgICAgICAgICAvLyAuLi5cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgLy8gcmVzb2x2ZTp7XG4gIC8vICAgYWxpYXM6e1xuICAvLyAgICAgXCJAZWxlbWVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29tcG9uZW50cy9lbGVtZW50c1wiKSxcbiAgLy8gICAgIFwiQHBhZ2VzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHMvcGFnZXNcIiksXG4gIC8vICAgICBcIkB1dGlsc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy91dGlsc1wiKSxcbiAgLy8gICAgIFwiQGZ1bmN0aW9uc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy91dGlscy9mdW5jdGlvbnNcIilcbiAgLy8gICB9LFxuICAvLyB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtoQixTQUFTLG9CQUFvQjtBQUMvaUIsT0FBTyxXQUFXO0FBSWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osS0FBSztBQUFBO0FBQUEsUUFDTCxXQUFXO0FBQUE7QUFBQSxRQUVYO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
