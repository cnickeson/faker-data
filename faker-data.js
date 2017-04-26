var Faker = require('faker');

/**
 * Generates an array of objects of fake data based off of the props
 * @method generateFakeData
 * @param {Object{ name(propertyName), type(type of data to create) }} props 
 * @param {Number} count 
 */

function generateFakeData(props, count, localization) {
  if(localization) {
    Faker.locale = localization;
  }
  var resultArr = []
  for(var index = 0; index < count; index++) {
    var newObj = {};
		//Iterate through every property
    for(var propIndex in props) {
      if(typeof(prop.type) === 'function') {
        newObj[prop.name] = prop.type(index, prop);
      }
      else if(prop.type !== undefined){
        newObj[prop.name] = Faker.fake(prop.type);
      }
      else {
        newObj[prop.name] = prop.name+index;
      };
    };
    resultArr.push(newObj);
  }
  return resultArr;
}

module["exports"] = generateFakeData