$(document).ready(function(){
    $(window).scroll(function(){
  
      if($(window).scrollTop() > 50){
        $('.traip').css('top','0');
        $('.traip').css('position','fixed');
      }
      else{
        $('.traip').css('top','50px');
      }
    })
  })
    $(document).ready(function(){
      $(window).scroll(function(){
  
        if($(window).scrollTop() > 50){
          $('#bottom').css('opacity','1');
        }
        else{
          $('#bottom').css('opacity','0');
        }
    })
  
    $('#bottom').click(function(){
      $('html,body').animate({
        scrollTop:0
      },1500)
    })
  })
  var search = document.getElementById('#sea');
  function goster() {
    sea.style.opacity = '1'
    sea.style.zIndex ='11111'
  }
  function gizlet() {
    sea.style.opacity = '0'
    sea.style.zIndex ='-11111'
  }
  $(document).ready(function(){
    $('#time').mouseenter(function(){
      $('#bott').css('opacity','1')
    })
    $('#time').mouseleave(function(){
      $('#bott').css('opacity','0')
    })
  })
 $(document).ready(function(){
   $('#trda').mouseenter(function(){
     $('#men').css('opacity','1')
   })
   $('#trda').mouseleave(function(){
     $('#men').css('opacity','0')
   })
 })

var qeyd=document.getElementById('box-qeyd');
var giris=document.getElementById('box-giris');

function register (){
  qeyd.style.opacity='1'
  giris.style.opacity='0'
}
function login (){
  giris.style.opacity='1'
  qeyd.style.opacity='0'
}
  
  $(document).ready(function(){
    $('#brat').mouseenter(function(){
      $('#span').css('opacity','1')
    })
    $('#brat').mouseleave(function(){
      $('#span').css('opacity','0')
    })
  })
  
  $(document).ready(function(){
    $('.nav-home').mouseenter(function(){
      $('.home').css('opacity','1')
      $('.home').css('display','block')
      $('#down-hom').css('opacity','1')
      $('#hom').css('opacity','0')
  
    })
    $('.nav-home').mouseleave(function(){
      $('.home').css('opacity','0')
      $('.home').css('display','none')
      $('#down-hom').css('opacity','0')
      $('#hom').css('opacity','1')
    })
    $('.nav-page').mouseenter(function(){
      $('.pa').css('opacity','1')
      $('.pa').css('display','block')
      $('#down-ps').css('opacity','1')
      $('#ps').css('opacity','0')
    })
    $('.nav-page').mouseleave(function(){
      $('.pa').css('opacity','0')
      $('.pa').css('display','none')
      $('#down-ps').css('opacity','0')
      $('#ps').css('opacity','1')
    })
    $('.nav-produc').mouseenter(function(){
      $('.pro').css('opacity','1')
      $('.pro').css('display','block')
      $('#down-po').css('opacity','1')
      $('#po').css('opacity','0')
    })
    $('.nav-produc').mouseleave(function(){
      $('.pro').css('opacity','0')
      $('.pro').css('display','block')
      $('#down-po').css('opacity','0')
      $('#po').css('opacity','1')
    })
    $('.nav-hot').mouseenter(function(){
      $('.h').css('opacity','1')
      $('.h').css('display','block')
      $('#down-ho').css('opacity','1')
      $('#ho').css('opacity','0')
    })
    $('.nav-hot').mouseleave(function(){
      $('.h').css('opacity','0')
      $('.h').css('display','block')
      $('#down-ho').css('opacity','0')
      $('#ho').css('opacity','1')
    })
    $('.nav-use').mouseenter(function(){
      $('.u').css('opacity','1')
      $('.u').css('display','block')
      $('#down-us').css('opacity','1')
      $('#us').css('opacity','0')
    })
    $('.nav-use').mouseleave(function(){
      $('.u').css('opacity','0')
      $('.u').css('display','block')
      $('#down-us').css('opacity','0')
      $('#us').css('opacity','1')
    })
    $('.nav-oth').mouseenter(function(){
      $('.o').css('opacity','1')
      $('.o').css('display','block')
      $('#down-ot').css('opacity','1')
      $('#ot').css('opacity','0')
    })
    $('.nav-oth').mouseleave(function(){
      $('.o').css('opacity','0')
      $('.o').css('display','block')
      $('#down-ot').css('opacity','0')
      $('#ot').css('opacity','1')
    })
    $('.nav-dest').mouseenter(function(){
      $('.d').css('opacity','1')
      $('.d').css('display','block')
      $('#down-de').css('opacity','1')
      $('#de').css('opacity','0')
    })
    $('.nav-dest').mouseleave(function(){
      $('.d').css('opacity','0')
      $('.d').css('display','none')
      $('#down-de').css('opacity','0')
      $('#de').css('opacity','1')
    })
    $('.nav-tour').mouseenter(function(){
      $('.t').css('opacity','1')
      $('.t').css('display','block')
      $('#down-to').css('opacity','1')
      $('#to').css('opacity','0')
    })
    $('.nav-tour').mouseleave(function(){
      $('.t').css('opacity','0')
      $('.t').css('display','none')
      $('#down-to').css('opacity','0')
      $('#to').css('opacity','1')
    })
    $('.nav-blog').mouseenter(function(){
      $('.b').css('opacity','1')
      $('.b').css('display','block')
      $('#down-bl').css('opacity','1')
      $('#bl').css('opacity','0')
    })
    $('.nav-blog').mouseleave(function(){
      $('.b').css('opacity','0')
      $('.b').css('display','none')
      $('#down-bl').css('opacity','0')
      $('#bl').css('opacity','1')
    })
  })
 AOS.init();
  