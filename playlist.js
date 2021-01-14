let Playliste = function (name){
    this.afficherCheck = true;
    this.name = name;
}

Playliste.prototype.afficher = function (){
    this.div = document.createElement("div");
    this.div.className = "playlist"
    let titre = document.createElement("h1");
    titre.innerHTML = this.name;
    this.div.append(titre);
    document.getElementById("affichage").append(this.div)
    this.afficherCheck = false;
}




export {Playliste}