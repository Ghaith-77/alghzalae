import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

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

function MyTable({ data }) {
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
          {data.map((e, key) => (
            <Link
              key={key}
              to={`/PersonPage/${e.prisoner_id}`}
              style={{ textDecoration: "none" }}
            >
              <tr className="person">
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
            </Link>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyTable;
