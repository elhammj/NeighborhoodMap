
/*
	Model part: including objects of location, style and etc
	Variables: (1) default icon for map pin (2) iconUrl (3) decleare infowindow 
*/
var map;
var iconUrl = 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF7E72';
var infoWindow;

/*
	initMap(): This function to initialize the map and give a center point
	Also, add controls like zoom, street view and scale
*/
function initMap() {
		
	map = new google.maps.Map(document.getElementById('map'), {
    center: locations[6].location,
    zoom: 12,
    styles: mapStyle,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  });

  this.AddMarker(); //To add marker to each location as a key and value
  ko.applyBindings(new LocationsViewModel()); //Binding the view model 
}
    

/*
	Viewmodel part: functions to update the list view and markers
	LocationsViewModel(): crete marker and put a list data as an observable array
	Functions:
	(1) filter the list of lcoations and marker synchronously 
	(2) animate the marker and show the infowindow when one of the list item is clicked
*/
var LocationsViewModel = function () {
	var self = this;
    self.viewLocations = ko.observableArray(locations);
    //bind filter to filter text
		self.filter = ko.observable();
		//For currentSelected
		self.currentSelected = ko.observable();
		
	  //Use filteredList to get the updated list
	  self.filteredList = ko.computed(function () {
	    var copyArr = [];
	    var filter = self.filter();
	    if (filter) {
	    	//Filter the list
        ko.utils.arrayForEach(self.viewLocations(), function (element) {
        	var currentTitle = element.title.toLowerCase();
        	var currentText = filter.toLowerCase();
        	//Search allows the user to find a locaiton that contains this keyword
            if (currentTitle.indexOf(currentText) !== -1) { 
                copyArr.push(element);
                element.marker.setVisible(true);
            }
            else{
            	element.marker.setVisible(false);//set false to hide the marker during filtering 
            }
        });
	    } 
	    else {
        copyArr = self.viewLocations(); //Return the regular markers and locations
        ko.utils.arrayForEach(self.viewLocations(), function (element) {
        element.marker.setVisible(true);
        });
	    } 
	    //Indicate which title has been selected and show infowwindow with animating the marker by calling AddAnimation function 
	    self.locationClicked = function(element) {
	    	if (element.marker.getAnimation() !== null) {
          element.marker.setAnimation(null);
	       }
         else {
	        map.panTo(element.marker.position); //Zoom to the current marker, when it is clicked  
	  			AddInfo(element.marker, infoWindow);
	  			AddAnimation(element.marker,"FFFFFF");
	  		}
	  	};
	    return copyArr;
	}); 
};


/*
	AddMarker(): It is a function to to create a marker, animate a marker when it is clicked and show a custom infowindow by calling AddAnimation and AddInfo functions. 
*/
var AddMarker = function() {

	//create infoWindow and set a max width
	infoWindow = new google.maps.InfoWindow({
		maxWidth: 200
	});

	var marker;
	//Action when the user click on a pin, animate and change the color by calling AddInfo and AddAnimation functions
	function AddAnimationAndInfo(marker) {
  	return function(){
      map.panTo(marker.position); //Zoom to the current marker, when it is clicked   
  		AddAnimation(marker,"FFDF4C");
  		AddInfo(marker, infoWindow); 
	  };
	}

  // Get the position and title from the location array.
 	for (var i=0; i< locations.length; i++)
 	{
 		var position = locations[i].location;
 		var title = locations[i].title;
 		var formatAddress = locations[i].address;
      marker = new google.maps.Marker({
      position:new google.maps.LatLng(position.lat, position.lng), 
      map: map, 
      address: formatAddress,
      title:title, 
      visible: true,
      icon: iconUrl });
    marker.addListener("click", AddAnimationAndInfo(marker), false); //Add Info and Animation to each marker
  	locations[i].marker = marker; //Add a marker to the locaiton object as an attribute
  } 
};


/*
	API Part To Add Info To Infowidow
	ADDInfo: It is a function to add a descreption to the marker's infowindow
	I got the idea about how to set the content from wikipedia (https://github.com/erikaleigh/udacity-neighbourhood-map/blob/master/js/map.js) 
	However; I have wrttien the code from my understanding and implemted that inorder make it works with my other functions. The idea was about handling the return data. 

*/
function AddInfo(marker, infoWindow){	
	//Here is the link, we just pass the marker title	        	
	var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title  + '&format=json&callback=wikiCallback';
		         	

	//Ajax request to retreive data from wikipedia page
	$.ajax({
		url: wikiUrl,
		dataType: "jsonp" }).success(function(response) {
      var wikiLocURL = response[3][0]; //To get first url
      var wikiContent = response[2][0]; //To get a first part of the chosen url
      //Wikipedia API returns undefined 
      if (wikiLocURL === undefined) {
        infoWindow.setContent('<div id="info">' + '<h6>' + marker.title + '</h6></br>' + '<h8>' + marker.address + '</h8> </br></br> <p>' + '*** No Wikipedia data for this location ***' + '</p> </br> <a href="https://en.wikipedia.org/wiki/Main_Page" target="blank">' + 'Visit Wikipedia to Search' + '</a> </p> </div>');
      } 
      else { //when it is successful and data returned
        infoWindow.marker = marker;
        infoWindow.setContent('<div id="info">' + '<h6>' + marker.title + '</h6></br>' + '<h8>' + marker.address + '</h8> </br> </br> <p>' + wikiContent + "...." + '</p> </br> <a href="' + wikiLocURL + '" target="blank">' + 'Visit Wikipedia to Read More' + '</a> </p> </div>');
      }
      infoWindow.open(map, marker);
      //When Wikipedia Return 
      }).error(function() {
        infoWindow.setContent('<div id="info">' + '<h6>' + marker.title + '</h6></br>' + '<h8>' + marker.address + '</h8> </br> </br> <p>' + '*** Error while retreving wikipedia data ***' + '</p> </br> <a href=href="https://en.wikipedia.org/wiki/Main_Page" target="blank">' + 'Visit Wikipedia' + '</a> </p> </div>');
        infoWindow.open(map, marker);
	});
}

/*
	AddAnimation: It is a function to add a animation and change color when the it is called
*/

function AddAnimation(marker,color){
 if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  }
  else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    marker.setIcon('https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + color);
    setTimeout(function () {
    marker.setAnimation(null);
    marker.setIcon(iconUrl);
    }, 700);
  }
}
	

/*
	handleError: It is a function to handle google map error
*/
function handleError(){
	alert("There is a problem in loading google map, try gaian !");
}

/* 
	showSideBar: It is a function to control the toggle, to be responsive with small screen 
*/
function showSideBar() {
	if (document.getElementById('sidebar').style.display == 'none'){
    document.getElementById('sidebar').style.width = "30%";
    document.getElementById('sidebar').style.display = "block";
    document.getElementById('mapCol').style.width = "70%";
	}
	else{
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('mapCol').style.width = "100%";
	}
}
