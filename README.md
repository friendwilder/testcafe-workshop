# TestCafe Workshop 
## Towards QA Automation Certification

### INTRODUCTION

Using TestCafe for Front-End testing is the first of the modules towards the QA Automation Certification.
This repository contains examples on how to implement functional testing using TestCafe.
Some of the tests cover topics such as:

- Page Object Model (POM)
- TestCafe Selectors
- Hooks
- Roles

### HOW TO USE THIS REPO

TestCafe only pre-requisite is *node.js*. Once it is installed, npm is used to install TestCafe

`npm install -g testcafe`

Apart from TestCafe, this project also has dotenv to help manage environment variables more gracefully.

### HOW TO RUN THE TESTS

Since the command has been already entered into the *package.json* file, you can use:

`npm run test-all-chrome`

### NOTES

Given that this was the first encounter with TestCafe, I tried to keep the implementation as variadic as possible for future references.
For example, in some tests I use a function to do the required Login while in another set of tests I use Roles to login.
I also use different selectors, this might be confusing, but **now you are aware that it is for educational purposes.** To see how the different options could get to the same result.