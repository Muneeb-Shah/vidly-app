// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://2118618ae95545b98cc6560313362823@o1167895.ingest.sentry.io/6259335",
  //   {
  //     release: "1-0-0",
  //     environment: "development-test",
  //   }
  // ).install();
}

function log(error) {
  // Raven.captureException("Logging error", error);
  console.log(error);
}

export default {
  init,
  log,
};
