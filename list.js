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
	      "lunch meat",
	      "cauliflower",
	      "apples",
	      "toilet paper",
	      "snacks",
	      "potato",
	      "lime",
	      "eggs",
	      
	      ];
//var str = '<ul>'
//var str = ''

for(var i=0;i<slides.length;i++){
    var li = document.createElement("li");
    var inputValue = slides[i];//document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
	alert("You must write something!");
    } else {
	document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}
//    slides.forEach(function(slide) {
//	    str += '<li>'+ slide + '</li>';
//	}); 

//str += '</ul>';
//document.getElementById("myUL").appendChild();