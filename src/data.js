//Declaraciòn de variables DOM
const photoRestaurant = document.getElementById('photoRestaurant');
const contentRestaurant = document.getElementById('contentRestaurant');
const presentation = document.getElementById('presentation');
const preloard = document.getElementById('preloard');
const searchNameRest = document.getElementById('searchNameRest');

//Recargar slash
window.onload =  () => {
    preloard.style.visibility = 'hidden';
    preloard.style.opacity = '0';
}

//llamando y pintando Data desde FireBase
firebase.database().ref().child('restaurants')
.on('value', (data) => {
    var imagen = '';
    data.forEach(e => {
        var element = e.val();
        var photo = element.photo;
        imagen += "<p class='restaurant'><img src="+photo+" class='sizePicture'></br> Name: "+element.nameRest
        +"</br> Direction: "+element.direction
        +"</br> Contacto: "+element.phone
        +"</br> Ubication: "+element.ubication+"</p>";       
    });
    presentation.innerHTML = imagen;    
})