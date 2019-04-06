var slides = ["tomato",
	      "banana",
	      "zucchini",
	      "brocolli",
	      "barley",
	      "strawberries",
	      "blueberries",
	      "thyme",
	      "yellow onions",
	      "anchovies",
	      "carrot",
	      "garlic",
	      "mushroom",
	      "kale",
	      "milk",
	      "yoghurt",
	      "chips",
	      "sandwich bread",
	      "lunch meat"
	      ];
var str = '<ul>'

    slides.forEach(function(slide) {
	    str += '<li>'+ slide + '</li>';
	}); 

str += '</ul>';
document.getElementById("myUL").innerHTML = str;