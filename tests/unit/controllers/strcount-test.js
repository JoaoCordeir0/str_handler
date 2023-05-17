import { module, test } from 'qunit';
import { setupTest } from 'str-handler/tests/helpers';

module('Unit | Controller | strcount', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:strcount');
    assert.ok(controller);
  });
});
