import { SvgIcon } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./ChefCard.css";

export default function ChefCard({ picture, name, designation }: any) {
  return (
    <div className="chef-card-cntr">
      <img src={picture} />
      <p style={{ fontSize: "large", marginBottom: 0 }}>
        <b>{name}</b>
      </p>
      <p style={{ color: "#848282" }}>{designation}</p>
      <div className="social-container">
        <SvgIcon component={XIcon} />
        <SvgIcon component={InstagramIcon} />
        <SvgIcon component={LinkedInIcon} />
      </div>
    </div>
  );
}
