import React from "react";
import Sidebar from "./Sidebar"
import AllAlbums from "./AllAlbums"
import Player from "./Player"

const Main = () => {
  // const album_list = [
  //   {
  //     "id": 1,
  //     "name": "No Dummy",
  //     "artworkUrl": "default-album.jpg",
  //     "artistId": 1,
  //     "artist": {
  //       "id": 1,
  //       "name": "The Crash Test Dummies"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "name": "I React to State",
  //     "artworkUrl": "default-album.jpg",
  //     "artistId": 1,
  //     "artist": {
  //       "id": 1,
  //       "name": "The Crash Test Dummies"
  //     }
  //   }
  // ];

  const [albums, setAlbums] = React.useState([]);
  // console.log(albums);
  return (
    <div id="main" className="row container">
      {/* The music starts here! */}
      <Sidebar />
      <div className="container">
        <AllAlbums data={albums} />
        <Player />
      </div>
    </div>
  );
};

export default Main;
