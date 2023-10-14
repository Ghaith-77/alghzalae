import Table from "react-bootstrap/Table";

let data = [
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
  [
    {
      id: 1,
      id_adbara: 425,
      name: "هاني رمزي سعيد",
      father_name: "رمزي  سعيد",
      mother_name: "هبة  سعيد",
      age: 15,
      Nationality: "ع/س",
      Region: "دمشق",
      Date_entering_institute: "1 / 2 / 2003",
      redundant: "مرتان",
    },
    {
      id: 2,
      id_adbara: 425,
      name: "هاني رمزي سعيد",
      father_name: "رمزي  سعيد",
      mother_name: "هبة  سعيد",
      age: 15,
      Nationality: "ع/س",
      Region: "دمشق",
      Date_entering_institute: "1 / 2 / 2003",
      redundant: "مرتان",
    },
  ],
];

function MyTable() {
  return (
    <div className="container mt-5 conteinerTable col-11">
      <Table responsive className="MyTable ">
        <thead>
          <tr className=" text-center">
            {data[0].map((e) => (
              <th key={e} className="">
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" text-center">
          {data[1].map((e) => (
            <tr className="person">
              <td className=" firstTD">
                <span>{e?.id}</span>
              </td>
              <td>{e?.id_adbara}</td>
              <td>{e?.name}</td>
              <td>{e?.father_name}</td>
              <td>{e?.mother_name}</td>
              <td>{e?.age}</td>
              <td>{e?.Nationality}</td>
              <td>{e?.Region}</td>
              <td>{e?.Date_entering_institute}</td>
              <td>{e?.redundant}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyTable;
