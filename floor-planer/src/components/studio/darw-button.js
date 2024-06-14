import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
const DrawButton = (props) => {
  const navigate = useNavigate();
  const sendData = async () => {
    const reqData = props.getPlanData();
    const headers = {
      Authorization: `Bearer ${userToken}`,
    };
    console.log("reqData", reqData);
    let userToken = localStorage.getItem("userToken");
    await axios
      .post(
        "https://grackle-notable-hardly.ngrok-free.app/api/process-data/",
        reqData,
        { headers }
      )
      .then((response) => {
        navigate("/viewplanify", { state: response.data.img });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button
        type="button"
        className={`planify-button div-buttons`}
        onClick={sendData}
      >
        Generate Now
      </Button>
    </>
  );
};

export default DrawButton;
