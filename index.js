import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const string = content.split('\n');
  const keys = string[0].split(',')[2];



  console.log(string.length);
  console.log(keys, Array.isArray(string), string[1]);
  // END
};