import * as request from 'superagent'
import { expect } from 'chai';


describe('First Api tests', () => {

   it('Consume GET Service, typescript', async() => {
       await request.get('https://httpbin.org/ip').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('origin');
        });

    });

    it('Consume GET service with query params', () => {
        const query = {
            name: 'Man',
            age: '31',
            city: 'New York'
        };
        
        return request.get('https://httpbin.org/get')
        .query(query)
        .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.args).to.eql(query);
            expect(response.header).to.have.property('access-control-allow-credentials')
        });
    });


});