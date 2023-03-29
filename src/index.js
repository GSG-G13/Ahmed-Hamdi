const { app, PORT } = require('./app');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on http://localhost:${PORT}`);
});
