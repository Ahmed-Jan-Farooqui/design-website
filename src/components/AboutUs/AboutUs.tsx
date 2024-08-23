import "./AboutUs.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Button, SvgIcon, useMediaQuery } from "@mui/material";

export default function AboutUs() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="about-us-cntr">
      <div className="about-us-imgs-cntr">
        <div className="about-us-img-row-1">
          <img
            className="item-1"
            src="https://s3-alpha-sig.figma.com/img/30e4/aebe/f20fe473164980685632d1670a389137?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QQP~3tCsS3O7DsjjFncBNitGTcGfopQkkVoBOLRAawfh9Vh~odde4vZnruqnBDVNpXJbj8ZcoVxa8xQJrpbPGJxoncuygdzyCSPReCrVhy00wQSHJrMJbkIconjmxzg6DFNIh64TlITky537GH9oXRB9dDWnvWM-PBhej-3CLLuUn6ZXJ8W6MNnwjcl2XenEs0KGdzmIFRiXtbbg2-8ycwCjc8bv8NLcFwOtGiKex3WjKGkiV-kn5q5waCAHFhonXgyZehgLEPRKKFeC~xyiP5LbXFtioOiAw5wE4ihkf4DiGBXEJwvoYQJHy-esJeQ~NeiADaRDs8Ze4YntTIIrFg__"
          />
          <img
            className="item-2"
            src="https://s3-alpha-sig.figma.com/img/74d7/6845/6043dfa54cb8b797bf62afdf557933c8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BRanwZdFkRPF9Gh4QKBghMX1AQlSdtInDIupuGRHw75RAWYojgzRNyWQsI6RE3YIQcYYj7Q8J0uyuUnGv-fxga6mHl~vV0scayA2HACI-e1-xayKs0xCdrWgONf1~cBmwuFGzmSYhHI5Epffa~3eBzUxEzPGcXY-~jLb5IOidbuILPhxjNKkqCjnxIEFj-1YOatiQ21QksojzocLpldQa~vd7oPvmovI4oVLSEHwFlJiz-jczkaMkhyUMk5I3KgLuOXZwDnJQr6Dqva5jf-HaDZ~iD8ge~nUrfZ4j8pLem1GZFtlRQZep8xWxnS63ib4BYsc1DdbcPvhPsrlZmjHxA__"
          />
        </div>
        <div className="about-us-img-row-2">
          <img
            className="item-1"
            src="https://s3-alpha-sig.figma.com/img/9833/5372/5b3112a910dd68ae93dbbb54851f077b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KDRxQTN8xmScBmse4WUimPLIO8gkD1EIPJHJsmQdmuRGWUgrs81ZgmMmJ23ABFWzlxxkmI6CT8S0eVzwuc2SdUAYCtLx2zHYBuQpvmFJe4jaIbFZ~RjgR7-dRq3abFVtDa09ujocOZuewNqwqsxf9xjWRyloIm03sUBmdwNJi4TUlP2IT6p98RSiTVa1Nd8y0QDcleGPK8e1ozEQTqB6v86uwzE7PJdvp9zWEoGqi~g-wD6~-xW2vmcKPEvLqts1YVyQcqbQFIcfSVZwCOJ~jvXI~~YX3zTQasEz2ZlrblNL73Gso8h96jkQUyqEcs8h1R96odOvR4QVTfilTABseQ__"
          />
          <img
            className="item-2"
            src="https://s3-alpha-sig.figma.com/img/a2b9/fd30/ac543ca83aa73f6fc65c4b72d5f550be?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eDc0Y9ORlgxnLkxp79ERjG6reF0I2v8eyCtaNprw0x~ni0vYwvzL-VfB87oSbMSr-QVJnZqOvMB0ai76guYvonp7vJq2fipvUPJhxAzrfgMUsvT0VocJfwIl6QYBRC1u8yQOykVWmh4Uj2rCAzblqYwY7sDxxSkQ7FMUM4-t6-Eams-Eqp~0-htdj0f2Ap1~KOM9ieYvhCKw0kIoUjHsPOnRh1R3i52oj6jKZGOcjDBtn8QjA1pWNNWKUlMvD-DeBOHogiHQ0fD2mkDPxjR0TUXdQyo7b7Bma3~uJtXlQCeX45fybNdiWjfFd-ax~SnMGEfT7yvad8Zi0O6Tus9Gbg__"
          />
        </div>
      </div>
      <div className="about-us-text-cntr">
        <p className="stylized-about-us">
          About Us
          <div className="horizontal-line"></div>
        </p>
        <h1>
          Welcome To{" "}
          <SvgIcon component={RestaurantIcon} sx={{ color: "#FEA116" }} />{" "}
          Restoran
        </h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam ametdiam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="info-cntr">
          <div className="experience-cntr">
            <div className="vertical-line"></div>
            <h1>13</h1>
            <p>
              Years of <b>EXPERIENCE</b>
            </p>
          </div>
          <div className="chef-num-cntr">
            <div className="vertical-line"></div>
            <h1>50</h1>
            <p>
              Popular <b>MASTER CHEFS</b>
            </p>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            width: `${isSmallScreen ? "60%" : "30%"}`,
            backgroundColor: "#FEA116",
            "&:hover": {
              backgroundColor: "#bd7200",
            },
          }}
        >
          READ MORE
        </Button>
      </div>
    </div>
  );
}
