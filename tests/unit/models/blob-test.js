import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('blob', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
