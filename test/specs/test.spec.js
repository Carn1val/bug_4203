describe("Open any website with network error", () => {
  it("open first site", () => {
    browser.url("https://loader.io/");
  });
  it("open second site", () => {
    browser.url("https://loader.io/");
  });
  it("open third site", () => {
    browser.url("https://loader.io/");
    browser.pause(3000);
  });
});

// Prerequisites :
// 1) Open website with some response errors
// 2) Minimum 3 tests
// 3) Long delay in second test
