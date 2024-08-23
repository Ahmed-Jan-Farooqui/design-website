import "./NavBar.css";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBar({ current }: any) {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav-bar">
      <img
        className="restaurant-name"
        src="https://s3-alpha-sig.figma.com/img/03b1/a998/527440a1b4f995e283b1be75ba1e28ee?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P37poh12J6cN3D~n4r8AiVnU87MOr2aQwleOjIQpKPsKPPIqxGK0RG1JospSnoimpE~mf8BvQMn-aidH0kFjQP0QoO~AufLKSmLaI8CrqPry9eCBYDRc~UALUp~cZ6s3SAqQZ0LRCkJrKq66Lq3G3JLtvPvdBwwna7F6RM159GRqMcQDDO~M6R6-TSzR1tP3sCZiR32J-gODffzkJQXrNvdn37rmtJbFKHxY2cDlLel96QWqBRoYBA7G27rA~s743HqH6ADP-PqyJYnYpIaUjAKJbuQ4CruLZGqhhkJKXtiZbwTnmteq74LnVYadgzO~a~Ny9DL~4r-o4ACTRj65qg__"
      />
      {!isSmallScreen && (
        <div className="nav-btns">
          <Button
            variant="text"
            sx={{
              color: `${current === "home" ? "#FEA116" : "#fff"}`,
              "&:hover": {
                color: "#FEA116",
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            variant="text"
            sx={{
              color: `${current === "contact" ? "#FEA116" : "#fff"}`,
              "&:hover": {
                color: "#FEA116",
              },
            }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FEA116",
              "&:hover": {
                backgroundColor: "#bd7200",
              },
            }}
          >
            Book A Table
          </Button>
        </div>
      )}
      {isSmallScreen && (
        <>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon sx={{ color: "#FEA116" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/");
                handleMenuClose();
              }}
            >
              HOME
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/contact");
                handleMenuClose();
              }}
            >
              CONTACT
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
