//select open-close
$('.select-header').on('click', function () {
   var btn = $(this);
   var block = btn.closest('.select');
   block.find('.select-body').slideToggle();
   block.find('.select-icon').toggleClass('icon-triangle-right');
   block.find('.select-icon').toggleClass('icon-triangle-down');
})
//select open-close

//select выбор элемента
$('.select-item').on('click', function () {
   var btn = $(this);
   var block = btn.closest('.select');
   block.find('.select-body').slideToggle();
   block.find('.select-icon').toggleClass('icon-triangle-down');
   block.find('.select-icon').toggleClass('icon-triangle-up');
})
//select end