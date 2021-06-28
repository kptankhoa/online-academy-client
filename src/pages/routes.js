const routes = [];

const context = require.context('.', true, /route.js$/);

context.keys().forEach((path) => {
  routes.push(require(`${path}`).default);
});

console.log(routes);

export default routes;
