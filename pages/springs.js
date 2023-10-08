$(document).ready(function() {
    //accordeon
    $('.accordion-toggle').on('click', function(event) {
      event.preventDefault();
      var accordion = $(this);
      var accordionContent = accordion.next('.accordion-content');
      accordion.toggleClass('open');
      accordionContent.slideToggle(250);
    });
  
    // sidebar menu
    //onclick
    // $('li a').on('click', setActive);
  
    // function setActive() {
    //   $('li a').removeClass('active');
    //   $(this).addClass('active');
    // }
  
    $(document).on('scroll', onScroll);
  
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      $(document).off('scroll');
      $('a').each(function() {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      var target = this.hash,
        menu = target;
      $target = $(target);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top + 2
          },
          600,
          'swing',
          function() {
            window.location.hash = target;
            $(document).on('scroll', onScroll);
          }
        );
    });
  });
  
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#sidebar a').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('#sidebar ul li a').removeClass('active');
        currLink.addClass('active');
      } else {
        currLink.removeClass('active');
      }
    });
  }