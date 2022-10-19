import Migration from 'contentful-migration';

export default function (migration: Migration) {
  const model = migration.createContentType('fish', {
    name: 'Fish'
  });

  model.createField('name').name('Name').type('Symbol').required(true);
}
