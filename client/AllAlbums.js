import React from "react";
import Album from "./Album"

const AllAlbums = (props) => {
    // const {albums, selectAlbum} = props.data;
    // console.log(props);
    // console.log(albums)
    return(
        <div id='albums' className='row wrap'> 
        {props.data.map(album => <Album key={album.id} data={album}/>)}
        {/* <Album/>
        <Album/> */}
        </div>
    );
};



export default AllAlbums;