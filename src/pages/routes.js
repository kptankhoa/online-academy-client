const publicRoute = [];
const studentRoute = [];
const lecturerRoute = [];
const administratorRoute = [];

const publicContext = require.context('.', true, /public_route.js$/);
const studentContext = require.context('.', true, /student_route.js$/);
const lecturerContext = require.context('.', true, /lecturer_route.js$/);
const administratorContext = require.context(
  '.',
  true,
  /administrator_route.js$/
);

publicContext.keys().forEach((path) => {
  publicRoute.push(require(`${path}`).default);
});

studentContext.keys().forEach((path) => {
  studentRoute.push(require(`${path}`).default);
});
lecturerContext.keys().forEach((path) => {
  lecturerRoute.push(require(`${path}`).default);
});
administratorContext.keys().forEach((path) => {
  administratorRoute.push(require(`${path}`).default);
});

export { publicRoute, studentRoute, lecturerRoute, administratorRoute };
