import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-booksclub-vstrecha-kluba', 'Unit | Model | i-i-s-booksclub-vstrecha-kluba', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
