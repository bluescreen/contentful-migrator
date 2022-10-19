import {
  MigrationFunction,
  runMigration,
  RunMigrationConfig
} from 'contentful-migration';
import fs from 'fs';

const MIGRATIONS_DIR = './migrations';

const options: RunMigrationConfig = {
  migrationFunction: () => {},
  spaceId: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_CMA_TOKEN,
  environmentId: process.env.CF_CMA_ENV ?? 'master',
  yes: true
};

async function main() {
  const args: string[] = process.argv.slice(2);
  const deleteFirst = args[0] === 'cleanup';

  fs.readdir(MIGRATIONS_DIR, (_err, files) => {
    files
      .filter((file) => {
        if (deleteFirst) {
          return file.match(/^00/);
        }
        if (args.length > 1 && args[1].length > 0) {
          return file.match(new RegExp(args[1]));
        }
        return !file.match(/^00/);
      })
      .forEach(async (file: string) => {
        const fn: MigrationFunction = (await import('./migrations/' + file))
          .default;
        await runMigration({ ...options, migrationFunction: fn });
      });
  });
}
main();
