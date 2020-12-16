const request = require('supertest');
const server = require('../index.js');

beforeAll(async () => {
    console.log('jest starting!');
});

// Close Server after test
afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('basic route tests', () => {
    test('not allow GET /', async () => {
        const response = await request(server).get('/');
        expect(response.status).toEqual(405);
    });
});

describe('search tests', () => {
    test('should return records', async () => {
        const record = await request(server)
            .post('/api/search')
            .send({
                'startDate': '2016-01-01',
                'endDate': '2019-01-01',
                'minCount': '0',
                'maxCount': '500'
            });
        expect(record.body.code).toEqual(0);
        expect(record.body.msg).toBe('success');
        expect(record.statusCode).toBe(200);
    });

    test('should not return records', async () => {
        const record = await request(server)
            .post('/api/search')
            .send({
                'startDate': '01-01-2020',
                'endDate': '01-01-2015',
                'minCount': '0',
                'maxCount': '500'
            });
        expect(record.body.code).toEqual(4);
        expect(record.body.msg).toBe('invalid start date');
        expect(record.statusCode).toBe(400);
    });
});