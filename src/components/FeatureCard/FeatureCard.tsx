import { SvgIcon } from "@mui/material";
import "./FeatureCard.css";

export default function FeatureCard({ icon, title, text }: any) {
  return (
    <div className="feature-card-cntr">
      <SvgIcon
        className="feature-icon"
        component={icon}
        sx={{
          width: 0.2,
          height: "auto",
        }}
      />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
