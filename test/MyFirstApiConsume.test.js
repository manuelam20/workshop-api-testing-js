const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');
const { expect } = require('chai');

describe('First Api Tests', () => {
    it('Consume GET Service', () => {
        return agent.get('https://httpbin.org/ip').then((response) => {
          expect(response.status).to.equal(statusCode.OK);
          expect(response.body).to.have.property('origin');
        });
      });
      it('Consume GET Service with query parameters', () => {
        const query = {
          name: 'John',
          age: '31',
          city: 'New York'
        };
      
        return agent.get('https://httpbin.org/get')
          .query(query)
          .then((response) => {
            expect(response.status).to.equal(statusCode.OK);
            expect(response.body.args).to.eql(query);
          });
      });
});
