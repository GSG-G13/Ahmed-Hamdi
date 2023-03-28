const { app, PORT } = require('./app');

app.listen(PORT, () => {
  console.log('App running on port', PORT);
});
