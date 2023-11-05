import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

// Burger
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";

import "./Layuot.css";
import Switcher from "../components/Cards/Switcher/Switcher";
const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [divs, setDivs] = useState([
    {
      id: 1,
      content: "We build your dream house well and professionally",
      text: "Our team can build a house according to your wishes. Any design and concept, we will help make it happen",
      btn: "Contact us",
      location: "/",
    },
    {
      id: 2,
      content: "About our story - We are the best team",
      btn: "Contact us",

      location: "/About",
    },
    {
      id: 3,
      content:
        "Need some consultation or want to collaborarion with us? Let’s connect!",
      btn: "Contact us",

      location: "/Servise",
    },
    {
      id: 4,
      content: "Here some our best works",
      btn: "Contact us",

      location: "/Gallery",
    },
    {
      id: 5,
      content: "Article and news about property and constructions",
      btn: "Contact us",

      location: "/News",
    },
    {
      id: 6,
      content: "Process details : Build villa two floors",
      btn: "Contact us",

      location: "/Story",
    },
    {
      id: 7,
      content:
        "Have a briliant idea? Join with us. We have an oppurtunity for you",
      btn: "Contact us",

      location: "/Career",
    },
    {
      id: 8,
      content:
        "Need some consultation or want to collaborarion with us? Let’s connect!",
      btn: "Contact us",

      location: "/Contact",
    },
  ]);

  // Burger
  type Anchor = "top" | "left" | "bottom" | "right";

  // export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <>
    <div>
    <Switcher />
  </div>

  <div className="mt-[10px] mb-[10px]">
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">En</option>
      <option value="ru">Ru</option>
    </select>
  </div>
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="ml-[20px] ">
         

          <Link to={"/"}>
            <li className="mt-[10px] font-bold">Home</li>
          </Link>

          <Link to={"/About"}>
            <li className="mt-[10px] font-bold">About</li>
          </Link>

          <Link to={"/Gallery"}>
            <li className="mt-[10px] font-bold">Gallery</li>
          </Link>
          <Link to={"/Contact"}>
            <li className="mt-[10px] font-bold">Contact</li>
          </Link>

          <Link to={"/News"}>
            <li className="mt-[10px] font-bold">News</li>
          </Link>
          <Link to={"/Story"}>
            <li className="mt-[10px] font-bold">Story</li>
          </Link>
          <Link to={"/Career"}>
            <li className="mt-[10px] font-bold">Career</li>
          </Link>
        </div>
      </List>
    </Box>
    </>

  );

  // Translate
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="navbar hero">
        <div className="flex justify-between lg:ml-[100px] lg:pr-[100px] items-center">
          <div>
            <p className="text-[66px] font-bold text-white">DB-</p>
          </div>
          <ul className="lg:flex sm:hidden gap-[40px] text-white">
            <Link to={"/"}>
              <li
                style={{
                  textDecoration: pathname == "/" ? "underline" : "none",
                }}
              >
                Home
              </li>
            </Link>

            <Link to={"/About"}>
              <li
                style={{
                  textDecoration: pathname == "/About" ? "underline" : "none",
                }}
              >
                About
              </li>
            </Link>

            <Link to={"/Gallery"}>
              <li
                style={{
                  textDecoration: pathname == "/Gallery" ? "underline" : "none",
                }}
              >
                Gallery
              </li>
            </Link>
            <Link to={"/Contact"}>
              <li
                style={{
                  textDecoration: pathname == "/Contact" ? "underline" : "none",
                }}
              >
                Contact
              </li>
            </Link>

            <Link to={"/News"}>
              <li
                style={{
                  textDecoration: pathname == "/News" ? "underline" : "none",
                }}
              >
                News
              </li>
            </Link>
            <Link to={"/Story"}>
              <li
                style={{
                  textDecoration: pathname == "/Story" ? "underline" : "none",
                }}
              >
                Story
              </li>
            </Link>
            <Link to={"/Career"}>
              <li
                style={{
                  textDecoration: pathname == "/Career" ? "underline" : "none",
                }}
              >
                Career
              </li>
            </Link>
            <div className="lg:inline-block sm:hidden">
              <Switcher />
            </div>

            <div className="dark:text-black sm:hidden lg:inline-block text-black">
              <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
              </select>
            </div>
          </ul>
          <div className="lg:hidden sm:inline-block mr-[10px] ">
            {(["top"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon
                    style={{ color: "white", fontSize: "50px" }}
                  ></MenuIcon>
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>

        {divs.map((e) => {
          if (e.location == pathname) {
            return (
              <div
                key={e.id}
                className="text-center text-white  lg:mt-[110px] sm:mt-[100px]"
              >
                <p className="sm:text-[40px] lg:text-[52px] m-auto lg:w-[50%]">
                  {e.content}
                </p>
                <p className="lg:w-[30%] m-auto mt-[20px] mb-[30px]">
                  {e.text}
                </p>
                <button className="w-[170px] h-[60px] bg-[#09A7CA]">
                  {e.btn}
                </button>
              </div>
            );
          }
        })}
      </div>

      <Outlet />
      <div className="fotter">
        <div className="pt-[100px] dark:bg-gray-800">
          <div className="lg:flex lg:pl-[100px] pt-[70px] pb-[80px] text-white lg:pr-[100px] justify-between items-center bg-[#023957]">
            <div className="sm:text-center lg:text-left">
              <p className=" text-[60px]">DB-</p>
              <p className="mt-[10px] lg:w-[60%]">
                Lizenzo street number 12 Jakarta, Indonesia
              </p>
              <button className="bg-[#09A7CA] w-[158px] h-[62px] text-white mt-[20px]">
                Get directions
              </button>
            </div>

            <div className="sm:hidden lg:inline-block">
              <p className="mb-[30px] text-[24px] font-bold">Menu</p>
              <Link to={"/"}>
                <li>Home</li>
              </Link>

              <Link to={"/About"}>
                <li className="mt-[10px]">About</li>
              </Link>

              <Link to={"/Gallery"}>
                <li className="mt-[10px]">Gallery</li>
              </Link>

              <Link to={"/Servise"}>
                <li className="mt-[10px]">Services</li>
              </Link>
            </div>

            <div className="sm:hidden lg:inline-block">
              <Link to={"/Contact"}>
                <li className="mb-[30px] text-[24px] font-bold">Contact</li>
              </Link>
              <p className="mt-[10px]">E-mail</p>
              <p className="mt-[10px]">Mobile</p>
              <p className="mt-[10px]">Whatsapp</p>
              <p className="mt-[10px]">Fax</p>
            </div>

            <div className="sm:hidden lg:inline-block">
              <p className="mb-[30px] text-[24px] font-bold">Career</p>
              <p className="mt-[10px]">Job</p>
              <p className="mt-[10px]">Part-time</p>
              <p className="mt-[10px]">Internship</p>
              <p className="mt-[10px]">Service</p>
            </div>

            <div className="sm:hidden lg:inline-block">
              <p className="mb-[30px] text-[24px] font-bold">Business</p>
              <p className="mt-[10px]">Affiliate</p>
              <p className="mt-[10px]">Collaboration</p>
              <p className="mt-[10px]">Investment</p>
              <p className="mt-[10px]">People</p>
            </div>
          </div>
        </div>

        <div className="pt-[50px] pb-[50px] text-center dark:bg-gray-800 dark:text-white">
          <p>2021 - Copyright ZHB Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
