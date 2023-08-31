export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`detect route change! to: ${to}, from: ${from}`);
});