const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function openCity1(evt, cityName) {

    // console.log(document.getElementById(cityName));
    // document.getElementById(cityName).focus();

    // const element = document.getElementById(cityName);
    // $('#'+cityName).focus();

    // if (element.value.length >= 10) {
        // alert("Mobile Number Should be in 10 digits only");
        // element.value = "";
        // window.setTimeout(() => element.focus(), 0);
        // return false;
    // }
    $(".Awessome-items").removeClass("active");

    evt.currentTarget.classList.add('active');


  }

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    document.getElementById(cityName).style.display = "block";
    // document.getElementById(cityName).focus();

    // evt.currentTarget.className += " active";

    // document.getElementsByClassName("kido-lo").classList.remove('active');

    $(".Awessome-items").removeClass("active");

    evt.currentTarget.classList.add('active');

  }


$(document).ready(function(){
  $("#myModal").modal('show');
});



$(document).ready(function(){

  $("#mybtn").click(function(){
    $("#myModal").modal('show');
  });

  $("#videoModBtn").click(function(){
    $("#my_modal").modal('show');
  });

  // $('.carousel').carousel()

});


// $(function () {
//   $('#scrollToBottom').bind("click", function () {
//     $('html, body').animate({ scrollTop: $(document).height() }, 1200);
//       return false;
//   });
// });


const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target  = +counter.getAttribute('data-target');

        const count = +counter.innerText

        const inc = target/speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }else{
            count.innerText =target;
        }
    }

    updateCount();
});


function myMap() {
  var mapStyle = [{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels",stylers:[{visibility:"on"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#f2f5f7"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#d9e3e8"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#d9e3e8"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#e6eaea"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}];
  var loctn_filt = [[20.5937,78.9629],[51.3781,-1.4360],[37.0902,125.7129],[35.8617,-104.1954]];

  var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  var mapZoom = vw > 900 ? 2 : 1;
  // console.log(vw);

  var mapProp= {
      center:new google.maps.LatLng(0,0),
      zoom:mapZoom,styles:mapStyle,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  for (i = 0; i < loctn_filt.length; i++) {
    // console.log(loctn_filt[i][0]);
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(loctn_filt[i][0], loctn_filt[i][1]),
          map: map,icon:"https://storage.googleapis.com/kido-assets/mapMarker.svg"
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
          infowindow.setContent("<b>Test</b><i>italic</i>");
          infowindow.open(map, marker);
      }
      })(marker, i));
  }
// console.log(loctn_filt);
}



    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
      if ($(this).scrollTop() >= window.innerHeight) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });



  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > window.innerHeight);
  });


  // var container = document.getElementById("zoom_container");
  // var zoom_img = document.getElementById("zoom_img");

  const container = document.getElementById("zoom_container");
  const zoom_img  = document.getElementById("zoom_img");

  container.addEventListener("mousemove", onZoom);
  container.addEventListener("mouseover", onZoom);
  container.addEventListener("mouseleave", offZoom);
  function onZoom(e) {
      const x = e.clientX - e.target.offsetLeft;
      const y = window.scrollY + e.clientY - e.target.offsetTop ;
      // const y = e.clientY - Math.round((e.clientY * 25) /100);
      // const result = Math.round((e.clientY / 10) * 100)
      // console.log(x,"              ",y,"              ",window.scrollY);
      zoom_img.style.transformOrigin = `${x}px ${y}px`;
      zoom_img.style.transform = "scale(2.5)";
  }
  function offZoom(e) {
      zoom_img.style.transformOrigin = `center center`;
      zoom_img.style.transform = "scale(1)";
  }
