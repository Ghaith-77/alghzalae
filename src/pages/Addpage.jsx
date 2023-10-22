import React from "react";
import "../css/addpage.css"
import MyTabe from "../component/tabe";
import Button from 'react-bootstrap/Button';

const Addpage = () => {
  return (
    <div>
      <h1>
        <div className="addpage_body d-flex align-items-center justify-content-center p-5">
          <form action="" className="form_main" style={{width:"750px"}}>
            <MyTabe/>
            <div className="btnfooter">
            <Button variant="danger" className="px-4">اغلاق</Button>

            <Button variant="primary" className="px-4">التالي</Button>
            </div>
          </form>
        </div>
      </h1>
    </div>
  );
};

export default Addpage;
