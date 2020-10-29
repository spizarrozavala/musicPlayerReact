import React, { useState } from 'react';


const Playlist = () => {
    const [state, setState] = useState(
        {
            indiceCanciones: 0,
            capturarPlayPause: "",
            superPlayer: null,
            songs: [
                { "id": 1, "category": "game", "name": "Mario Castle", "url": "files/mario/songs/castle.mp3" },
                { "id": 2, "category": "game", "name": "Mario Star", "url": "files/mario/songs/hurry-starman.mp3" },
                { "id": 3, "category": "game", "name": "Mario Overworld", "url": "files/mario/songs/overworld.mp3" },
                { "id": 4, "category": "game", "name": "Mario Stage 1", "url": "files/mario/songs/stage1.mp3" },
                { "id": 5, "category": "game", "name": "Mario Stage 2", "url": "files/mario/songs/stage2.mp3" },
                { "id": 6, "category": "game", "name": "Mario Star", "url": "files/mario/songs/starman.mp3" },
                { "id": 7, "category": "game", "name": "Mario Underworld", "url": "files/mario/songs/underworld.mp3" },
                { "id": 8, "category": "game", "name": "Mario Underwater", "url": "files/mario/songs/underwater.mp3" },
                { "id": 9, "category": "game", "name": "Zelda Castle", "url": "files/videogame/songs/zelda_castle.mp3" },
                { "id": 10, "category": "game", "name": "Zelda Outworld", "url": "files/videogame/songs/zelda_outworld.mp3" },
                { "id": 11, "category": "game", "name": "Zelda Titles", "url": "files/videogame/songs/zelda_title.mp3" },
                { "id": 12, "category": "game", "name": "Sonic Brain Zone", "url": "files/videogame/songs/sonic_brain-zone.mp3" },
                { "id": 13, "category": "game", "name": "Zelda Link To Past", "url": "files/videogame/songs/zelda_link-to-past.mp3" },
                { "id": 14, "category": "game", "name": "Dong KinKong Main", "url": "files/other/songs/dkng-main.mp3" },
                { "id": 15, "category": "game", "name": "Dong KinKong Other", "url": "files/other/songs/dkng-other.mp3" },
                { "id": 16, "category": "game", "name": "mega-man", "url": "files/other/songs/mega-man.mp3" },
                { "id": 17, "game": "cartoon", "name": "Flintstones", "url": "files/cartoons/songs/flintstones.mp3" },
                { "id": 18, "game": "cartoon", "name": "power-rangers", "url": "files/cartoons/songs/power-rangers.mp3" },
                { "id": 19, "game": "cartoon", "name": "simpsons", "url": "files/cartoons/songs/simpsons.mp3" },
                { "id": 20, "game": "cartoon", "name": "south-park", "url": "files/cartoons/songs/south-park.mp3" },
                { "id": 21, "game": "cartoon", "name": "thundercats", "url": "files/cartoons/songs/thundercats.mp3" },
                { "id": 22, "game": "cartoon", "name": "x-men", "url": "files/cartoons/songs/x-men.mp3" }
            ]
        });




    let songUrl = ("https://assets.breatheco.de/apis/sound/");

    const clickPlay = () => {
        state.superPlayer.play();
        state.capturarPlayPause = true;
        setState({
            ...state, ...state.capturarPlayPause
        })
    }
    const clickPause = () => {
        state.superPlayer.pause();
        state.capturarPlayPause = false;
        setState({
            ...state, ...state.capturarPlayPause
        })
    }

    const clickBackward = () => {
        state.indiceCanciones--;
        state.superPlayer.autoplay = true;
        state.superPlayer.load();
        setState({
            ...state, ...state.indiceCanciones
        });
    }

    const clickFordward = () => {
        state.indiceCanciones++;
        state.superPlayer.autoplay = true;
        state.superPlayer.load();
        setState({
            ...state, ...state.indiceCanciones 
        });
    }

    const handleClick = (e)=>{
        state.indiceCanciones = e.target.id -1
        state.superPlayer.autoplay = true;
        state.superPlayer.load();
        setState({
            ...state, ...state.indiceCanciones
        })
    } 

    return (
        <>
            <div className="container">
                <div className="col-md-6">
                    <div className="list-group">
                        <h1>Playlist</h1>
                        <ul className="list-group">
                            {state.songs.map((song, index) => {
                                return (
                                    <li key={index} className="list-group-item list-group-item-action bg-dark text-white">
                                       <a id={song.id} onClick={(e)=>handleClick(e)}> {song.id + " - " + song.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="container bg-dark"> 
                    <div className ="col-md-6">
                        <button type="button" className="btn btn-dark" onClick={() => clickBackward()}><i class="fas fa-backward"></i></button>


                        {
                            state.capturarPlayPause !== true ? (
                                <button type="button" className="btn btn-dark" onClick={() => clickPlay()}>
                                    <audio ref={(t) => state.superPlayer = t} src={songUrl + state.songs[state.indiceCanciones].url}></audio> <i className="fas fa-play"></i>
                                </button>
                            )
                                :
                                (
                                    <button type="button" className="btn btn-dark" onClick={() => clickPause()}>
                                        <audio ref={(t) => state.superPlayer = t} src={songUrl + state.songs[state.indiceCanciones].url}></audio> <i className="fas fa-pause"></i>
                                    </button>
                                )
                        }


                        <button type="button" className="btn btn-dark"><i class="fas fa-forward" onClick={() => clickFordward()}></i></button>



                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playlist;