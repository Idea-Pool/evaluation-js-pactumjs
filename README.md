# evaluation-js-pactumjs

This is a test-ware for evaluation of the PactumJS with Cucumber and Mocha.

## Prerequisites

1. Node.js LTS

## Framework used

| Framework | URL                                               | Description                                            |
|-----------|---------------------------------------------------|--------------------------------------------------------|
| PactumJs  | https://pactumjs.github.io/#/                     | REST API Testing Tool for all levels in a Test Pyramid |
| Mocha     | https://mochajs.org/                              | JavaScript test framework running on Node.js           |
| Cucumber  | https://cucumber.io/docs/installation/javascript/ | A tool that supports Behaviour-Driven Development(BDD) |

## Test cases

The implemented test cases can be found in [TESTCASES_API.md](TESTCASES_API.md).

## Setup

```bash
npm install
```

## Execution

Execute tests using Cucumber:
```bash
npm run test:cucumber
```

Execute tests using Mocha:
```bash
npm run test:mocha
```