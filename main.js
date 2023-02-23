"use strict";
/// <reference path="jquery-3.6.0.js" />

// Document Ready
$(() => {

  /* ----- Home tab ----- */

  // Home tab click event handler
  $('section').hide();
  $('#homeSection').show();

  $('a').on('click', function () {
    const dataSection = $(this).attr('data-section');
    $('section').hide();
    $('#' + dataSection).show();
  });

  /* ----- About tab ----- */

  /* ----- Portfolio tab ----- */

  // Portfolio tab click event handler
  $('#portfolio').on('click', function () {
  });

  $('.column').on('click', function () {
    $('.my-slides').hide();
    const id = $(this).attr('data-id');
    $('.thumbnail').removeClass('.active');
    $('.' + id).addClass('.active');
    showSlide(id);
  });
  
  const navigate = (id) => {
    $('.my-slides').hide();
    if (id < 1) { id = 1; }
    if (id > $('.my-slides').length) { id = $('.my-slides').length; }
    showSlide(id);
  };

  const showSlide = (id) => {
    slideIndex = id;
    $('#' + slideIndex).show();
    const url = $('#' + slideIndex).attr('data-url');
    $('.thumbnail').removeClass('active');
    $('.' + id).addClass('active');
    $('#caption').html(`<a href="${url}" target="_blank">${url}</a>`);
  };

  $('#prev').on('click', function () {
    navigate(slideIndex - 1);
  }); 

  $('#next').on('click', function () {
    navigate(slideIndex + 1);
  });

  let slideIndex = 1;
  navigate(slideIndex);
  
  /* ----- Contact tab ----- */

  // Clear inputs after submit
  $('#submit').on('click', function (){
    setTimeout(function() {
      $('form').trigger('reset');   
    }, 2000);
  });
});