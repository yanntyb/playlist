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
                $("div").not($(".song")).css(
                {border: "1px solid black"}
                );
                $(this).css({
                    border: "5px solid red"
                })
                selected = $(this)
            })
        }
    })
}

$("#addSong").click(function (){
    if($("#songName").get(0).value !== "" || $("#artiste").get(0).value !== "" || $("#lien").get(0).value !== ""){
        if(selected !== null){
            let song = document.createElement("div");
            song.className = "song"
            song.innerHTML = "Titre : " + $("#songName").get(0).value + "<br>";
            song.innerHTML += " artiste : " + $("#artiste").get(0).value + "<br>"
            song.innerHTML += " lien : <a href=" + $("#lien").get(0).value + ">lien</a>" + "<br>";
            selected.append(song);
        }

    }
})

$("#suppPlaylist").click(() =>{
    if(selected !== null){
        selected.remove()
        selected = null;
    }
})