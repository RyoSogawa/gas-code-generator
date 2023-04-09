import { runCli } from './runCli';

// const [, , cmd] = process.argv;

runCli()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
