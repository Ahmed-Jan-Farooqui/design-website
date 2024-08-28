import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  SvgIcon,
  TextField,
  useMediaQuery,
} from "@mui/material";
import NavBar from "../NavBar/NavBar";
import "./ContactPage.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useState } from "react";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

export default function ContactPage() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleClose = () => {
    setOpenConfirm(false);
  };
  const handleOpen = () => {
    setOpenConfirm(true);
  };
  return (
    <div className="contact-page-cntr">
      <div className="contact-cntr">
        <NavBar current="contact" />
        <div className="contact-us-cntr">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-info-cntr">
        <div className="contact-us-display-cntr">
          <div className="contact-us-horizontal-line"></div>
          <p>
            <b>Contact Us</b>
          </p>
          <div className="contact-us-horizontal-line"></div>
        </div>
        <h1>Contact For Any Query</h1>
        <div className="contact-types-cntr">
          <div className="contact-type-cntr">
            <div className="contact-type-header-cntr">
              <p>Booking</p>
              <div className="contact-type-horizontal-line"></div>
            </div>
            <div className="contact-type-info-cntr">
              <SvgIcon component={BusinessCenterIcon} />
              <p>booking@example.com</p>
            </div>
          </div>
          <div className="contact-type-cntr">
            <div className="contact-type-header-cntr">
              <p>General</p>
              <div className="contact-type-horizontal-line"></div>
            </div>
            <div className="contact-type-info-cntr">
              <SvgIcon component={BusinessCenterIcon} />
              <p>general@example.com</p>
            </div>
          </div>
          <div className="contact-type-cntr">
            <div className="contact-type-header-cntr">
              <p>Technical</p>
              <div className="contact-type-horizontal-line"></div>
            </div>
            <div className="contact-type-info-cntr">
              <SvgIcon component={BusinessCenterIcon} />
              <p>technical@example.com</p>
            </div>
          </div>
        </div>
        <div className="map-and-form-cntr">
          <div className="map-container">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8553622909567!2d67.06478167461523!3d24.800405777968567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d6d03840d75%3A0xcd0c40265bd81aa6!2sAussie%20Burger%20Company!5e0!3m2!1sen!2s!4v1724343935840!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="form-cntr">
            <TextField
              id="first-name"
              label="First Name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
              sx={{
                width: `${isSmallScreen ? "1" : "0.5"}`,
                marginBottom: "10px",
              }}
              inputProps={{
                maxLength: 50,
              }}
              required
            />
            <TextField
              type="email"
              id="last-name"
              label="Email"
              value={email}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              sx={{
                width: `${isSmallScreen ? "1" : "0.5"}`,
                marginBottom: "10px",
              }}
              required
            />
            <TextField
              fullWidth
              id="subject"
              label="Subject"
              value={subject}
              onChange={(e) => {
                e.preventDefault();
                setSubject(e.target.value);
              }}
              sx={{ marginBottom: "10px" }}
              inputProps={{
                maxLength: 100,
              }}
              required
            />
            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Message"
              value={message}
              onChange={(e) => {
                e.preventDefault();
                setMessage(e.target.value);
              }}
              sx={{ marginBottom: "10px" }}
              inputProps={{
                maxLength: 250,
              }}
              required
            />
            <Button
              className="form-submit-btn"
              variant="contained"
              onClick={handleOpen}
              sx={{
                backgroundColor: "#FEA116",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#bd7200",
                },
              }}
              fullWidth
            >
              SEND MESSAGE
            </Button>
          </div>
        </div>
        <Dialog open={openConfirm} onClose={handleClose}>
          <DialogTitle>Send Message?</DialogTitle>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                color: "#FEA116",
                "&:hover": {},
              }}
            >
              SEND
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "#FEA116",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#bd7200",
                },
              }}
            >
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
}
