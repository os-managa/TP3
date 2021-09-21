document.querySelector(".svg").addEventListener("click", ouvert);

function ouvert(){
    document.querySelector(".menu").classList.toggle("ouverture");
    document.querySelector(".menu").classList.remove("fermeture");

}


document.querySelector(".close").addEventListener("click", fermer);

function fermer(){
    document.querySelector(".menu").classList.toggle("fermeture");
    document.querySelector(".menu").classList.remove("ouverture");

}
