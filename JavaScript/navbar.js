
  $(document).ready(function () {

    $('.navbar-nav .nav-item').click(function(){
      $('.navbar-nav .nav-item').removeClass('active');
      $(this).addClass('active');
    });

    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll >= 200)
      {
        $('#navigationBar').css({"background-color": "black", "box-shadow": "0 5px 5px rgb(68, 68, 68)"})
      }
      else
      {
        $('#navigationBar').css({"background-color": "rgba(0,0,0,0)", "box-shadow": "0 0 0 0"})
      }
    });

});