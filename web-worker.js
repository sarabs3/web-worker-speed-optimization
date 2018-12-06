(function(){
    "use strict";
    self.importScripts('https://jsonplaceholder.typicode.com/todos/1') //
    function initMap() {
        console.log('map loaded');
    }
}());
// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: -25.344, lng: 131.036};
//     // The map, centered at Uluru
//     var map = new self.google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     //var marker = new google.maps.Marker({position: uluru, map: map});
// }
// onmessage = e => {
//     if (e.data[0] === 'load_MAP') {
//         console.log('google');

//         console.log(' I will load it don"t worry');
//     } else {
//         console.log('bta to do kya karna hai?');
//     }
// }