import * as request from 'superagent'
import { expect } from 'chai';


describe('First Api tests', () => {

    it('Consume GET Service, typescript', async() => {
        return request.get('https://httpbin.org/ip').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('origin');
        });

    });


});