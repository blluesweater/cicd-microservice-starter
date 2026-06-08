import request from 'supertest';
import app from '../app';

describe('GET /users', () => {
  it('should return all users as an array', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });

  it('should return a specific user by id', async () => {
    const res = await request(app).get('/users/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
  });

  it('should return 404 for a user that does not exist', async () => {
    const res = await request(app).get('/users/999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('message', 'User not found');
  });
});
