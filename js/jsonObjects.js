/*
Json Objects: (1) style the map, (2) add locaitons info as array of objects
*/


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