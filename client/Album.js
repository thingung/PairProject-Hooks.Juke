import React from "react";

const Album = (props) => {
    const data = props.data;
    return (
            <div className='album'>
              <a>
                <img src={data.artworkUrl} />
                <p>{data.name}</p>
                <small>{data.artist.name}</small>
              </a>
            </div>
    );
};


export default Album;