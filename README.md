# Faker Data - creating a massive array of fake data using Faker.js

### Installation

```
npm install faker-data
```

### Usage

See <a href=http://marak.github.io/faker.js/>Faker</a> for faker types.  

Faker data takes in 3 parameters. 
Props: Array of objects describing the output data  
  // [ { 
  //  name: 'propertyName', 
  //  type: Faker Type/Function //No type will default to (propertyName + index)
  // }]
Count: Number of items to return
Localization: faker localization

```
const fakerData = require('faker-data');

const testDefaultData = fakerData([
  {
    name: 'firstName'
  },
  {
    name: 'lastName'
  },
  {
    name: 'address'
  }
], 2);

console.log(testDefaultData);
//outputs: [{ 'firstName': 'firstName0', 'lastName': 'lastName0', 'address': 'address0' },  { 'firstName': 'firstName1', 'lastName': 'lastName2', 'address': 'address3' }]

const testFakerData = fakerData([
  {
    name: 'firstName',
    type: '{{name.firstName}}'
  },
  {
    name: 'lastName',
    type: '{{name.lastName}}'
  },
  {
    name: 'address',
    type: '{{address.streetAddress}} {{address.city}} {{address.state}}'
  }
], 2);

console.log(testFakerData);
//outputs: [{ 'firstName': 'Rowan', 'lastName': 'Nikolaus', 'address': '967 Walsh Fields South Makenzietown,Iowa' },  { 'firstName': 'Bobby', 'lastName': 'Simonis', 'address': '7827 Armstrong Square Schroederhaven,Colorado' }]

const testCallbackData = fakerData([
  {
    name: 'firstName',
    type: (index, prop) => { return 'firstName' }
  },
  {
    name: 'lastName',
    type: (index, prop) => { return 'lastName' }
  },
  {
    name: 'address',
    type: (index, prop) => { return 'address' }
  }
], 2);

console.log(testCallbackData);
//outputs: [{ 'firstName': 'firstName', 'lastName': 'lastName', 'address': 'address' },  { 'firstName': 'firstName', 'lastName': 'lastName', 'address': 'address' }]
```

### License

MIT
