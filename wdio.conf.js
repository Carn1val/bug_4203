exports.config = {
  runner: "local",
  specs: [],
  suites: {
    run_test: ["./test/specs/test.spec.js"]
  },
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--window-size=1840,1080", "--disable-infobars", "--no-sandbox"]
      }
    }
  ],
  logLevel: "info",
  outputDir: `./log/`,
  deprecationWarnings: true,
  waitforTimeout: 10000,
  services: ["chromedriver", "devtools"],
  port: 9515,
  path: "/",
  reporters: ["spec"],
  framework: "mocha",
  bail: 1,
  mochaOpts: {
    ui: "bdd",
    timeout: 1800000,
    bail: true
  }
};
