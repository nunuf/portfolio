"use strict";
/// <reference path="jquery-3.6.0.js" />

// Document Ready
$(() => {

  /* ----- Home tab ----- */

  // Home tab click event handler
  $('#home').on('click', function () {
  });

  /* ----- About tab ----- */

  // About tab click event handler
  $('#about').on('click', function () {
    const birthday = new Date('10/08/1992');
    // calculate month difference from current date in time
    const month = Date.now() - birthday.getTime();
    // convert the calculated difference in date format
    const ageDiffDate = new Date(month); 
    // extract year from date    
    const year = ageDiffDate.getUTCFullYear();
    // calculate age
    const age = Math.abs(year - 1970);
    $('#age').html(age);
  });

  /* ----- Portfolio tab ----- */

  // Portfolio tab click event handler
  $('#portfolio').on('click', function () {
  });

  $('.column').on('click', function () {
    $('.my-slides').hide();
    const id = $(this).attr('data-id');
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

  // Contact tab click event handler
  $('#contact').on('click', function () {
  });
});