import MyTable from "../component/table";
import { useState } from "react";
import "../css/Searchbar.css";
import axios from "axios";

import { useEffect } from "react";
function HomePage() {
  const [data, setdata] = useState([]);
  let [active, setactive] = useState("dsa");
  let [dataSearch, setdataSearch] = useState();
  function handelsearchactive() {
    setactive(!active);
  }
  // ___apirequest__________________
  function getprisoners() {
    axios(
      `https://alazali.cyclic.app/api/prisoners${
        dataSearch ? "?searchText=" + dataSearch : ""
      }`
    ).then((response) => {
      console.log(response);
      setdata(response?.data);
    });
  }
  useEffect(() => {
    getprisoners();
  }, [dataSearch]);
  // __________________

  return (
    <div className="HomePage_body">
      <MyTable data={data} />
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
              setdataSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
