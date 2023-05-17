import { module, test } from 'qunit';
import { setupTest } from 'str-handler/tests/helpers';

module('Unit | Route | nomes', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:nomes');
    assert.ok(route);
  });
});
