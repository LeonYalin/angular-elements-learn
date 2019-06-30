function delimeterMsg(str) {
  console.log(`\n*************** ${str} *****************\n`);
}

function log(...args: any[]) {
  console.log(...['\n', ...args.map(arg => arg + '\n\n')]);
}

export { log, delimeterMsg };
