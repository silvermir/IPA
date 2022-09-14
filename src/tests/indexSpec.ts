import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing endpoints', () => {
  it('should get the root endpoint response ', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('pls, visit //localhost:port/api');
  });
  it('should get the api endpoint response', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    expect(response.text).toContain(
      `<a href="http://localhost:3000/api/img?filename=&width=&height=">Please click here to change Image size or visit http://localhost:3000/api/img </a>`
    );
  });
  it('should get the img endpoint', async () => {
    const response = await request.get('/api/img');
    expect(response.status).toBe(200);
  });
});
