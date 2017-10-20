import { exec } from 'child_process';
import * as fs from 'fs';

exec('git rev-parse --short HEAD', (error, stdout, stderr) => {
  if (error != null) {
    console.error(error);
    return;
  }
  fs.writeFileSync(
    './src/environments/version.ts',
    `export const version = '${stdout.trim()}';\n`
  );
});
