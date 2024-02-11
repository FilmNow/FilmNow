document.getElementById('videoSelect').addEventListener('change', function() {
  const videoSource = document.getElementById('videoSource');
  videoSource.src = this.value;
  videoSource.parentNode.load();
});