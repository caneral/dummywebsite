import React from "react";
import { BiMenu } from "react-icons/bi";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

const HamburgerMenu = ({ logout, userInfo, handleOpen }) => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="md:hidden hover:bg-gray-300 hover:rounded-2xl flex justify-center items-center">
      <button onClick={handleClick}>
        <BiMenu size={32} />
      </button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {Object.keys(userInfo).length !== 0 ? (
          <MenuItem> <Avatar /> {userInfo.name}</MenuItem>
        ) : null}

        <MenuItem>
          <Link to="/">{t("Homepage")}</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">{t("Contact")}</Link>
        </MenuItem>
        <Divider />
        {Object.keys(userInfo).length !== 0 ? (
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        ) : (
          <MenuItem onClick={handleOpen}>
            <ListItemIcon>
              <Login fontSize="small" />
              Login
            </ListItemIcon>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
