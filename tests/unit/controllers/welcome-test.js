import {
  moduleFor,
  test
} from 'ember-qunit';
//todo pass 'development' into this module
import config from  '../../../config/environment';

moduleFor('controller:welcome', {
  // Specify the other units that are required for this test.
  needs: ['controller:application']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});
