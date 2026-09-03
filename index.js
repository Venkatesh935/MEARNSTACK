
import {add, subtract ,PI} from './mathUtils.js';
import _ from './stringUtil.js';
import * as arrayUtil from './arrayUtil.js';
import greet,{readData,saveData} from './fileUtil.js'

console.log(add(2,5));
console.log(subtract(2,5));

console.log(_.upper('hello'));
console.log(_.upper('sadhana'));
console.log(_.upper('nan'));

console.log(arrayUtil.first([10,20,33]));
console.log(arrayUtil.last([10,20,33]));
console.log(arrayUtil.sum([10,20,33]));

greet();
saveData('note.txt','hello file');
readData('notes.txt');