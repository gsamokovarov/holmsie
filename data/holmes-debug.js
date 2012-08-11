'use strict';

// Collects all of the subframes of a window.
const collectFrames = function(window) {
  let result = [window];

  for (let i = 0, len = window.frames.length; i < len; i++) {
    // For some reason `result.concat` just won't do.
    result = [].concat(result, collectFrames(window.frames[i]));
  }

  return result;
};

self.on('click', function(node, action) {
  let frames = collectFrames(unsafeWindow.top);

  for (let i = 0, len = frames.length; i < len; i++) {
    $('html', frames[i].document)[action + 'Class']('holmes-debug');
  }

  self.postMessage('trigger');
});