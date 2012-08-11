const { Holmsie } = require('main');

exports['test holmse should be disabled by default'] = function(test) {
  console.log(require('self').data.url('holmes-debug'));
  test.assertEqual(new Holmsie().enabled, false);
};

exports['test toggle inverts the state'] = function(test) {
  let holmsie = new Holmsie;

  holmsie.toggle();
  test.assertEqual(holmsie.enabled, true);

  holmsie.toggle();
  test.assertEqual(holmsie.enabled, false);
};

exports['test label changes dynamically'] = function(test) {
  let holmsie = new Holmsie;

  test.assertEqual(holmsie.label, Holmsie.LABEL_MESSAGES[false]);

  holmsie.toggle(),
  test.assertEqual(holmsie.label, Holmsie.LABEL_MESSAGES[true]);
};