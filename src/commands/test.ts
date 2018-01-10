import { CommandModule } from "yargs";
import { log, pretty } from "./index";

import { promisify } from "bluebird";
import { exec } from "child_process";
const execAsync = promisify(exec);

export const TestCommand: CommandModule = {
  command: "*",
  aliases: "t",
  describe: "Just for testing",
  builder: {
    number: {
      alias: "n",
      describe: "a number",
      type: "number"
    }
  },
  handler: async argv => {
    await execAsync("start chrome");
    log(`${pretty(argv)}`);
  }
};
