let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click",function(){
	if(navWrapper.classList.contains("active")){
		this.setAttribute("aria-expanded","false");
		this.setAttribute("aria-label","menu");
		navWrapper.classList.remove("active");
	}
	else{
		navWrapper.classList.add("active");
		this.setAttribute("aria-label","close menu");
		this.setAttribute("aria-expanded","true");
	}});

/* ========================================== 
control lorsque la hauteur scroller sera superieure 
a 500
scrollTop() >= 500
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 500) {
        $('.site-header').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('.site-header').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});
