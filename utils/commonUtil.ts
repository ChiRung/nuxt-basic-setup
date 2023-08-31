export const makeError = () => {
  throw createError({ statusCode: 404, statusMessage: "커스텀 에러에용", fatal: true });
};
