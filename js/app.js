
/*
	Model part: including objects of location, style and etc
*/

/* 
	Variables: (1) style the map, (2) add locaitons info as array of objects, (3) default icon for map pin (4) decleare infowindow 
*/
var map;
var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#4b5c62"
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "geometry",
    "stylers": [
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#929292"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]; 
var locations = [
		{
			location:{lat: 39.956623, lng: -75.189933},
			title:'Drexel University',
			address:'Lancaster Walk, Philadelphia, PA 19104, USA'
		},
        {
	        location:{lat: 39.952220, lng: -75.193204},
	    	title:'University of Pennsylvania',
			address:'3405 Woodland Walk, Philadelphia, PA 19104, USA'
		},
        {
        	location:{lat: 39.948890, lng: -75.155950},
    		title:'Jefferson University',
			address:'130 S 9th St, Philadelphia, PA 19107, USA'
		},
        {
        	location: {lat: 39.946821, lng: -75.207095},
    		title:'University of the Sciences in Philadelphia',
			address:'4217-4231 Woodland Ave, Philadelphia, PA 19104, USA'
		},
        {
        	location: {lat: 40.005195, lng: -75.216562},
    		title:'Philadelphia College of Osteopathic Medicine',
			address:'Evans Hall, Philadelphia, PA 19131, USA'
		},
		{

        	location: {lat: 39.994996, lng: -75.240123},
    		title:'Saint Joseph\'s University',
			address:'5600 City Ave, Philadelphia, PA 19131, USA'
		},
		{
			location: {lat: 39.981194, lng: -75.155353},
			title: 'Temple University',
			address: '1801 N Broad St, Philadelphia, PA 19122, USA'
		},
		{
			location: {lat: 40.038608, lng: -75.156632},
			title: 'La Salle University',
			address: 'Logan/ Ogontz/ Fern Rock, Philadelphia, PA, USA'
		},
		{
			location: {lat: 39.994346, lng: -75.238518},
			title: 'Francis A. Drexel Library',
			address: '5500 Rural Ln, Philadelphia, PA 19131, USA'
		}
];
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
	        } else {
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
		        } else { //when it is successful and data returned
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
	        } else {
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
