import { spawn } from "child_process";
import chalk from "chalk";
import consola from "consola";
import { buildOutput, projRoot } from "./path";
import fs from "fs";

export const deleteFile = function (_dir: string, delRoot?: boolean): void {
  if (fs.existsSync(_dir)) {
    fs.readdirSync(_dir).forEach((i) => {
      const delUrl = _dir + "/" + i;
      const fileInfo = fs.statSync(delUrl);
      if (fileInfo.isDirectory()) {
        deleteFile(delUrl);
        fs.rmdirSync(delUrl);
      } else {
        fs.unlinkSync(delUrl);
      }
      consola.info(`delete`, delUrl);
    });
    if (delRoot) {
      fs.rmdirSync(_dir);
    }
  }
};

export const deleteFolder = async (cwd: string = projRoot) => {
  return new Promise<void>((resolve) => {
    consola.info(`start delete...`, cwd);
    deleteFile(cwd, true);
    resolve();
  });
};

export const createFolder = async function (cwd: string = buildOutput) {
  return new Promise<void>((resolve) => {
    consola.info(`start create...`, cwd);
    fs.stat(cwd, (err: Error) => {
      if (err) {
        fs.mkdirSync(cwd);
        resolve();
        return;
      }
      consola.warn(`${cwd} exists`);
      resolve();
    });
  });
};

export const run = async (command: string, cwd: string = projRoot, cb?: Function | undefined) =>
  new Promise<void>((resolve, reject) => {
    const [cmd, ...args] = command.split(" ");
    consola.info(`run: ${chalk.green(`${cmd} ${args.join(" ")}`)}`);
    const app = spawn(cmd, args, {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    const onProcessExit = () => app.kill("SIGHUP");

    app.on("close", (code) => {
      if (cb) {
        cb();
      }
      process.removeListener("exit", onProcessExit);

      if (code === 0) resolve();
      else
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        );
    });
    process.on("exit", onProcessExit);
  });
