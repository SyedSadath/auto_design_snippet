
$(document).ready(function(){

	$('#hood-map').hover(function(){
		$('#hood').attr('src','img/hood.png');
	});

	$('#door-map').hover(function(){
		$('#door').attr('src','img/door.png');
		// alert("door activated");
	});

	$('.banner34').hover(function(){
		$('#hood').attr('src','');
		$('#door').attr('src','');
	});


	// $('.banner34').hover(function(){

	// 	$(this).attr('src','img/car2.jpg');

	// });

	// $('#particles-js').hover(function(){

	// 	$('.banner34').attr('src','img/car1.jpg');
	// });



	// $('.banner34').hover(function(){
	// 	$(this).attr('src','img/mustang_car.png');
	// 	$('.mimg').attr('src', 'img/wheel_newd.png');
	// });

	// $('.mimg').hover(function(){
	// 	$(this).attr('src', 'img/wheel_new.png');
	// 	$('.banner34').attr('src','img/mustang_car.png');
		
	// });
		
});

