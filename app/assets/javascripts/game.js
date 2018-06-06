var max_count = 10
var count = max_count
var index = 0

// Event clicking on Capture button
window.onload = function() {
  document.getElementById("captureBtn").onclick = function() {
    var selected_image = document.querySelectorAll('[data-index="'+ index +'"]')
    if (selected_image.length > 0) {
      var table = document.getElementById("play_details");
      var htmlString = '<tr><td>'+ count +'</td><td>'+ getImage(selected_image[0].getAttribute('src')) +'</td></tr>'
      
      table.insertAdjacentHTML('beforeend', htmlString);

      // create a new XMLHttpRequest object!
      var myRequest = new XMLHttpRequest();
      var token = encodeURIComponent(document.getElementsByName("csrf-token")[0].getAttribute('content'));
      var params = 'plays[timer_value]='+count+'&plays[image_id]='+selected_image[0].getAttribute("data-image-id")+'&authenticity_token='+token
      
      // open the request and pass the HTTP method name and the resource as parameters
      myRequest.open('POST', '/plays', true);
      myRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      // write a function that runs anytime the state of the AJAX request changes
      myRequest.onreadystatechange = function () {
        if (myRequest.readyState === 4) {
        };
      };
      myRequest.send(params);
    }else {
      alert('Image not found. Please upload some images first.')
    }
  };
}

function setTimerActions() {
  setInterval(function(){
    if (count == 1) { count = max_count }
    else { count-- }

    // countdown
    document.getElementById("count").innerHTML = count

    // change image
    total_images = document.getElementsByClassName('timer_image').length
    index = getImageIndex(count, total_images)

    images = document.getElementsByClassName('timer_image')
    image = document.querySelector('[data-index="'+ index +'"]')
    image.classList.remove('hide')
    image.classList.add('show')

    other_image = document.querySelectorAll('img.timer_image:not([data-index="'+ index +'"])')
    for (var i=0; i<other_image.length; i++) {
      other_image[i].classList.remove('show')
      other_image[i].classList.add('hide')
    }
  }, 1000);
}

// get image index from timer value
function getImageIndex(count, total_images) {
  difference = max_count - count
  index = difference % total_images
  return index;
}


function getImage(src) {
  return "<img width='200' height='100' src="+ src +">"
}