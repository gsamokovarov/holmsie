'use strict';

const self = require('self');
const ContextMenu = require('context-menu');
const { PageMod } = require('page-mod');

const ALL = '*';

exports.main = function(options, callback) {
  // Includes the holmes.css into the current page..
  PageMod({
    include: ALL,
    contentStyleFile: self.data.url('holmes/holmes.min.css')
  });

  // Adds a context menu item.
  ContextMenu.Item({
    label: 'Toggle Holmsie Inspect',
    context: new ContextMenu.URLContext(ALL),
    contentScriptFile: [
      self.data.url('vendor/jquery-1.7.2.min.js'),
      self.data.url('toggle-holmes-debug.js')
    ],
    contentScriptWhen: 'ready' 
  }); 
}