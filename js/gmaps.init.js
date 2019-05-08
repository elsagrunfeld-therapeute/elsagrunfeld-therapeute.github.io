/* global GMaps: true */

$(document).ready(function () {
  map()
})

function map () {
  if ($('#map').length) {
    var lat = $('#gmap-lat').val()
    var lng = $('#gmap-lng').val()
    var image = '/img/marker.png'
    var key = 'AIzaSyDyQiR0IVEpiGrlvJ0WNBVis42qqN46d-w'

    var styles =
      [
        {
          'featureType': 'landscape',  'stylers': [{'saturation': -100}, {'lightness': 30}, {'visibility': 'on'}]
        }, {
          'featureType': 'road.arterial', 'stylers': [{'saturation': -100}, {'lightness': 30}, {'visibility': 'on'}]
        }, {
          'featureType': 'road.local', 'stylers': [{'saturation': -100}, {'lightness': 40}, {'visibility': 'on'}]
        }, {
          'featureType': 'transit', 'stylers': [{'saturation': -100}, {'visibility': 'simplified'}]
        }, {
          'featureType': 'water', 'visibility': 'on'
      }
      ]

    var map = new GMaps({
      el: '#map',
      lat: 44.800008,
      lng: 0.326801,
      zoomControl: true,
      zoomControlOpt: {
        style: 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: true,
      scrollwheel: true,
      draggable: true,
      styles: styles,
      key: key
    })
    
    var bounds = new google.maps.LatLngBounds();
    
    var addr1 = new google.maps.Marker({
      position : new google.maps.LatLng(lat, lng),
      icon: image  ,
      title: 'Loubès Bernac',
      infoWindow: {
      content: '<p>lieu-dit Barjau 47120 Loubès-Bernac</p>'
      } 
    })
    map.addMarker(addr1)
    
    bounds.extend(addr1.position)
    
    var addr2 = new google.maps.Marker({
      position : new google.maps.LatLng(44.846578, 0.481199),
      icon: image  ,
      title: 'Bergerac',
      infoWindow: {
      content: '<p>1 rue Georges Clémenceau 24100 Bergerac</p>'
      } 
    })
    map.addMarker(addr2)
    bounds.extend(addr2.position)
    map.fitBounds(bounds);
  }
}
