import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-booksclub-spiker', 'Unit | Serializer | i-i-s-booksclub-spiker', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-booksclub-spiker',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-booksclub-doklad',
    'model:i-i-s-booksclub-kniga',
    'model:i-i-s-booksclub-spiker',
    'model:i-i-s-booksclub-vstrecha-kluba',
    'model:i-i-s-booksclub',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
