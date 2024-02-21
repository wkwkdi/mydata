const ejs = require("ejs");
const fs = require("file-system");
const path = require("path");
const providers = require("./providers");

const defaults = {
  theme: "gitfolio",
  type: "light",
  fork: false,
  provider: "github",
  sort: "star"
};

const getSorter = {
  star: (a, b) => b.stargazers_count - a.stargazers_count,
  name: null,
  fork: (a, b) => b.forks_count - a.forks_count,
  lang: (a, b) => b.language > a.language
};

const generate = async (options = {}) => {
  const config = Object.assign(defaults, options);

  const provider = providers[config.provider];
  let data;
  if (config.useTestData) {
    data = require("../data/github.json");
  } else {
    data = await provider.fetch(config.username);
  }
  data.repositories.sort(getSorter[config.sort]);

  fs.copySync(`${__dirname}/theme/${config.theme}`, config.exportPath);

  const templateData = {
    ...data,
    config
  };

  fs.writeFileSync(
    `${config.exportPath}/index.html`,
    ejs.render(
      fs.readFileSync(`${__dirname}/theme/${config.theme}/index.ejs`, "utf-8"),
      templateData
    )
  );

  return templateData;
};

module.exports = generate;
