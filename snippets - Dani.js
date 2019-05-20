// HTML
// disable zooming
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">

// CSS 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
}

:root {
    --black: #000;
}

a, 
a:hover,
a:visited,
a:focus,
a:hover:active {
    text-decoration: none;
    color: var(--black);
}

ul {
    list-style-type: none;
}

button {
    cursor: pointer;
}





// JS stuff
// check if the user is on mobile or tablet (this will only work on a live[hosted] website)
var r = navigator.userAgent.match(/iPad | iPhone | iPod | Android | webOS | Blackberry | Windows Phone/g) ? !0 : !1; 
// if yes .. add class to the body and stop the hover effects
if(r) {
    // Option 1: using jQuery 
    $("body").addClass("stop_hover");

    // Option 2: using pure JS 
    document.querySelector("body").classList.add("stop_hover");
};



// activate hamburger icon JS and stop scrolling when active

document.querySelector( ".hamburger" ).addEventListener( "click", function() {
    
    document.querySelector( ".barmy__navbar" ).classList.toggle( "barmy__navbar_open" );
    document.querySelector( "body" ).classList.toggle( "stop_scroll" );
});


// on document ready function JS
document.addEventListener('DOMContentLoaded', function() {
    
}, false);

// on window load
window.onload = function() {
   
};

// Tiny Slider  example plugin settings
var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    autoplayTimeout: 1000,
    nav: false,
    arrowKeys: true,
    mouseDrag: true,
    
  });


{ /* for .htaccess file */ }
{/* read all these types of files on same or different server */}
  .htaccess
  <IfModule mod_headers.c>
  <FilesMatch "\.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js|json)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>