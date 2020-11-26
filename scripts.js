const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
var c = function(pos){ var lat = pos.coords.latitude, long = pos.coords.longtude, coords = lat +', ' + long;
}
document.getElementBy('google_map').setAttribute('src', 'https://maps.google.com?q='+ coords +'output=embed')






document.getElementBy('get_location').onclick = fuction(){
navigator.geolocation.getCurrentPosition(c);
return = false;

}