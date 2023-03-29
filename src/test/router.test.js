const request = require('supertest');
const { app } = require('../app');

test('Get /users status 200 json get all users', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      expect(res.body.length).toBe(30);
      return done();
    });
});

test('GET /users/:username/repos 200 json', (done) => {
  request(app)
    .get('/users/:username/repos')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) {
        return done(err);
      }
      return done();
    });
});

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
