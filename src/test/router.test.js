const request = require('supertest');
const { app } = require('../app');

test('GET / status 200 text/html', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err) => {
      if (err) return done(err);
      expect(1).toBe(1);
      return done();
    });
});

test('test 404 GET /anything', (done) => {
  request(app)
    .get('/anything')
    .expect(404)
    .expect('Content-Type', /text\/html/)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});

test('GET /users/user1 status 200 JSON', (done) => {
  request(app)
    .get('/users/user1')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});
