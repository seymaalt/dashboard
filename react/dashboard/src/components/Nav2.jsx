import React from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "boxicons";
import GlobeIcon from "../assets/globe-icon.svg";
import PrintIcon from "../assets/print-icon.svg";
import moment from "moment";
import Button from "@mui/material/Button";

export default function Nav2() {
  return (
    <Grid container>
      <Grid xs={2.5}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "290px", height: "113px" }}
        />
      </Grid>
      <Grid xs={4.5}>
        {" "}
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <box-icon name="dots-vertical-rounded" color="#b9b6b6"></box-icon>
            <Avatar
              src={User}
              className=""
              style={{ width: "70px", height: "70px", marginLeft: "10px" }}
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h2 style={{ color: "black" }}>Abrilay Khatun</h2>
            <p style={{ color: "grey" }}>abrilakh@gmail.com</p>
          </div>
        </div>
      </Grid>
      <Grid container alignItems="center" style={{ display: "flex" }}>
 
          <img src={GlobeIcon} style={{ width: "30px", padding: "15px" }} />
          <img
            src={PrintIcon}
            style={{ width: "30px", padding: "15px", marginLeft: "20px" }}
          />
        
        <div style={{ color: "black", textAlign: "right",marginLeft:"20px" }}>
  <h2>{moment().format("HH:mm")}</h2>
  <p>{moment().format("dddd, D MMMM YYYY ")}</p>
</div>
         <Button
              variant="contained"
              style={{ backgroundColor: "#6146E3", borderRadius: "30px",marginLeft:"20px",marginRight:"20px",height:"60px",fontSize:"20px" }}
            >
              Pending Tasks
  </Button>
       <Box sx={{ '& button': {  borderRadius: '999px', p: '0px', width: '30px',height:"70px" } }}>
      
        <Button size="small">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
            <g id="search-icon" transform="translate(1 1)">
              <path
                id="icon"
                d="M16.221,16.215A9.5,9.5,0,1,1,19,9.5a9.471,9.471,0,0,1-2.783,6.719L19.5,19.5Z"
                fill="none"
                stroke="#8280fd"
              ></path>
            </g>
          </svg>
        </Button>
        <Button size="small">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
            <g id="message-icon" transform="translate(1.06 1)">
              <path
                id="Union_3"
                data-name="Union 3"
                d="M.622,20.21a4.745,4.745,0,0,0,2.505-3.177A10.286,10.286,0,0,1,.74,10.439,10.537,10.537,0,0,1,11.37,0,10.537,10.537,0,0,1,22,10.439,10.537,10.537,0,0,1,11.37,20.88a10.736,10.736,0,0,1-4.985-1.217A11.074,11.074,0,0,1,1.272,21C.033,21-.518,20.678.622,20.21Z"
                transform="translate(0 0.002)"
                fill="#e9e7ff"
                stroke="#8280fd"
              ></path>
              <circle
                id="Ellipse_9"
                data-name="Ellipse 9"
                cx="1.5"
                cy="1.5"
                r="1.5"
                transform="translate(4.763 8.941)"
                fill="#8280fd"
              ></circle>
              <circle
                id="Ellipse_12"
                data-name="Ellipse 12"
                cx="1.5"
                cy="1.5"
                r="1.5"
                transform="translate(9.834 8.941)"
                fill="#8280fd"
              ></circle>
              <circle
                id="Ellipse_11"
                data-name="Ellipse 11"
                cx="1.5"
                cy="1.5"
                r="1.5"
                transform="translate(14.906 8.941)"
                fill="#8280fd"
              ></circle>
            </g>
          </svg>
        </Button>
        <Button size="small">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
            <path
              id="notification-icon"
              d="M7.881,18.353h5.958c0,2.014-1.334,3.647-2.979,3.647S7.881,20.367,7.881,18.353Zm0,0Zm3.039-.13H0S5.369,14.71,5.453,5.487l0-.038A5.623,5.623,0,0,1,10.921.007V0L11,0l.078,0V.007A5.624,5.624,0,0,1,16.549,5.45l0,.038C16.63,14.71,22,18.223,22,18.223Z"
              transform="translate(1.002 1.002)"
              fill="#e9e7ff"
              stroke="#8280fd"
            ></path>
          </svg>
        </Button>
     
    </Box>
        
      </Grid>
    </Grid>
  );
}
