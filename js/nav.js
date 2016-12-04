$(document).ready(function() {
  window.location.hash = window.location.hash || '#posts'
  window.onhashchange = navigateToHash;

  function updatePage(page) {
    var pageLoader = window[page+'Update'];
    if (pageLoader) pageLoader();
  }

  function navigateToHash() {  
    var sec = winHash();
    $('body > section').hide();
    $('#'+sec).show();
    
    updatePage(sec);
    window.scrollTo(0,0);
  }

  navigateToHash();
});