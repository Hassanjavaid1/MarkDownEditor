import React, { useEffect, useRef, useState } from "react";
import aud1 from "../Components/Heater-1.mp3";
import aud2 from "../Components/Heater-2.mp3";
import aud3 from "../Components/Heater-3.mp3";
import aud4 from "../Components/Heater-4_1.mp3";
import aud5 from "../Components/Heater-6.mp3";
import aud6 from "../Components/Cev_H2.mp3";
import aud7 from "../Components/Dsc_Oh.mp3";
import aud8 from "../Components/Kick_n_Hat.mp3";
import aud9 from "../Components/RP4_KICK_1.mp3";

function Drum_Machine() {
  const [drumName, setDrumName] = useState("Start");
  const Qkey = useRef(null);
  const Wkey = useRef(null);
  const Ekey = useRef(null);
  const Akey = useRef(null);
  const Skey = useRef(null);
  const Dkey = useRef(null);
  const Zkey = useRef(null);
  const Xkey = useRef(null);
  const Ckey = useRef(null);
  useEffect(() => {
    const handleKeys = (e) => {
      switch (e.key.toUpperCase()) {
        case "Q":
          Qkey.current.play();
          setDrumName("Heater 1");
          break;
        case "W":
          Wkey.current.play();
          setDrumName("Heater 2");
          break;
        case "E":
          Ekey.current.play();
          setDrumName("Heater 3");
          break;
        case "A":
          Akey.current.play();
          setDrumName("Heater 4");
          break;
        case "S":
          Skey.current.play();
          setDrumName("Clap");
          break;
        case "D":
          Dkey.current.play();
          setDrumName("Open HH");
          break;
        case "Z":
          Zkey.current.play();
          setDrumName("Kick n Hat");
          break;
        case "X":
          Xkey.current.play();
          setDrumName("Kick");
          break;
        case "C":
          Ckey.current.play();
          setDrumName("Closed HH");
      }
    };
    window.addEventListener("keydown", handleKeys);
  }, []);
  return (
    <>
      <div id="Drum-Machine">
        <div id="display">
          <div
            id="Q"
            className="drum-pad"
            onClick={() => {
              Qkey.current.play();
              setDrumName("Heater 1");
            }}
          >
            Q <audio ref={Qkey} id="Q" src={aud1}></audio>
          </div>
          <div
            id="W"
            className="drum-pad"
            onClick={() => {
              Wkey.current.play();
              setDrumName("Heater 2");
            }}
          >
            W <audio ref={Wkey} id="W" src={aud2}></audio>
          </div>
          <div
            id="E"
            className="drum-pad"
            onClick={() => {
              Ekey.current.play();
              setDrumName("Heater 3");
            }}
          >
            E <audio ref={Ekey} id="E" src={aud3}></audio>
          </div>
          <div
            id="A"
            className="drum-pad"
            onClick={() => {
              Akey.current.play();
              setDrumName("Heater 4");
            }}
          >
            A <audio ref={Akey} id="A" src={aud4}></audio>
          </div>
          <div
            id="S"
            className="drum-pad"
            onClick={() => {
              Skey.current.play();
              setDrumName("Clap");
            }}
          >
            S <audio ref={Skey} id="S" src={aud5}></audio>
          </div>
          <div
            id="D"
            className="drum-pad"
            onClick={() => {
              Dkey.current.play();
              setDrumName("Open HH");
            }}
          >
            D <audio ref={Dkey} id="D" src={aud6}></audio>
          </div>
          <div
            id="Z"
            className="drum-pad"
            onClick={() => {
              Zkey.current.play();
              setDrumName("Kick n Hat");
            }}
          >
            Z <audio ref={Zkey} id="Z" src={aud7}></audio>
          </div>
          <div
            id="X"
            className="drum-pad"
            onClick={() => {
              Xkey.current.play();
              setDrumName("Kick");
            }}
          >
            X <audio ref={Xkey} id="X" src={aud8}></audio>
          </div>
          <div
            id="C"
            className="drum-pad"
            onClick={() => {
              Ckey.current.play();
              setDrumName("Closed HH");
            }}
          >
            C <audio ref={Ckey} id="C" src={aud9}></audio>
          </div>
        </div>
        <div className="screen">{drumName}</div>
      </div>
    </>
  );
}

export default Drum_Machine;
