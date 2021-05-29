/**var listePhoto = document.querySelectorAll(".contain img");
listePhoto.forEach((image) => {
    // pour chaque image
    image.addEventListener("click", function () {
        // IL FAUT SELECTIONNER LA PHOTO EN GRAND
        var photoGrand = document.querySelector(".grande-image img");
        // CHANGER L'ATTRIBUT src POUR CHANGER L'IMAGE AFFICHEE
        // this EST UNE VARIABLE QUI CONTIENT LA BALISE SUR LAQUELLE LE VISITEUR A CLIQUE
        photoGrand.src = this.src;
        // DEBUG
        console.log(this);

        // IL FAUT AFFICHER LA LIGHTBOX
        var lightBox = document.querySelector(".grande-image");
        // IL FAUT CHANGER LE display A block
        // lightBox.style.display = 'block';
        // IL FAUT AJOUTER LA CLASSE montrer A LA BALISE
        lightBox.classList.add('montrer');
    });
});

// IL FAUT POUVOIR CACHER LA LIGHTBOX SI ON CLIQUE DESSUS
var lightBox = document.querySelector(".grande-image");
lightBox.addEventListener('click', function() {
    // IL FAUT CACHER LA LIGHTBOX
    lightBox.classList.remove('montrer');
});

**/

$('.js-toggle-menu').click(function(e){
    e.preventDefault();
    $(this).toggleClass('open');
    $('.page-wrap').toggleClass('disabled');
    $('body').toggleClass('disabled');
});