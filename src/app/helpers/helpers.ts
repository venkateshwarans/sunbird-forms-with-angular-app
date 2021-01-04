import * as _ from 'lodash-es';

export const ObjectDifference = (origObj, newObj) => {
  function changes(newObj, origObj) {
    let arrayIndexCounter = 0;
    return _.transform(newObj, function (result, value, key) {
      if (!_.isEqual(value, origObj[key])) {
        const resultKey = _.isArray(origObj) ? arrayIndexCounter++ : key;
        result[resultKey] = (_.isObject(value) && _.isObject(origObj[key])) ? changes(value, origObj[key]) : value;
      }
    })
  }
  return changes(newObj, origObj);
}
