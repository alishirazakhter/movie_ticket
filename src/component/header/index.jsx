import { useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchList from "./menu";


const Header = (props) => {
  const [selectionList, setSelectionList] = useState(props.list);
  console.log("Selection List: "+selectionList);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <form className="form-inline my-2 my-lg-0">
      {/* <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
      <SearchList list = {selectionList}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

  );
};

export default Header;
