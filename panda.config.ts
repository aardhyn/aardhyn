import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  ":root": {
    fontSize: "13px",
    sm: { fontSize: "16px" },
  },
  body: {
    backgroundColor: "#000",
    fontFamily:
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: "#fff",
  },
});

export default defineConfig({
  preflight: true,
  globalCss,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  theme: {
    extend: {
      breakpoints: {
        sm: "900px",
        lg: "1400px",
      },
    },
  },
  outdir: "src/panda",
});
