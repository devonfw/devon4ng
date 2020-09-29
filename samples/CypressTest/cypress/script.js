const cypress = require('cypress');
const fse = require('fs-extra');
const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

const runTests = async () => {
  await fse.remove('mochawesome-report');
  await fse.remove('cypress/report');
  const { totalFailed } = await cypress.run();
  // To run tests with firefox comment the line above and uncomment the next one
  // const {totalFailed} = await cypress.run({browser:'firefox'});
  const reporterOptions = {
    files: ['cypress/report/*.json'],
  };
  await generateReport(reporterOptions);
  if (totalFailed !== 0) {
    process.exit(2);
  }
};
const generateReport = async (options) => {
  const jsonReport = await merge(options);
  generator.create(jsonReport).then(() => {
    process.exit();
  });
};

runTests();
