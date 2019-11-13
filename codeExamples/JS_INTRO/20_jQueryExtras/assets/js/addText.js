 $(document).ready(function() {

 	console.log("addText is online");

 	$(".addText").on("click", function() {
 		
 		var textToAdd = prompt("What would you like to add to the webpage?");

 		$(".userText").html(textToAdd);



 	});
 });
