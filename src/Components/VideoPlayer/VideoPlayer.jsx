import React, { useRef, useState } from "react";
import video from "../../assets/program-icon-3.png"
import "./VideoPlayer.css";

const VideoPlayer = ({play, setPlay}) => {

const player = useRef(null)
const closePlayer = (e)=>{
    if(e.target === player.current){
        setPlay(false)
    }
}

  return (
    <div className={`video-player ${play ? "" :  "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls>
        {" "}
      </video>
    </div>
  );
};

export default VideoPlayer;
