'use strict';

const ContextMenu = require('context-menu');
const Tabs = require('tabs');
const { PageMod } = require('page-mod');
const { data } = require('self');

const ALL = '*';

const Holmsie = function() {
  // Whether homlsie inspector is enabled or not.
  this.enabled = false;
};

Holmsie.LABEL_MESSAGES = {
  true: 'Disable Holmsie Inspector',
  false: 'Enable Holmsie Inspector'
};

Holmsie.INITIAL_LABEL = Holmsie.LABEL_MESSAGES[false];

Holmsie.prototype = {
  // Toggle the holmsie state.
  toggle: function() {
    this.enabled = !this.enabled;
  },

  // Resets the holmsie state - puts it back to disabled.
  reset: function() {
    this.enabled = false;
  },

  // The appropriate label message for enabled or disabled the inspector.
  get label() {
    return Holmsie.LABEL_MESSAGES[this.enabled];
  }
};

exports.main = function(options, callbacks) {
  // Includes the holmes.css into the current page.
  PageMod({
    include: ALL,
    contentStyleFile: data.url('holmes/holmes.min.css')
  });

  // Adds a context menu item.
  let item = ContextMenu.Item({
    // Set the initial label to the default one.
    label: Holmsie.INITIAL_LABEL,
    context: new ContextMenu.URLContext(ALL),
    contentScriptFile: [
      data.url('vendor/jquery-1.7.2.min.js'),
      data.url('holmes-debug.js')
    ],
    contentScriptWhen: 'ready',
    onMessage: function() {
      let holmsie = Tabs.activeTab.holmsie;
      holmsie.toggle();
      this.label = holmsie.label;
    }
  });

  Tabs.on('activate', function(tab) {
    tab.holmsie || (tab.holmsie = new Holmsie);
    item.label = tab.holmsie.label;
  });
};