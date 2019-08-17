//$("li").click(function(){
	//if li is gray then turn it black
	//if($(this).css("color") === "rgb(128, 128, 128)"){
		//$(this).css({
		//color: "black",
		//textDecoration: "none"
	//});
	//}
	//else turn it gray
	//else{
	//$(this).css({
	//	color: "gray",
	//	textDecoration: "line-through"
	//});
	//}
//});
//Check off Specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

//Click X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopImmediatePropagation();
});

//Adding and clicking Enter
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new text
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
})