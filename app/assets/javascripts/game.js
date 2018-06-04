max_count = 10
count = max_count
index = 0

// Event clicking on Capture button
$(document).on('click', '.selectBtn', function(){
  selected_image = $('img[data-index='+ index +']')
  if (selected_image.length > 0) {
    $('table tbody').append('<tr><td>'+ count +'</td><td>'+ getImage(selected_image.attr('src')) +'</td></tr>')

    $.ajax({
      url: '/plays',
      method: 'POST',
      data: {
        plays: {
          timer_value: count,
          image_id: selected_image.data('image-id')
        }
      }
    })
  }
  else {
    alert('Image not found. Please upload some images first.')
  }
})

function setTimerActions() {
  setInterval(function(){
    if (count == 1) { count = max_count }
    else { count-- }

    // countdown
    $('#count').html(count)

    // change image
    total_images = $('img.timer_image').length
    index = getImageIndex(count, total_images)
    $('img.timer_image[data-index='+ index +']').removeClass('hide').addClass('show')
    $('img.timer_image').not('[data-index='+ index +']').removeClass('show').addClass('hide')
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