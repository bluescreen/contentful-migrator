import Migration from 'contentful-migration';

export default function (migration: Migration) {
  const model = migration.createContentType('zoo', {
    name: 'Zoo'
  });

  model.createField('name').name('Name').type('Symbol').required(true);
  model
    .createField('animals')
    .name('Animals')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['dog', 'cat', 'fish'] }]
    });
}
