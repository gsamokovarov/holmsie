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
Holmsie.INITIAL_ACTION = 'add';

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
  },

  // The action to do based on the current state.
  get action() {
    return this.enabled ? 'remove' : 'add';
  }
};

exports.Holmsie = Holmsie;

exports.main = function(options, callbacks) {
  // Includes the holmes.css into the current page.
  PageMod({
    include: ALL,
    contentStyleFile: data.url('holmes/holmes.min.css')
  });

  // Adds a context menu item.
  let item = ContextMenu.Item({
    label: Holmsie.INITIAL_LABEL,
    data: Holmsie.INITIAL_ACTION,
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
      this.data = holmsie.action;
    }
  });

  Tabs.on('ready', function(tab) {
    (tab.holmsie || (tab.holmsie = new Holmsie)).reset();
    item.label = tab.holmsie.label;
    item.data = tab.holmsie.action;
  });
};