const colorKeywords = require('./colorKeywords.js');

const questions = [
  {
    name: "shape",
    message: "What's the shape of your logo?",
    type: "list",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color keyword",
    when: answers => answers.shapeColorChoice === 'color keyword',
    validate: answer => {
      if (colorKeywords.includes(answer.toLowerCase())) {
        return true;
      }
      console.log("\n Enter a valid color keyword");
      return false;
    },
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape hexadecimal number (#CCCCCC)",
    when: answers => answers.shapeColorChoice === "hexadecimal",
    validate: answer => {
      const hexRegEx = '^#[A-Fa-f0-9]{6}$';
      if (!hexRegEx.test(answer)) {
        console.log("\n Enter a valid hexadecimal");
        return false;
      }
      return true;
    },
  },
  {
    name: "text",
    message: "What is the text? (three character maximum)",
    type: "input",
    validate: answer => {
      if (answer.length > 3) {
        console.log("\n Text must be three characters or less! Please try again");
        return false;
      }
      return true;
    },
  },
  {
    name: "textColorChoice",
    message: "What is the color of the text? Choose a color format: ",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color keyword",
    when: answers => answers.textColorChoice === "color keyword",
    validate: answer => {
      if (colorKeywords.includes(answer.toLowerCase())) {
        return true;
      }
      console.log("\n Enter a valid color keyword");
      return false;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text hexadecimal number (#CCCCCC)",
    when: answers => answers.textColorChoice === "hexadecimal",
    validate: answer => {
      const hexRegEx = '^#[A-Fa-f0-9]{6}$';
      if (!hexRegEx.test(answer)) {
        console.log("\n Enter a valid hexadecimal");
        return false;
      }
      return true;
    },
  },
];

module.exports = questions;

