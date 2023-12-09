import axios from "axios";
export function getdata() {
  return async (dispatch) => {
    let res = await axios(`https://alazali.cyclic.app/api/prisoners`);
    dispatch({
      type: "getData",
      data: res.data,
    });
  };
}
export function getdataSearch(word) {
  return async (dispatch) => {
    let res = await axios(
      `https://alazali.cyclic.app/api/prisoners?searchText=${word}`
    );
    dispatch({
      type: "getData",
      data: res.data
    });
  };
}
