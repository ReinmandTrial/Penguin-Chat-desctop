//select open-close
// $('.select-header').on('click', function () {
//    var btn = $(this);
//    var block = btn.closest('.select');
//    block.find('.select-body').slideToggle();
//    block.find('.select-icon').toggleClass('icon-triangle-right');
//    block.find('.select-icon').toggleClass('icon-triangle-down');
// })
$('.select-header').on('click', function () {
   var btn = $(this);
   var block = btn.closest('.select');
   var bodyBlock = block.closest('.details__container');
   var blocks = bodyBlock.find('.select');
   if (!block.hasClass('open')) {

      $(blocks).each(function () {
         if ($(this).hasClass('open')) {
            $(this).find('.select-body').slideToggle();
            $(this).removeClass('open');
            $(this).find('.select-icon').toggleClass('icon-triangle-right');
            $(this).find('.select-icon').toggleClass('icon-triangle-down');
         }
      })
   }
   block.toggleClass('open');
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

$('.chat__mark').on('click', function () {
   $(this).toggleClass('active');
})

$('.chat__pick-out').on('click', function () {
   $(this).toggleClass('active');
})