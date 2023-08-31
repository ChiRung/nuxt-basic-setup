export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`This is Home Route Middleware! to: ${to}, from: ${from}`);
  // routing other page
  // navigateTo('/404');

  // abort navigation with error
  // abortNavigation('404');
});