import Migration from 'contentful-migration';

export default function (migration: Migration) {
  migration.deleteContentType('cat');
  migration.deleteContentType('dog');
  migration.deleteContentType('fish');
  migration.deleteContentType('zoo');
}
