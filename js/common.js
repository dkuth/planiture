$(document).ready(function(){   
  $('.header .gnb > ul > li').mouseenter(function(){
    if(!$(this).children('ul').is(':visible')){
      $('.header').addClass('active');
      $('.header .gnb > ul > li > ul').slideDown();
      $('.header .gnb_bg').slideDown();
    }
  });
  $('.header .gnb > ul').mouseleave(function(){
    $('.header .gnb > ul > li > ul').slideUp(function(){
      $('.header').removeClass('active');
    });
    $('.header .gnb_bg').slideUp();
  });
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('.header').addClass('scroll');
    } else {
      $('.header').removeClass('scroll');
    }
  });
  
  $('.header .toggle_active').click(function(){
    $('.header .menu').fadeToggle();
  });
  
  $(window).on('load resize', function(){
    if(window.innerWidth > 1024){
      $('.header .toggle_gnb > ul > li > ul').show();
    } else{
      $('.header .toggle_gnb > ul > li > ul').hide();
    }
  });
  $('.header .toggle_gnb > ul > li > h2').click(function(){
    if($(this).parent().find('ul').css('display') == 'block'){
      $(this).parent().find('ul').hide();
    }else{
      $('.header .toggle_gnb > ul > li > ul').hide();
      $(this).parent().find('ul').show();
    }
  });
});
  
$(document).ready(function(){
  $('.main .section01 .slide-ul').slick({
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1200,
    arrows: false,
    fade:true,
    customPaging : function(slider, i){
    return '<a href="javascript:void(0)">0' + (i+1) + '</a>'
    }
  });
});

$(document).ready(function(){	   
  $('.main .section03 .cont .slide-ul2').slick({
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite:true,
    autoplay: true,
    speed:1200,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ] 
  });
});

window.onload = function() {
  var bannerLeft=0;
  var first=1;
  var last;
  var imgCnt=0;
  var $img = $(".banner img");
  var $first;
  var $last;

  $img.each(function(){ // 20px 간격으로 배너 처음 위치 시킴
      $(this).css("left",bannerLeft);
      bannerLeft += $(this).width()+20;
      $(this).attr("id", "banner"+(++imgCnt));// img에 id 속성 추가
  });

  if( imgCnt > 5){  //배너 9개 이상이면 이동시킴
    last = imgCnt;
    setInterval(function() {
      $img.each(function(){
        $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
        });
      $first = $("#banner"+first);
      $last = $("#banner"+last);
      if($first.position().left < -140) {    // 제일 앞에 배너 제일 뒤로 옮김
        $first.css("left", $last.position().left + $last.width()+20 );
          first++;
          last++;
          if(last > imgCnt) { last=1; }   
          if(first > imgCnt) { first=1; }
      }
    }, 50); 
  }
};

