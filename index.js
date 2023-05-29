import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const string = content.split('\n');
  const passQuantity = string.length - 2;
  const keys = string[0].split(',');
  const embarked = _.uniq(string.map((item) => item.split(',')[12]));
  const passSex = string.map((item) => item.split(',')[5]);
  const maleQuantity = passSex.filter((item) => item === 'male').length;
  const femaleQuantity = passSex.filter((item) => item === 'female').length;
  const survivedQuantity = (string.map((item) => item.split(',')[2]).filter((item) => item === '1').length * 100) / passQuantity;
  //const sexProportion = 



  console.log(passQuantity);
  console.log(embarked);
  console.log(`${maleQuantity}/${femaleQuantity}`);
  console.log(survivedQuantity);
  //console.log(keys, maleQuantity, femaleQuantity, embarked, Array.isArray(string), string[55]);
  
  // END
};