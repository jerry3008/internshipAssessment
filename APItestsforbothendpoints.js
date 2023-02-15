const request = require('supertest');
const app = require('./app');

describe('GET /items', () => {
  it('should return an empty array of bills if there are no bills', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should return a list of medical bills if there are bills', async () => {
    const bill = {
      patientName: 'micheal mylers',
      patientAddress: '12 pain St',
      hospitalName: 'private Hospital',
      dateOfService: '2042-01-01',
      billAmount: 1000
    };
    await request(app).post('/items').send(bill);

    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([bill]);
  });
});

describe('POST /items', () => {
  it('should create a new medical bill', async () => {
    const bill = {
      patientName: 'Jerry Dog',
      patientAddress: '456 rain St',
      hospitalName: 'General Hospital',
      dateOfService: '2022-21-01',
      billAmount: 500
    };
    const res = await request(app).post('/items').send(bill);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Medical bill created successfully.' });
  });
});
