$( document ).ready(function() {
	
	//progress bar
	let containerA = document.getElementById("circleA");

	let circleA = new ProgressBar.Circle(containerA, {
		color: '#65daf9',
		strokewidth: 8,
		duration: 1400,
		from: { color: '#aaa'},
		to: { color: '#65daf9'},

		step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);

			var value = Math.round(circle.value() * 50);
			circle.setText(value);
			
		}

	});

	let containerB = document.getElementById("circleB");

	let circleB = new ProgressBar.Circle(containerB, {
		color: '#65daf9',
		strokewidth: 8,
		duration: 1400,
		from: { color: '#aaa'},
		to: { color: '#65daf9'},

		step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);

			var value = Math.round(circle.value() * 100);
			circle.setText(value);
			
		}

	});

	let containerC = document.getElementById("circleC");

	let circleC = new ProgressBar.Circle(containerC, {
		color: '#65daf9',
		strokewidth: 8,
		duration: 1400,
		from: { color: '#aaa'},
		to: { color: '#65daf9'},

		step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);

			var value = Math.round(circle.value() * 150);
			circle.setText(value);
			
		}

	});

	let containerD = document.getElementById("circleD");

	let circleD = new ProgressBar.Circle(containerD, {
		color: '#65daf9',
		strokewidth: 8,
		duration: 1400,
		from: { color: '#aaa'},
		to: { color: '#65daf9'},

		step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);

			var value = Math.round(circle.value() * 200);
			circle.setText(value);
			
		}

	});

	// iniciando o loader quand o usuario chega no elemento
	let dataAreaoffset = $('#data-area').offset();
	let stop = 0;

	$(window).scroll(function (e) {

		let scroll = $(window).scrollTop();

		if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
	});

	circleA.animate(1.0);
			circleB.animate(1.0);
			circleC.animate(1.0);
			circleD.animate(1.0);
});