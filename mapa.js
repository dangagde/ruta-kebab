mapboxgl.accessToken = 'pk.eyJ1IjoibWp2YWxlbnp1ZWxhIiwiYSI6ImNrb2Fmdm9zZDBpM28ybnFtYTQ2Z2MwMnYifQ.ZY3jTw0-6tjUSOOJXJHsdw'


const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-5.981030180503038,37.389350696775914]
        },
        'properties': {
          'title': 'Aladdin',
          'location': 'C. Juan Antonio Cavestany, 6',
          'description': '13:00-16:30 / 20:00-23:30'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [ -5.99437914450759,37.40453071677496]
        },
        'properties': {
          'title': 'Kebab Torneo',
          'location': 'C. Avicena, 5',
          'description': '12:30-16:30 / 20:30-00:30'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':  [-6.047079841120344,37.3525261823623]
        },
        'properties': {
          'title': 'Cavaleri',
          'location': 'C. Atenea, 12, Mairena del Aljarafe',
          'description': '12:30-03:00'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-6.072349943899301,37.37984534171502]
        },
        'properties': {
          'title': 'Pepe Kebab',
          'location': 'Mega Ocio, Bormujos',
          'description': '13:30-16:30 / 20:00-00:00'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-5.947522934419454,37.37700013904562]
        },
        'properties': {
          'title': 'Queen Kebab y Pizzería',
          'location': 'C. Eva Cervantes',
          'description': '-'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':  [-5.9839700113066145,37.42513170611711]
        },
        'properties': {
          'title': 'Kebab Agadir',
          'location': 'C. Mejillón, 10',
          'description': '13:00-17:00 / 19:30-01:00'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':  [-5.917237833106233,37.289796337072595]
        },
        'properties': {
          'title': 'Kebap Anatolia',
          'location': 'Av. de España, 108, Dos Hermanas',
          'description': '13:00-16:30 / 20:00-01:00'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':   [-5.987048355999967,37.38615624911695]
        },
        'properties': {
          'title': 'Petra Kebab',
          'location': 'C. Sta. María la Blanca, 13',
          'description': '-'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':   [-5.997643472443672,37.390843048890304]
        },
        'properties': {
          'title': 'Magdalena Pizzería Kebab',
          'location': 'C. Murillo, 8',
          'description': '20:00-06:00'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':   [-5.9988984441928315, 37.38215246393166]
        },
        'properties': {
          'title': 'El Egipcio',
          'location': 'C. Betis, 52',
          'description': '19:00-00:30'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':   [-5.9910530456578215, 37.390704868798025]
        },
        'properties': {
          'title': 'Kebab alfalfa Salah eddin',
          'location': 'C. Pérez Galdós, 15',
          'description': '12:00-03:00'
          
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates':   [-5.977391347225773,37.361135644877386]
        },
        'properties': {
          'title': 'Bami Kebab',
          'location': 'C. Castillo de Alcala de Guadaira, 8',
          'description': '13:00-23:45'
          
        }
      }
    ]
  };

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-5.986042900992137,37.38719702355517],
	zoom: 12
});

for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h2>${feature.properties.title}</h2><h3>${feature.properties.location}</h3><p>${feature.properties.description}</p>`
          )
      )
      .addTo(map);
  }


/*
  map.on('load', function() {
    // Coordenadas de la ruta
    var coordinates = [
      [-5.981030180503038,37.389350696775914],
      [-5.996193533633623, 37.393367060002944],
      [-5.996209626885887, 37.39219927681635],
      [-5.993908291560091, 37.39109114457191],
      [-5.992347245906594, 37.3898252965034],
      [-5.98971868108226, 37.389880704440266],
      [-5.971562965062213, 37.38552987006818],
      [-5.9811636153168495, 37.37729513457981]
    ];
  
    var route = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: coordinates
      }
    };
  
    map.addSource('route', {
      type: 'geojson',
      data: route
    });
  
    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': 'blue',
        'line-width': 3
      }
    });
  
    var bounds = coordinates.reduce(function(bounds, coord) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
  
    map.fitBounds(bounds, {
      padding: 50
    });
  });

*/

  const button = document.getElementById('myButton');
  let directionsControl = null;
  
  button.addEventListener('click', function() {
    if (directionsControl) {
      // Si el control ya existe, se elimina del mapa
      map.removeControl(directionsControl);
      directionsControl = null;
      button.textContent = 'Direcciones';
    } else {
      // Si el control no existe, se crea y se agrega al mapa
      directionsControl = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile:'mapbox/walking'

      });
      map.addControl(directionsControl, 'top-left');
      button.textContent = 'Ocultar  Direcciones';
    }
  });
  

const myButton = document.getElementById('myButton');
const headerDiv = document.querySelector('.header');
myButton.addEventListener('click', function() {
  headerDiv.classList.toggle('hidden');
});
