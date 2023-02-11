
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import React from "react";


// const handleOnErrorImg = (e) => {
//     e.target.src = "festival_logo";
//   };





export const Artist_card = (props) => {

    // const handleOnErrorImg = (e) => {
    //     e.target.src = "festival_logo";
    //   };
    //tengo que ponerle en handle error//


    return (

        <div id="artis-grid-card" className="card col-12 col-md-6 col-lg-4 flex-row">
            <p className="artist-name">{props.artist_name}</p>
            <img src={props.image} className="card-img col-12" />
            <div className="card-body">
                <p className="description">
                    {props.text}
                </p>
                <Link to={props.music_url}>
                    <button className="direct-to-spotify"> Play </button> </Link>

            </div>
        </div>
    )


}