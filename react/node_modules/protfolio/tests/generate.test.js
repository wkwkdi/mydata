const { generate } = require("../src");
const fs = require("file-system");

test("generate", async () => {
  fs.rmdirSync("./output");
  const templateData = await generate({
    exportPath: "./output",
    username: "niradler",
    useTestData: true
  }).catch(e => {
    throw e;
  });
  expect(fs.readFileSync("./output/index.html", "utf-8")).toBeDefined();
  expect(templateData.config).toBeDefined();
  expect(templateData.repositories).toBeDefined();
  expect(templateData.user).toBeDefined();
});
