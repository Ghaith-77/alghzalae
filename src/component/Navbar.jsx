import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineUserAdd } from "react-icons/Ai";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <Navbar className="mynavbar py-3  " >
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand
            href="#home"
            style={{
              color: "#e5c1e5",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              alt=""
              src="../../public/assets/logo.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{" "}
            جمعية حقوق الطفل
          </Navbar.Brand>
        </Link>

        <div className="buttons d-flex  align-items-center justify-content-evenly col-3">
          <Link to="/login">
            <button className="login_btn">تسجيل الدخول</button>
          </Link>

          <Link to="/Addpage">
            <button className="add_btn">
              اضافة <AiOutlineUserAdd />
            </button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
