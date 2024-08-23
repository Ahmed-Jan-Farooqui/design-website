import { Button, SvgIcon } from "@mui/material";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer-cntr">
      <div className="site-title-cntr">
        <SvgIcon component={CopyrightIcon} />
        Restoran, All Rights Reserved.
      </div>
      <div className="footer-nav-btns">
        <Button
          variant="text"
          onClick={() => {
            navigate("/");
          }}
          sx={{
            color: "#FFFFFF",
            "&:hover": {
              color: "#FEA116",
            },
          }}
        >
          Home
        </Button>
        <Button
          variant="text"
          onClick={() => {
            navigate("/contact");
          }}
          sx={{
            color: "#FFFFFF",
            "&:hover": {
              color: "#FEA116",
            },
          }}
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
