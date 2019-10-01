// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/ultra-app/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'firefox'
  },
  directConnect: true,
  baseUrl: 'https://ultratEsTusEr:tEST20!9pas$Ultra!@test.app.ultra.io/en/store',
  framework: 'jasmine',
  useAllAngular2AppRoots: true,
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 40000
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
