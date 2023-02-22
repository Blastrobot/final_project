import React, { useState, useContext, useEffect } from "react";

import { Context } from "../store/appContext";

import { Artist_card } from "../component/Artist-card.jsx";

import { LineUp } from "../component/Line-Up.jsx";

import { Spinner } from "../component/Spinner.jsx";

import "../../styles/card.css";

export const Artist_grid = () => {
  const { store, actions } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const getArtists = async (url) => {
    setLoading(true);
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");

    const request = {
      headers: headers,
    };

    const response = await fetch(url, request);
    console.log(response);
    if (response.ok) {
      const data = await response.json();

      console.log(data);

      actions.insertArtists(data);

      setLoading(false);
    }
  };

  const artists = store.artists;
  console.log(store.artists);
  console.log(store.single_artist);

  useEffect(() => {
    artists.length == 0
      ? getArtists(
          "https://3001-blastrobot-finalproject-5qsc3yhr9p7.ws-eu87.gitpod.io/api/artist"
        )
      : null;
  }, []);

  return (
    <>
      <div className="top-container d-flex flex-row justify-content-between align-items-end">
        <LineUp text={"Line-Up"} />
        <LineUp text={"Line-Up"} />
        <LineUp text={"Line-Up"} />
        <LineUp text={"Line-Up"} />
      </div>
      <div className="container">
        <div className="card-grid d-flex flex-row justify-content-center ">
          {loading ? (
            <Spinner />
          ) : (
            artists.map((artist, index) => {
              return (
                <div key={index}>
                  <Artist_card
                    image={artist.image_url}
                    name={artist.name}
                    artist_id={index}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
