import {
  MigrationFunction,
  runMigration,
  RunMigrationConfig
} from 'contentful-migration';
import fs from 'fs';

const options: RunMigrationConfig = {
  migrationFunction: () => {},
  spaceId: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_CMA_TOKEN,
  environmentId: 'master',
  yes: true
};

async function main() {
  const args: string[] = process.argv.slice(2);
  const deleteFirst = args[0] === 'cleanup';

  fs.readdir('./migrations', (_err, files) => {
    files
      .filter((file) => {
        if (deleteFirst) {
          return file.match(/^00/);
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
