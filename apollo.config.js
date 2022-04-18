module.exports = {
  client: {
    service: `${process.env.SERVICE_NAME}@${process.env.NODE_ENV}`,
  },
  service: {
    endpoint: {
      url: `http://localhost:${process.env.SERVICE_PORT}/`,
    },
  },
};
