var navLogo  = document.getElementsByClassName("nav_logo")[0];
var fullMenu = document.getElementsByClassName("full_menu")[0];

// Forcing element styles
fullMenu.style.left = "100%";
navLogo.style.top = "40px";

function lerp(a, b, t)
{
	return a + (b - a) * t
}

// Hamburger  Menu
var id = null;
var opening = false;
function toggle_hamburger() {

	var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");


	clearInterval(id);
	var left = parseInt(fullMenu.style.left.slice(0, -1));
	var top = parseInt(navLogo.style.top.slice(0, -2));
	var targetTop = 40;

	if(opening)
	{
    	navLogo.style.position = "absolute";
    	navLogo.style.top = 40 + window.scrollY;
    	top = 40 + window.scrollY;

		opening = false;
		id = setInterval(close, 1000/144);
	}
	else 
	{
		targetTop = top + window.scrollY;

		opening = true;
		id = setInterval(open, 1000/144);
	}

  	function open() 
  	{
  		top = lerp(top, targetTop, 0.10);
    	left = lerp(left, 0, 0.10);
    	
    	if (left < 1) 
    	{
    		top = 40;
    		navLogo.style.position = "fixed";
    		
    		left = 0;
      		clearInterval(id);
    	} 

    	navLogo.style.top = top + "px";
    	fullMenu.style.left = left + '%'; 
	}
  	function close() 
  	{
  		top = lerp(top, targetTop, 0.10);
  		left = lerp(left, 100, 0.10);

    	if (left >= 99) 
    	{
    		top = 40;

    		left = 100;
      		clearInterval(id);
    	} 

    	navLogo.style.top = top + "px";
    	fullMenu.style.left = left + '%'; 
	}
}