self.on('click', function() {
  $('html').toggleClass('holmes-debug');
  self.postMessage('trigger');
});
