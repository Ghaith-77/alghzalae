import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function MyTabe() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      style={{ width: "80%" , fontSize:"30px"}}
    >
      <Tab eventKey="profile" title="الصفحة 1" className="tabe ">
        <div>dsadasda</div>
      </Tab>
      <Tab eventKey="home" title="الصفحة 2" className="tabe">
        الصفحة 2
      </Tab>
      <Tab eventKey="longer-tab" title="الصفحة 3" className="tabe">
        الصفحة 3
      </Tab>
    </Tabs>
  );
}

export default MyTabe;
