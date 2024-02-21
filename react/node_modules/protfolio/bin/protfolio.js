#!/usr/bin/env node
const program = require("commander");
const { generate } = require("../src");
const package = require("../package.json");
const Path = require("path");

const getFullPath = path => {
  return Path.isAbsolute(path) ? path : Path.join(process.cwd(), path);
};

program
  .version(package.version)
  .command("gen")
  .description("Generate portfolio website from git service such as github.")
  .option("-p, --path [path]", "path", "./")
  .option("-t, --theme [theme]", "theme", "gitfolio")
  .option("-a, --args [args]", "args", "{}")
  .option("-u, --username <username>", "username")
  .option("-f, --fork [fork]", "fork", false)
  .option("-s, --sort [sort]", "sort", "star")
  .action(cmdArgs => {
    const { path, theme, args, username, fork, sort } = cmdArgs;
    const currentFolder = getFullPath(path);

    generate({
      exportPath: getFullPath(path),
      theme,
      args,
      username,
      fork,
      sort
    })
      .then(data => {
        console.log(`Website created at ${currentFolder}.`);
      })
      .catch(e => console.error(e.message));
  });

program.parse(process.argv);

program.on("command:*", function() {
  console.error(
    "Invalid command: %s\nSee --help for a list of available commands.",
    program.args.join(" ")
  );
  process.exit(1);
});

if (!process.argv.slice(2).length) {
  program.help();
}
