// Aarshika Singh  
// MongoDB Coding Assessment 

'use strict';
const fs = require('fs');


//let input = fs.readFileSync('input.json');
//Uncomment to use a file as input instead of command line

const prompt = require('prompt-sync')({sigint: true});
var input = prompt("JSON: ");
//Prompt to get input from command line.Comment to use a file 
//as input instead.

var data = JSON.parse(input)
//Parsing JSON string

var flatJSON = function(object) {
	var toReturn = {};
	for (var i in object) {
		if (object.hasOwnProperty(i)==false) {
			continue;	
		}
		if ((typeof object[i]) == 'object') {
			var flatJSON2 = flatJSON(object[i]);
			for (var j in flatJSON2) {
				if (flatJSON2.hasOwnProperty(j)==false){
					continue;
				}
				toReturn[i + '.' + j] = flatJSON2[j];
			}
		} 
		else {
			toReturn[i] = object[i];
		}
	}
	return toReturn;
};
console.log(flatJSON(data))
//prints flattened JSON on standard output

let output = JSON.stringify(flatJSON(data));
fs.writeFileSync('output.json', output);
//Writes flattened JSON in a new JSON file

module.exports = flatJSON