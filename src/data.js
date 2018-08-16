//Declaraciòn de variables DOM
const photoRestaurant = document.getElementById('photoRestaurant');
const contentRestaurant = document.getElementById('contentRestaurant');
const presentation = document.getElementById('presentation');
const preloard = document.getElementById('preloard');

//Recargar slash
window.onload =  () => {
    preloard.style.visibility = 'hidden';
    preloard.style.opacity = '0';
}
  
firebase.database().ref().child('restaurants')
.on('value', (data) => {
    var html = '';
    data.forEach(e => {
        var element = e.val();
        var nombre = element.nameRest;
        var address = element.direction;
        var phone = element.phone;
        var photo = element.photo;
        html += "<li>"+nombre+"</li>"+"<li>"+address+"</li>"+"<li>"+phone+"</li>"+"<li>"+photo+"</li>";
        
    });
    contentRestaurant.innerHTML = html;    
})

firebase.database().ref().child('restaurants')
.on('value', (data) => {
    var imagen = '';
    data.forEach(e => {
        var element = e.val();
        var photo = element.photo;
        imagen += "<img src="+photo+" class='sizePicture'>";       
    });
    presentation.innerHTML = imagen;    
})
