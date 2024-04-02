import React, { useState } from "react";

const MovieList = (props) => {
    const movieList = props.list.map((data)=>{
        return (
            <div key={data.id}>
                <h3>{data.title}</h3>
                <div>{data.plot}</div>
            </div>
        )
    })
    return (
        <div>
            {movieList}
        </div>
    );
}

export default MovieList;