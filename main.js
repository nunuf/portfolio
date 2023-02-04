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

  $('.my-slides').hide();
  $('#1').show();

  $('.column').on('click', function () {
    $('.my-slides').hide();
    const id = $(this).attr('data-id');
    $('#' + id).show();
    const url = $(this).attr('data-url');
    $('#caption').html(`<a href="${url}" target="_blank">${url}</a>`);
  });
  
  const showSlides = (id) => {
    $('.my-slides').hide();
    $('#' + id).show();
    // $('#caption').html(`<a href="${dots[slideIndex-1].alt}">${dots[slideIndex-1].alt}</a>`);
  };

  let slideIndex = 1;
  showSlides(slideIndex);

  $('#prev').on('click', function () {
    showSlides(slideIndex -= 1);
  });

  $('#next').on('click', function () {
    showSlides(slideIndex += 1);
  });
  
  /* ----- Contact tab ----- */

  // Contact tab click event handler
  $('#contact').on('click', function () {
  });
});