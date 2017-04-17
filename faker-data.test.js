const fakerData = require('./faker-data');

test('creates default fake data array', () => {
  expect(fakerData([
    { name: 'firstName' },
    { name: 'lastName' },
    { name: 'address' }
  ], 2)).toEqual([
    { "firstName": "firstName0", "lastName": "lastName0", "address": "address0" },
    { "firstName": "firstName1", "lastName": "lastName1", "address": "address1" }
  ]);
});

test('creates fake data with a function type', () => {
  expect(fakerData([
    { name: 'firstName', type: (index) => { return 'firstName'} },
    { name: 'lastName', type: (index) => { return 'lastName'} },
    { name: 'address', type: (index) => { return 'address'} }
  ], 2)).toEqual([
    { "firstName": "firstName", "lastName": "lastName", "address": "address" },
    { "firstName": "firstName", "lastName": "lastName", "address": "address" }
  ]);
});

test('creates fake data with faker', () => {
  expect(fakerData([
    { name: 'firstName', type: '{{name.firstName}}' },
    { name: 'lastName', type: '{{name.lastName}}' },
    { name: 'address', type: '{{address.streetAddress}} {{address.city}},{{address.state}}' }
  ], 2).length).toEqual(2);
});