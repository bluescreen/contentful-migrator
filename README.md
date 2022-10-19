# Contentful Migrator

Run multiple content ful migration

See https://www.contentful.com/developers/docs/tutorials/cli/scripting-migrations/

Api Docs https://github.com/contentful/contentful-migration/blob/master/README.md#reference-documentation

### Howto

Add migration function to migrations directory follwing the naming convention. ##-task-name.ts

#### Example

```
import Migration from 'contentful-migration';

export default function (migration: Migration) {
  const model = migration.createContentType('fish', {
    name: 'Fish'
  });

  model.createField('name').name('Name').type('Symbol').required(true);
}
```

## Install

```
npm install
```

## Run all migrations

```
npm run migrate
```

## Run cleanup migration

```
npm run cleanup
```
