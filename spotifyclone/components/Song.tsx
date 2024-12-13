"use client";

import React, { useState, useEffect,  } from "react";

export default function Song() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch("http://localhost:5000/");
                const data = await response.json();
                setSongs(data);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };

        fetchSongs();
    }, []);

    return (
        <div>
            <h1>Songs</h1>
            <br />
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <h2>{song.title}</h2>
                        <p>Artist: {song.artist}</p>
                        <p>Album: {song.album}</p>
                        <p>Year: {song.year}</p>
                        <p>Genre: {song.genre}</p>
                        <p>Duration: {song.duration}</p>
                        <img src={song.image} alt={song.title} />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}