function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal() {
  $('#purchaseProductModal').modal('show')
}

$(function() {
  $('.card-img-top').on('click', function() {
    console.log($(this))
    $('.imagepreview').attr('src', $(this).attr('src'));
    $('#imagemodal').modal('show');   
  });		
});