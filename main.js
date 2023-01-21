"use strict";
/// <reference path="jquery-3.6.0.js" />

// Document Ready
$(() => {

  /* ----- SPA ----- */

  $('section').hide();
  $('#homeSection').show();

  $('a').on('click', function () {
    const dataSection = $(this).attr('data-section');
    $('section').hide();
    $('#' + dataSection).show();
  });

  /* ----- AJAX ----- */

  const getJSON = (url) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        success: data => {
          resolve(data);
        },
        error: err => {
          reject(err);
        }
      });
    });
  };

  /* ----- Local Storage ----- */

  // Save to localStorage
  const saveToLocalStorage = (key, data) => {
    const value = JSON.stringify(data);
    localStorage.setItem(key, value);
  };

  // Get from localStorage
  const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  };

  // Delete from localStorage
  const deleteFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  /* ----- Search ----- */
  // Search click event
  $('.search-btn').on('click', function () {
    search();
  });
  
  // Search Enter and X event
  $('input[type=search]').on('search', function () {
    search();
  });
  
  // Search handler
  const search = () => {
    let projects = getFromLocalStorage('projects');
    const textToSearch = $('input[type=search]').val().toLowerCase();
    if (textToSearch === '') {
      displayProjects('projects', projects);
    } else {
      const filteredProjects = projects.filter(c => c.symbol === textToSearch);
      if (filteredProjects.length > 0) {
        displayProjects('projects', filteredProjects);
      } else {
        $('#projects').html('<h1>No projects found</h1>');
        $('input[type=search]').val('');
      }
    }
  };

  /* ----- Common ----- */

  // Show loader
  const showLoader = (div, loaderClass) => {
    $(div).addClass(loaderClass);
  };

  // Hide loader
  const hideLoader = (div, loaderClass) => {
    $(div).removeClass(loaderClass);
  };

  // Audio player
  const play = (index) => {
    $('audio').get(0).pause();
    $('audio').get(1).pause();
    $('audio').get(2).pause();
    $('audio').get(3).pause();
    $('audio').get(index).play();
  };

  /* ----- Home tab ----- */

  // Home tab click event handler
  $('#home').on('click', function () {
    play(1);
  });

  /* ----- Portfolio tab ----- */

  // Portfolio tab click event handler
  $('#portfolio').on('click', function () {
    play(2);
  });

  /* ----- Contact tab ----- */

  // Contact tab click event handler
  $('#contact').on('click', function () {
    play(3);
    const birthday = new Date("10/08/1992");
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
});