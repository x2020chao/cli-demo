#!/usr/bin/env node
import cac from "cac";

const cli = cac('cli');

cli
  .command("create <projectName>", "create template for component-lib")
  .action((projectName) => {
    console.log(projectName);
  });

cli.help();
cli.parse();
