import Migration from 'contentful-migration';

export default function (migration: Migration) {
  const model = migration.createContentType('zoo', {
    name: 'Zoo'
  });

  model.createField('name').name('Name').type('Symbol').required(true);
}
