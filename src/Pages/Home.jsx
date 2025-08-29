import React from "react";
import Video from "../Components/home/Video";
import Hometop from "../Components/home/Hometop";
import Homebottom from "../Components/home/Homebottom";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="relative h-screen justify-between flex flex-col w-screen">
        <Hometop />
        <Homebottom />
      </div>
    </div>
  );
};

export default Home;
