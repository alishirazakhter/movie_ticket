import React, { useState } from "react";

const SearchList = (props) => {
    const movieList = props.list.map((data)=>{
        return (
            <option key={data.id}>
                {data.title}
            </option>
        )
    })
    return (
      <select className="form-control select2">
            {movieList}
      </select>
    );
}

export default SearchList;