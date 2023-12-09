import MyTable from "../component/table";
import { useState } from "react";
import "../css/Searchbar.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdataSearch } from "../redux/actions";

function HomePage() {
  let dispatch = useDispatch()
 
  let [active, setactive] = useState("dsa");
  function handelsearchactive() {
    setactive(!active);
  }

  function getprisonersSearch(word) {
    dispatch(getdataSearch(word));
  }
 
  return (
    <div className="HomePage_body">
      <MyTable  />
      <div className="searchbar" onClick={() => handelsearchactive()}>
        <div className="input-wrapper">
          <button className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="25px"
              width="25px"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="4"
                stroke="#fff"
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              ></path>
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="5"
                stroke="#fff"
                d="M22 22L20 20"
              ></path>
            </svg>
          </button>
          <input
            placeholder="ابحث ..."
            className="input "
            name="text"
            type="text"
            style={{ borderRadius: "30px" }}
            onChange={(e) => {
              getprisonersSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
