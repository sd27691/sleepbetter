$(function(){
    setInterval(function(){
        $(".slide").delay(2000);
        $(".slide").animate({
            "marginLeft":"-0px"
        });
        $(".slide").delay(2000);
        $(".slide").animate({
            "marginLeft":"-1920px"
        });
        $(".slide").delay(2000);
        $(".slide").animate({
            "marginLeft":"0x"
        });
        $(".slide").delay(2000);
        $(".slide").animate({
            "marginLeft":"1920px"
        });
    });
});




$(function() {
    $(window).on('scroll', function() {
        $('.slide-up ,.slide-down').each(function() {
            const elementTop = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > elementTop + 100) {
                $(this).addClass('show');
            }
        });
    });

    $(window).trigger('scroll'); // 페이지 로드시 바로 확인용
});

$(function(){
    $(".right>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");

        // 이미지 변경
        var imgSrc = $(this).attr("data-img");
        $("#display-img").attr("src", imgSrc);

        // 글씨 변경
        var textContent = $(this).attr("data-text");
        $("#display-text").text(textContent);
    });
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(function() {
    $(window).on('scroll', function() {
        $('.slide-right ,.slide-left').each(function() {
            const elementTop = $(this).offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();
  
            if (scrollTop + windowHeight > elementTop + 100) {
                $(this).addClass('show');
            }
        });
    });
  
    $(window).trigger('scroll'); // 페이지 로드시 바로 확인용
  });

    
   
  var swiper = new Swiper(".card", {
    navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
        },//화살표를 작동하게 하는 옵션.
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },//도트부분을 작동하게 하는 옵션.
        autoplay: {
              delay: 1000,
              /*이미지가 자동으로 넘어가는 시간설정. 1000 = 1초*/
              disableOnInteraction: false,
          },
          loop: true,
          slidesPerView: 3,
          centeredSlides:true,
          spaceBetween: 30,
  });//지우면 안되요!
  

