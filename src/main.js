import App from "./App.svelte";

const app = new App({
  target: document.body,
  // for routing
  hydrate: true,
});

export default app;
