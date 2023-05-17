import { module, test } from 'qunit';
import { setupTest } from 'str-handler/tests/helpers';

module('Unit | Route | strhandler', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:strhandler');
    assert.ok(route);
  });
});
