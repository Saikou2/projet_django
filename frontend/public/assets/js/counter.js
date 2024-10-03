var a = 0;
$(window).scroll(function() {
  var oTop = $('.mu-single-counter').offset()?.top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      if (!isNaN(countTo)) { // Vérifiez si countTo est un nombre
        $({
          countNum: parseInt($this.text(), 10) // Assurez-vous que le texte initial est un nombre
        }).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          }
        );
      } else {
        console.warn('Invalid data-count value: ', countTo);
      }
    });
    a = 1;
  }
});
