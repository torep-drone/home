$(document).ready(function() {
  // ハンバーガーメニューのクリックイベント
  $('#hamburger').on('click', function() {
    $('.icon').toggleClass('close');
    $('.sm').fadeToggle(300);
  });

  // サブメニューのクリックイベント
  $('.submenu').on('click', function() {
    $(this).children('ul').slideToggle(300);
  });

  // large-menuのリンククリックイベント
  $('#large-menu li a').on('click', function() {
    $('.icon').removeClass('close');
    $('.sm').fadeOut(300);
  });
});


$(document).ready(function() {
  $('.submenu').click(function() {
    $(this).next('ul').slideToggle();
  });
});

$(document).ready(function() {
  // スクロールイベントの監視
  $(window).scroll(function() {
    var windowHeight = $(window).height(); // ウィンドウの高さ
    var scrollPosition = $(window).scrollTop(); // スクロール位置

    // 各contents-item-wrapの位置と高さを取得して処理
    $('.serviceItem dl').each(function() {
      var offsetTop = $(this).offset().top + 400; // 要素の上部の位置 + 200
      var elementHeight = $(this).outerHeight(); // 要素の高さ
      var elementId = $(this).find('span').attr('id'); // アンカーのID

      // ウィンドウの位置が要素の範囲内にある場合に背景色を変更
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + elementHeight) {
        $('.side-nav-btn').removeClass('active');
        $('.side-nav-btn a[href="#' + elementId + '"]').closest('li').addClass('active');
      }
    });
  });
});

$(function () {
  $(".slider").slick({
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    
  });
});
  


  

  $(".blur").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('blurActive');
    }
  });

  $(".fade").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('fadeActive');
    }
  });

  $(".fadeup").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('fadeupActive');
    }
  });

  $(".zoomin").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('zoominActive');
    }
  });
  
  $(".slidein").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('slideinActive');
    }
  });



$(document).ready(function() {
  $('.accordion-header').click(function() {
    var accordionItem = $(this).parent('.accordion-item');
    accordionItem.toggleClass('active');
    accordionItem.find('.accordion-content').slideToggle(300);
    $(this).find('.arr').toggleClass('active');
  });
});


function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.right <= viewportWidth &&
    rect.bottom <= viewportHeight
  );
}
$(function() {
  var scrollContainer = $('.scroll-container');

  $(window).on('scroll', function() {
    if (isElementInViewport(scrollContainer[0])) {
      // 要素が画面の中央に来た場合の処理（横スクロールに切り替えなど）
      scrollContainer.addClass('active'); // 例えば、active クラスを追加して特定のスタイルを適用する
    } else {
      // 要素が画面の中央から外れた場合の処理
      scrollContainer.removeClass('active'); // active クラスを削除するなど
    }
  });
});


const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// 初期スライドの表示
showSlide(currentSlide);

// 5秒ごとに次のスライドに切り替え
setInterval(nextSlide, 5000);

$(function(){
  $.simpleTicker($('.ticker'),{'effectType':'fade'});
});

$.scrollify({
  section : ".box",//1ページスクロールさせたいエリアクラス名
  scrollbars:"false",//スクロールバー表示・非表示設定
  interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
  easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
  scrollSpeed: 300, // スクロール時の速度
  
  //以下、ページネーション設定
  before:function(i,panels) {
  var ref = panels[i].attr("data-section-name");
  $(".pagination .active").removeClass("active");
  $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
  },
  afterRender:function() {
  var pagination = "<ul class=\"pagination\">";
  var activeClass = "";
  $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
  activeClass = "";
  if(i===$.scrollify.currentIndex()) {
  activeClass = "active";
  }
  pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
  });
  pagination += "</ul>";
  
  $("#box1").append(pagination);//はじめのエリアにページネーションを表示
  $(".pagination a").on("click",$.scrollify.move);
  }
  
  });

  var images = document.querySelectorAll('.thumbnail');
  new simpleParallax(images, {
    orientation: 'down',
    scale: 1.2,
    overflow: true,
    delay: 0,
    transition:cubic-bezier(0,0,0,1),
    customContainer: '.container',
    customWrapper: '.wrapper'
  });
  
 