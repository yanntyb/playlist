import {Playliste} from "./playlist.js";
let playlistTab = [];
let selected = null;

$("#addList").click(function (){
    if($("#listeName").get(0).value !== ""){
        let newList = new Playliste($("#listeName").get(0).value);
        playlistTab.push(newList);
        afficherPlayList();
    }
})

function afficherPlayList(){
    playlistTab.forEach(elem => {
        if(elem.afficherCheck){
            elem.afficher();
            $(elem.div).click(function(){
                selected = $(this)
            })
        }
    })
}

$("#addSong").click(function (){
    if($("#songName").get(0).value !== "" || $("#artiste").get(0).value !== "" || $("#lien").get(0).value !== ""){
        if(selected !== null){
            let song = document.createElement("div");
            song.innerHTML = "Titre : " + $("#songName").get(0).value;
            song.innerHTML += " artiste : " + $("#artiste").get(0).value
            song.innerHTML += " lien : <a href=" + $("#lien").get(0).value + ">lien</a>";
            selected.append(song);
        }

    }
})