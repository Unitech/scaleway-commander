/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
var inquirer = require('inquirer');

console.log('Hi, welcome to Node Pizza');

var questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter: function (val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese'
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed'
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian'
      }
    ]
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke']
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!'
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when: function (answers) {
      return answers.comments !== 'Nope, all good!';
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});
