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
    // evt.currentTarget.className += " active";

    // document.getElementsByClassName("kido-lo").classList.remove('active');

    $(".Awessome-item").removeClass("active");

    evt.currentTarget.classList.add('active');

  }


// Add active class to the current button (highlight it)
// var header = document.getElementById("myDIV");
// var btns = document.getElementsByClassName("Awessome-item");
//   btns.addEventListener("click", function() {
//   // var current = document.getElementsByClassName("active");
//     btns.classList.remove('active');
//   // current[0].className = current[0].className.replace(" active", "");
//     this.classList.add('active');
//   });


$(document).ready(function(){
  $("#myModal").modal('show');
});

$(document).ready(function(){
  $("#mybtn").click(function(){
    $("#myModal").modal('show');
  });
});

