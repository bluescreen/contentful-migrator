import Migration from 'contentful-migration';

export default function (migration: Migration) {
  const dog = migration.createContentType('dog', {
    name: 'Dog'
  });

  dog.createField('name').name('Name').type('Symbol').required(true);
}
