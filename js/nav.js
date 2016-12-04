$(document).ready(function() {
  window.location.hash = window.location.hash || '#posts'
  window.onhashchange = navigateToHash;

  function updatePage(sec) {
    var updaterFn = window[sec.attr('updater')]
    if (updaterFn) updaterFn();
  }

  function navigateToHash() {      
    $('body > section').hide();

    var secName = winHash();
    var sec = $('#'+secName);
    sec.show();

    updatePage(sec);
    window.scrollTo(0,0);
  }

  navigateToHash();
});