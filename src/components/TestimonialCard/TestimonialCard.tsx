import { SvgIcon } from "@mui/material";
import "./TestimonialCard.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function TestimonialCard({
  picture,
  review,
  name,
  profession,
}: any) {
  return (
    <div className="testimonial-card-cntr">
      <SvgIcon component={FormatQuoteIcon} />
      <p>{review}</p>
      <div className="customer-info-cntr">
        <img src={picture} />
        <div className="customer-info">
          <p style={{ fontSize: "large", margin: 0 }}>
            <b>{name}</b>
          </p>
          <p style={{ margin: 0 }}>{profession}</p>
        </div>
      </div>
    </div>
  );
}
