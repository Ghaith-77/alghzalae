import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { getdata } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

let headerTable = [
  [
    "الرقم التعريفي",
    "رقم الإضبارة ",
    "الإسم ",
    "اسم الأب ",
    "اسم الأم ",
    "العمر  ",
    "الجنسية  ",
    "المنطقة ",
    "تاريخ دخول المعهد  ",
    "مكرر ",
  ],
];

function MyTable() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdata());
  }, []);

  // person data
  let dataredux = useSelector((state) => state.datareduserRoot);
  console.log("dataredux");
  console.log(dataredux.data);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(dataredux.data);
  }, [dataredux]);

  let navi = useNavigate();
  return (
    <div className="container mt-5 conteinerTable col-11">
      <Table responsive className="MyTable ">
        <thead>
          <tr className=" text-center">
            {headerTable[0].map((e) => (
              <th key={e} className="">
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" text-center">
          {data &&
            data.map((e, key) => (
              <tr
                className="person"
                key={key}
                onClick={() => navi(`/PersonPage/${e.prisoner_id}`)}
              >
                <td className=" firstTD">
                  <span>{key + 1}</span>
                </td>
                <td>{e?.file_number}</td>
                <td>{e?.name}</td>
                <td>{e?.father_name}</td>
                <td>{e?.mather_name}</td>
                <td>{e?.age}</td>
                <td>{e?.nationality}</td>
                <td>{e?.region}</td>
                <td>{e?.Date_of_entering_the_institute}</td>
                <td>{e?.redundant}</td>
                {/* في غلطين  */}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyTable;
