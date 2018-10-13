
$(function() {
	// tabulation sources
	$( "#sources" ).tabs();

	// main menu tabs show sub-menu
	$(".sub-menu>div").hide(); // Initially hide all content
    $(".menu ul li:first").attr("id","current"); // Activate first tab
    $(".sub-menu div:first").show(); // Show first tab content
    $('.menu ul li a').click(function(e) {
        e.preventDefault();
        if ($(this).attr("id") == "current"){ //detection for current tab
         return       
        }
        else{             
        $(".sub-menu>div").hide(); //Hide all content
        $(".menu ul li").attr("id",""); //Reset id's
        $(this).parent().attr("id","current"); // Activate this
        $( $(this).attr('href')).show(); // Show content for current tab
        }
    });

	$( "#slider-range, #slider-range-col, #slider-range-gut" ).slider();

    $('.button-list').each(function(){
    	$(this).click(function(){
		// $('.flux-item>ul').hide(); //
			$(this).next('.list').toggle();
    	});
    });

    $('.flux-item>button').each(function(){
    	$(this).click(function(){
			// $('.flux-item>ul').hide(); //
			$(this).next('.flux-item>ul').toggle();
    	});
    });

	// searchable list
	$("#standard, #standard_2").customselect();

});

// color change svg
(document.querySelectorAll('img.svg').forEach(function(img){
	var imgID = img.id;
	var imgClass = img.className;
	var imgURL = img.src;

	fetch(imgURL).then(function(response) {
	return response.text();
	}).then(function(text){

	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(text, "text/xml");

	// Get the SVG tag, ignore the rest
	var svg = xmlDoc.getElementsByTagName('svg')[0];

	// Add replaced image's ID to the new SVG
	if(typeof imgID !== 'undefined') {
	svg.setAttribute('id', imgID);
	}
	// Add replaced image's classes to the new SVG
	if(typeof imgClass !== 'undefined') {
	svg.setAttribute('class', imgClass+' replaced-svg');
	}

	// Remove any invalid XML tags as per http://validator.w3.org
	svg.removeAttribute('xmlns:a');

	// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	if(!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
	svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
	}

	// Replace image with new SVG
	img.parentNode.replaceChild(svg, img);

});

}))();

