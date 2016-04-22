function ready () {
  // Our document-ready stuff goes here

}

// run the ready() function on the standard document ready event
$(document).ready(ready);
// run the ready() function on the turbolinks page:load event
$(document).on('page:load', ready);