//Click
$("button").click(function(){
	$(this).css("background","pink");
});
//Keypress
//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
$("input").keypress(function(event){
	if(event.which === 13){
		alert("You hit enter");
	}
	
});
//On
$("h1").on("click", function(){
	$(this).css("color", "purple");
});
//On + mouseenter
$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});
//On + mouseleave
$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});
	
//fadeOut, fadeIn, fadeToggle, slideUp, slideDown, slideToggle
$("button").on("click", function(){
$("div").fadeToggle(1000, function(){
	console.log("...");
	//$(this).remove(); 
});	
});

		   
