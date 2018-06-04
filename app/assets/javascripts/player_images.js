$(document).ready(function(){
  $('#playerImageUploader').on('ajax:success', function(e, data, status, xhr){
    alert('Images uploaded successfully.');
    window.location.reload(true);
  }).on('ajax:error',function(e){
    alert(e.detail[0].data);
  });
});