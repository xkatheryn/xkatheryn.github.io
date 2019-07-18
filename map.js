var map;
var curloc;
var view;

function init(){
  curloc = ol.proj.fromLonLat([-87.641660, 41.882590]);
  view = new ol.View({
    center: curloc,
    zoom: 5
  });
  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

function panhome(){
  view.animate({
    center: curloc,
    duration: 2000
  });
}
function makereq(){
  var locname = document.getElementById("locname").value;
  var query = "https://restcountries.eu/rest/v2/name/" + locname;
  locreq = new XMLHttpRequest();
  locreq.open('GET', query, true);
  locreq.onload = processlocreq
  locreq.send();
}
function processlocreq(){
  if(locreq.readyState != 4){
    return;
  }
    if(locreq.status != 200 || locreq.responseText === ""){
    window.console.error("Request had an error!");
    return;
  }
  //alert("Ready State " + locreq.readyState);
  //alert("Status " + locreq.status);
  //alert("Response " + locreq.responseText);
  var locinfo = JSON.parse(locreq.responseText);
  var newlon = locinfo[0].latlng[1]
  var newlat = locinfo[0].latlng[0]
  window.console.log(locinfo + ": Long: "+newlon+" Lat: "+newlat)
  var newloc = ol.proj.fromLonLat([newlon, newlat]);
  view.animate({
    center: newloc,
    duration: 2000
  });
}

window.onload = init;
