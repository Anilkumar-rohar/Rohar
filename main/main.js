$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/*service page javascrip */
jQuery(document).ready(function($){
  
  function cleartext() {

  document.getElementById('microassessment').style.display = "none";
  document.getElementById('documentreview').style.display = "none";
  document.getElementById('macroassessment').style.display = "none";
  document.getElementById('deliverableservices').style.display = "none";
  document.getElementById('projectexecution').style.display = "none";
  document.getElementById('dpooutsourcing').style.display = "none";
  }
  
$(document).on('click', '.service', function(e) {
    var that = $(this);
    var x = that.attr('id');
    var rel = that.data('rel');
    var ajaxurl = that.data('url');
if ((document.querySelector('.row1expand') !== null) && $(this).hasClass("selectedservice"))  
  
  /* Collapse if expanded and same click */
{
     $("#servicechoicetext").animate({left: '390px', opacity: '0.4'}, "200", servicechoiceblank); 
     function servicechoiceblank(){document.getElementById('servicechoicetext').innerHTML = "View Services";}
      $(".row1").toggleClass('row1expand');
      $(".row2").toggleClass('row2expand');
      $(".service").toggleClass('serviceexpand');
      $(this).toggleClass('selectedservice');
    $('#servicesdetailschild').removeClass('visible');
  
     setTimeout(function(){
         cleartext();
}, 1000);
}
  
  /* Expanded - change selection */
  else if (document.querySelector('.row1expand') !== null) 
{
  $(".selectedservice").removeClass('selectedservice');
  $(this).toggleClass('selectedservice');
  
  var servicechoicetextvar = $(this).find("p").text();
   
  $('#servicesdetailschild').removeClass('visible');
  
function bodytext() {
    cleartext()
     if (servicechoicetextvar.trim() === "Web Development") {
    document.getElementById('microassessment').style.display = "block";
  }
    if (servicechoicetextvar.trim() === "Digital Marketing") {
    document.getElementById('documentreview').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "Machine Learning & Artificial Intelligence") {
    document.getElementById('macroassessment').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "Mechatronics") {
    document.getElementById('deliverableservices').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "Robotics & Automation") {
    document.getElementById('projectexecution').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "DPO OUTSOURCING") {
    document.getElementById('dpooutsourcing').style.display = "block";
  }}
       setTimeout(function(){
         bodytext();
}, 400);
  
  if (document.getElementById('servicechoicetext').innerHTML !== servicechoicetextvar)
    {
     /*execute sliding text*/
      function servicechoicechange() {
     document.getElementById('servicechoicetext').innerHTML = servicechoicetextvar;
 $('#servicesdetailschild').addClass('visible');
      }
           
        $("#servicechoicetext").animate({left: '350px', opacity: '0.9'}, "400", servicechoicechange); 
              $("#servicechoicetext").animate({left: '70px', opacity: '0.9'}, "700"); 
    }
}
/*First expansion? */
else {
      $(".row1").toggleClass('row1expand');
        $(".row2").toggleClass('row2expand');
        $(".service").toggleClass('serviceexpand');
      $(this).toggleClass('selectedservice');
    var servicechoicetextvar = $(this).find("p").text();
  document.getElementById('servicechoicetext').innerHTML = servicechoicetextvar;
  $("#servicechoicetext").animate({left: '70px', opacity: '0.9'}, "700");
  
  function bodytext() {
     if (servicechoicetextvar.trim() === "MICRO ASSESSMENT") {
    document.getElementById('microassessment').style.display = "block";
  }
    if (servicechoicetextvar.trim() === "DOCUMENT REVIEW") {
    document.getElementById('documentreview').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "MACRO ASSESSMENT") {
    document.getElementById('macroassessment').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "DELIVERABLE-BASED SERVICES") {
    document.getElementById('deliverableservices').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "END-TO-END PROJECT EXECUTION") {
    document.getElementById('projectexecution').style.display = "block";
  }
      if (servicechoicetextvar.trim() === "DPO OUTSOURCING") {
    document.getElementById('dpooutsourcing').style.display = "block";
  }}
  
     setTimeout(function(){
       bodytext();
}, 1000);
  
   setTimeout(function(){
       $('#servicesdetailschild').addClass('visible');
}, 1100);
       }
});
});
 


/*initial launch code*/
/*global $*/
$(document).ready(function () {
    "use strict";
    var heading = $('#our-services .desc .heading h1'),
        txt = $('#our-services .desc .text'),
        serviceItem = $('#our-services .services .column .service'),
        tl = new TimelineLite();

    tl
        .from(heading, 0.3, {opacity : 0, y : -20}, '+=0.3')
        .from(txt, 0.3, {opacity : 0, y : -20})
        .staggerFrom(serviceItem, 0.2, {opacity : 0, x : -50, autoAlpha : 0}, 0.1);
});
  
class Defilee {
  constructor(element) {
    if (!element) {
      return;
    }
    this.element = element;
    this._name = "defilee";
    this._itemSelector = "." + this._itemClass;
  }
  init() {
    this.addLoop();
  }
  addLoop() {
    const parent = this.element;
    Array.prototype.slice
      .call(this.element.children)
      .reverse()
      .forEach((el) => {
        const clone = el.cloneNode(true);
        clone.classList.add("clone");
        parent.insertBefore(clone, parent.firstChild);
      });
  }
}

const defilee = new Defilee(document.getElementById("defilee"));
defilee.init();




/* animation js */


/* image slider */


 
   
  