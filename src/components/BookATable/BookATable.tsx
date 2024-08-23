import { Button, MenuItem, TextField, useMediaQuery } from "@mui/material";
import "./BookATable.css";
import { useState } from "react";

export default function BookATable() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [numOfPeople, setNumOfPeople] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="book-a-table-cntr">
      <img src="https://s3-alpha-sig.figma.com/img/29a6/d5d2/da1354841a4ded66d2ad911edef80b81?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lnrX3~cQwinxPZQAQYt36w6GrlEkuFy-lxse5iheWnFLAPpEQ2~JIaDcyk4Gc4RkT02a4Vi3WnY1LcP8SRa7ucAJXwbJQiu3ixVRKOfap6R5rJ7dEO6nH2WCcWyo6yueLSZ~eUWefczNYMHPFMuMANV378pDbahGEGAc85aMsjQ39sWmYNrCbg1e4oW~fHZADFeJNBv63pBU1HoOWK47wkXCdslzZ0oxNfFS8mCogSurB1zv0uQQlHXckvTc1XjWBkTOVNML9IB3s4ZTa-CvhKIkBTYHwK2CkSMRRKh2GeQSU4ueMKoa1sjsjBqANn56g0myukv~K04MuON5jM84xg__" />
      <div className="booking-form-cntr">
        <div className="stylized-res-cntr">
          <p className="stylized-res">Reservations</p>
          <div className="book-a-table-horizontal-line"></div>
        </div>
        <h1> Book A Table Online </h1>
        <div className="booking-form-row-1">
          <TextField
            type="text"
            sx={{
              width: `${isSmallScreen ? "90%" : "45%"}`,
              margin: "10px",
              color: "#fff",
              backgroundColor: "#fff",
            }}
            inputProps={{
              maxLength: 50,
            }}
            label="Your Name"
          />
          <TextField
            type="email"
            sx={{
              width: `${isSmallScreen ? "90%" : "45%"}`,
              margin: "10px",
              color: "#fff",
              backgroundColor: "#fff",
            }}
            label="Your Email"
          />
        </div>
        <div className="booking-form-row-2">
          <TextField
            type="date"
            sx={{
              width: `${isSmallScreen ? "90%" : "45%"}`,
              margin: "10px",
              color: "#fff",
              backgroundColor: "#fff",
            }}
          />
          <TextField
            select
            sx={{
              width: `${isSmallScreen ? "90%" : "45%"}`,
              margin: "10px",
              color: "#fff",
              backgroundColor: "#fff",
            }}
            label="Number of People"
          >
            {numbers.map((item, idx) => {
              return (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </TextField>
        </div>
        <TextField
          fullWidth
          multiline
          minRows={3}
          sx={{
            width: `${isSmallScreen ? "90%" : "45%"}`,
            margin: "10px",
            color: "#fff",
            backgroundColor: "#fff",
          }}
          inputProps={{
            maxLength: 250,
          }}
          label="Special Requests"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FEA116",
            color: "#fff",
            margin: "10px",
            width: `${isSmallScreen ? "90%" : "45%"}`,
            "&:hover": {
              backgroundColor: "#bd7200",
            },
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
