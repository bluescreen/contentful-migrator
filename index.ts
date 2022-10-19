import migrationFunction from './01-test-migration';
import { runMigration, RunMigrationConfig } from 'contentful-migration';

const options: RunMigrationConfig = {
  migrationFunction,
  spaceId: 'wlq71ffh75ks',
  accessToken: '1_eFESSLztnqt_xWr0PFubAPXeHeQeknhtd-Zs2NVzo',
  yes: true
};

runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e));
