# Mongodb-Coding-Assessment
Aarshika Singh

## Introduction

**Flatten JSON:**

## Software Requirements
NodeJS 10.24.0

## Setup and Deployment:
Download the folder to your respective device. 

```
cd json_flat
```

### Install project dependencies

```
sudo apt update

sudo apt install nodejs

nodejs -v
```

Then,

```
node main.js
```

to run the application.

To run tests:

```

npm init -y

npm i --save-dev jest

npm install --save-dev jest-json-schema

npm test
```

## Input: 
**The input can either be taken from the stdin:**
1) When asked for the prompt named JSON, enter the JSON object using the keyboard. Make sure to have double quotes (" ") along the key.

**A JSON file can be parsed as the input:**
1) Comment line 11 and 12 in main.js
2) Uncomment line 8 in main.js
3) Change the name of the file in line 8. Make sure to have the correct path of the file listed. (A test input file named "input.js" is already included in the master folder)

### Why JavaScript?
Even though it might seem tempting to code in the languages you are most proficient in (C++ and Python), JSON's format resembles JavaScript object literal format and it is easier to parse the JSON input/file without the need of any additional library.


