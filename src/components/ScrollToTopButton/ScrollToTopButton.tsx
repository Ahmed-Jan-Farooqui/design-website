import { useState, useEffect } from "react";
import { Button, useMediaQuery } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when the user scrolls down 300px
      if (window.scrollY > 1) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Button
          variant="contained"
          color="primary"
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          sx={{
            backgroundColor: "#FEA116",
            "&:hover": {
              backgroundColor: "#bd7200",
            },
            borderRadius: 0,
            height: 0.05,
            zIndex: 10,
            position: "fixed",
            bottom: `${isSmallScreen ? "1px" : "20px"}`,
            right: `${isSmallScreen ? "1px" : "20px"}`,
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
