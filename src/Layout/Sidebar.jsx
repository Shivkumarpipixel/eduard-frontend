import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import logo from "../assets/8301_4.svg";

const allMenuList = [
  {
    menuTitle: "Start",
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17.5V6.5H4V17.5H3ZM15.712 17.288L14.998 16.6L19.098 12.5H6.385V11.5H19.079L15.023 7.4L15.712 6.712L21 12L15.712 17.288Z"
          fill="#F1BD6C"
        />
      </svg>
    ),
    path: "/",
    id: 1,
  },
  {
    menuTitle: "Script",
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.40005 8.1C5.40005 7.38391 5.68451 6.69716 6.19086 6.19081C6.69721 5.68446 7.38396 5.4 8.10005 5.4C8.81613 5.4 9.50289 5.68446 10.0092 6.19081C10.5156 6.69716 10.8 7.38391 10.8 8.1C10.8 8.81608 10.5156 9.50284 10.0092 10.0092C9.50289 10.5155 8.81613 10.8 8.10005 10.8C7.38396 10.8 6.69721 10.5155 6.19086 10.0092C5.68451 9.50284 5.40005 8.81608 5.40005 8.1ZM8.10005 4.2C7.0657 4.2 6.07372 4.61089 5.34233 5.34228C4.61094 6.07367 4.20005 7.06565 4.20005 8.1C4.20005 9.13434 4.61094 10.1263 5.34233 10.8577C6.07372 11.5891 7.0657 12 8.10005 12C9.13439 12 10.1264 11.5891 10.8578 10.8577C11.5892 10.1263 12 9.13434 12 8.1C12 7.06565 11.5892 6.07367 10.8578 5.34228C10.1264 4.61089 9.13439 4.2 8.10005 4.2ZM14.9244 18.174C15.57 18.438 16.3824 18.6 17.4 18.6C19.6572 18.6 20.9052 17.7984 21.5628 16.8792C21.9067 16.3972 22.1219 15.8355 22.188 15.2472C22.1939 15.1926 22.1979 15.1377 22.2 15.0828V15C22.2 14.7636 22.1535 14.5296 22.063 14.3112C21.9726 14.0928 21.84 13.8944 21.6728 13.7272C21.5057 13.5601 21.3073 13.4275 21.0889 13.337C20.8705 13.2466 20.6364 13.2 20.4 13.2H14.844C15.132 13.548 15.348 13.9548 15.474 14.4H20.4C20.5592 14.4 20.7118 14.4632 20.8243 14.5757C20.9368 14.6883 21 14.8409 21 15V15.0648L20.994 15.1248C20.949 15.5055 20.8087 15.8687 20.586 16.1808C20.1936 16.7316 19.3416 17.4 17.4 17.4C16.5216 17.4 15.8664 17.2632 15.3756 17.0628C15.2772 17.3988 15.1344 17.778 14.9244 18.174ZM1.80005 15.6C1.80005 14.9635 2.05291 14.353 2.50299 13.9029C2.95308 13.4529 3.56353 13.2 4.20005 13.2H12C12.6366 13.2 13.247 13.4529 13.6971 13.9029C14.1472 14.353 14.4 14.9635 14.4 15.6V15.7008L14.3976 15.7488L14.3856 15.9108C14.3006 16.6885 14.0244 17.433 13.5816 18.078C12.7404 19.296 11.1156 20.4 8.10005 20.4C5.08445 20.4 3.45965 19.296 2.61845 18.0792C2.17553 17.4339 1.89931 16.6889 1.81445 15.9108C1.8076 15.841 1.8028 15.7709 1.80005 15.7008V15.6ZM3.00005 15.672V15.6936L3.00845 15.7932C3.07357 16.3684 3.27876 16.9189 3.60605 17.3964C4.19045 18.2412 5.41565 19.2 8.10005 19.2C10.7844 19.2 12.0096 18.2412 12.594 17.3964C12.9213 16.9189 13.1265 16.3684 13.1916 15.7932C13.1964 15.7476 13.1988 15.7144 13.1988 15.6936L13.2 15.6732V15.6C13.2 15.2817 13.0736 14.9765 12.8486 14.7515C12.6235 14.5264 12.3183 14.4 12 14.4H4.20005C3.88179 14.4 3.57656 14.5264 3.35152 14.7515C3.12648 14.9765 3.00005 15.2817 3.00005 15.6V15.672ZM15.6 9C15.6 8.52261 15.7897 8.06477 16.1273 7.7272C16.4648 7.38964 16.9227 7.2 17.4 7.2C17.8774 7.2 18.3353 7.38964 18.6728 7.7272C19.0104 8.06477 19.2 8.52261 19.2 9C19.2 9.47739 19.0104 9.93522 18.6728 10.2728C18.3353 10.6104 17.8774 10.8 17.4 10.8C16.9227 10.8 16.4648 10.6104 16.1273 10.2728C15.7897 9.93522 15.6 9.47739 15.6 9ZM17.4 6C16.6044 6 15.8413 6.31607 15.2787 6.87868C14.7161 7.44129 14.4 8.20435 14.4 9C14.4 9.79565 14.7161 10.5587 15.2787 11.1213C15.8413 11.6839 16.6044 12 17.4 12C18.1957 12 18.9588 11.6839 19.5214 11.1213C20.084 10.5587 20.4 9.79565 20.4 9C20.4 8.20435 20.084 7.44129 19.5214 6.87868C18.9588 6.31607 18.1957 6 17.4 6Z"
          fill="#EE7C7C"
        />
      </svg>
    ),
    path: "/script",
    id: 2,
  },

  {
    menuTitle: "Live Chat",
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.305 22.5L12 21.75L15 16.5H19.5C19.8978 16.5 20.2794 16.342 20.5607 16.0607C20.842 15.7794 21 15.3978 21 15V6C21 5.60218 20.842 5.22064 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5H4.5C4.10218 4.5 3.72064 4.65804 3.43934 4.93934C3.15804 5.22064 3 5.60218 3 6V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H11.25V18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.5 5.20435 1.81607 4.44129 2.37868 3.87868C2.94129 3.31607 3.70435 3 4.5 3H19.5C20.2956 3 21.0587 3.31607 21.6213 3.87868C22.1839 4.44129 22.5 5.20435 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.87L13.305 22.5Z"
          fill="#70A0E7"
        />
        <path d="M6 7.5H18V9H6V7.5ZM6 12H13.5V13.5H6V12Z" fill="#70A0E7" />
      </svg>
    ),
    path: "/live-chat",
    id: 3,
  },

  {
    menuTitle: "Analytics",
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 1.5H1.5V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H22.5V21H3V1.5Z"
          fill="#8DD09B"
        />
        <path
          d="M22.5 6.75H17.25V8.25H19.9425L14.25 13.9425L11.0325 10.7175C10.9628 10.6472 10.8798 10.5914 10.7884 10.5533C10.697 10.5153 10.599 10.4957 10.5 10.4957C10.401 10.4957 10.303 10.5153 10.2116 10.5533C10.1202 10.5914 10.0372 10.6472 9.9675 10.7175L4.5 16.1925L5.5575 17.25L10.5 12.3075L13.7175 15.5325C13.7872 15.6028 13.8702 15.6586 13.9616 15.6967C14.053 15.7347 14.151 15.7543 14.25 15.7543C14.349 15.7543 14.447 15.7347 14.5384 15.6967C14.6298 15.6586 14.7128 15.6028 14.7825 15.5325L21 9.3075V12H22.5V6.75Z"
          fill="#8DD09B"
        />
      </svg>
    ),
    path: "/analytics",
    id: 4,
  },

  {
    menuTitle: "Lost Leads",
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.959 14.724C8.35899 14.724 4.33899 17.652 4.33899 21.25M11.959 11.465C12.8215 11.4671 13.6653 11.2132 14.3835 10.7357C15.1018 10.2581 15.6622 9.57818 15.994 8.782C16.2423 8.18682 16.3553 7.54393 16.3248 6.89976C16.2944 6.25559 16.1212 5.62622 15.8179 5.05711C15.5146 4.488 15.0887 3.99335 14.5709 3.6089C14.0532 3.22444 13.4565 2.95977 12.824 2.834C12.1916 2.7079 11.5391 2.72358 10.9135 2.87991C10.2879 3.03623 9.70476 3.32932 9.20602 3.73806C8.70728 4.14681 8.30537 4.66105 8.02922 5.24376C7.75307 5.82647 7.60955 6.46317 7.60899 7.108C7.60872 8.26242 8.06672 9.36973 8.88236 10.1867C9.698 11.0036 10.8046 11.4634 11.959 11.465Z"
          stroke="#B688DB"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.318 15.92C15.4662 15.5967 15.718 15.332 16.0335 15.1678C16.3489 15.0035 16.7101 14.9491 17.06 15.013C17.2997 15.0497 17.5274 15.1421 17.7248 15.2828C17.9223 15.4234 18.084 15.6085 18.197 15.823C18.2781 15.9946 18.3221 16.1814 18.326 16.3711C18.3298 16.5609 18.2936 16.7493 18.2196 16.9241C18.1455 17.0989 18.0354 17.256 17.8964 17.3853C17.7574 17.5145 17.5927 17.6129 17.413 17.674C17.2293 17.7433 17.0704 17.8657 16.9564 18.0256C16.8424 18.1856 16.7786 18.3757 16.773 18.572V18.942"
          stroke="#B688DB"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M16.745 20.987H16.747"
          stroke="#B688DB"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    path: "/lost-leads",
    id: 7,
  },
  {
    menuTitle: "Connect Channel",
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.194 3.181C20.356 2.711 21.349 3.162 21.866 4.458C23.26 7.944 20 21.133 17.441 21.133C16.613 21.133 15.784 20.445 14.817 19.207C14.3307 18.573 13.8777 17.9141 13.46 17.233C13.086 16.633 12.718 16.001 12.365 15.363L12 14.69L11.982 14.722C11.529 15.5746 11.0481 16.412 10.54 17.233C10.073 17.983 9.61799 18.649 9.18199 19.207C8.21599 20.445 7.38699 21.133 6.55899 21.133C3.99999 21.133 0.739993 7.943 2.13299 4.458C2.65099 3.162 3.64399 2.71 4.80599 3.18C5.64799 3.52 6.57799 4.336 7.61599 5.556C8.30222 6.37455 8.94702 7.22695 9.54799 8.11C10.2979 9.20563 11.0107 10.3263 11.685 11.47L12.001 12.008L12.317 11.47C12.8589 10.5522 13.4245 9.6486 14.013 8.76L14.453 8.11C15.0537 7.22732 15.6981 6.37525 16.384 5.557C17.423 4.337 18.352 3.522 19.194 3.181ZM4.32399 4.353C3.83399 4.154 3.58099 4.269 3.31899 4.923C2.86199 6.068 3.05399 8.951 3.73199 12.187L3.88999 12.911L4.06399 13.644C4.91999 17.104 6.15099 19.868 6.55899 19.868C6.83899 19.868 7.44799 19.362 8.17399 18.432C8.57899 17.914 9.00899 17.284 9.45399 16.569C9.81599 15.988 10.174 15.375 10.517 14.753L10.932 13.986L11.28 13.315L10.916 12.677L10.584 12.111C9.92432 10.9922 9.22727 9.89595 8.49399 8.824C7.91752 7.97723 7.29943 7.15956 6.64199 6.374C5.72599 5.297 4.92599 4.596 4.32399 4.353ZM20.68 4.923C20.419 4.269 20.166 4.154 19.675 4.353C19.073 4.596 18.273 5.297 17.358 6.373C16.7006 7.15856 16.0825 7.97623 15.506 8.823C14.9195 9.67887 14.357 10.5509 13.819 11.438L13.245 12.4L12.718 13.315L12.899 13.665L13.144 14.13C13.5843 14.9577 14.0515 15.7708 14.545 16.568C14.9394 17.2109 15.3667 17.833 15.825 18.432C16.552 19.362 17.161 19.868 17.441 19.868C17.849 19.868 19.08 17.105 19.935 13.644L20.109 12.911C20.914 9.388 21.172 6.152 20.68 4.923Z"
          fill="#EF85C5"
        />
      </svg>
    ),
    path: "/connect-channels",
    id: 6,
  },
  {
    menuTitle: "Setting",
    menuIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="icon"
          d="M10.1351 21L9.77306 18.108C9.45372 18.0113 9.10872 17.86 8.73806 17.654C8.36672 17.4473 8.05106 17.226 7.79106 16.99L5.12306 18.125L3.25806 14.875L5.56406 13.136C5.53406 12.956 5.50972 12.77 5.49106 12.578C5.47106 12.386 5.46106 12.1997 5.46106 12.019C5.46106 11.851 5.47106 11.6743 5.49106 11.489C5.50972 11.3037 5.53406 11.095 5.56406 10.863L3.25806 9.126L5.12306 5.914L7.77106 7.03C8.06972 6.78133 8.39306 6.557 8.74106 6.357C9.08772 6.157 9.42539 6.00233 9.75406 5.893L10.1341 3H13.8661L14.2271 5.912C14.6104 6.04667 14.9491 6.201 15.2431 6.375C15.5371 6.549 15.8401 6.767 16.1521 7.029L18.8771 5.914L20.7421 9.125L18.3601 10.921C18.4147 11.1277 18.4454 11.3173 18.4521 11.49C18.4587 11.6627 18.4621 11.8327 18.4621 12C18.4621 12.1553 18.4554 12.319 18.4421 12.491C18.4294 12.6637 18.4001 12.8723 18.3541 13.117L20.6981 14.875L18.8331 18.125L16.1521 16.971C15.8407 17.233 15.5274 17.4573 15.2121 17.644C14.8967 17.8307 14.5684 17.979 14.2271 18.089L13.8661 21H10.1351ZM11.0001 20H12.9561L13.3251 17.292C13.8291 17.1587 14.2824 16.9757 14.6851 16.743C15.0891 16.5103 15.4997 16.1917 15.9171 15.787L18.4121 16.85L19.4061 15.15L17.2171 13.506C17.3004 13.2213 17.3557 12.9593 17.3831 12.72C17.4097 12.4813 17.4231 12.2413 17.4231 12C17.4231 11.7467 17.4097 11.5067 17.3831 11.28C17.3564 11.0533 17.3011 10.8043 17.2171 10.533L19.4441 8.85L18.4501 7.15L15.8981 8.22C15.5954 7.88733 15.1977 7.57567 14.7051 7.285C14.2117 6.995 13.7451 6.80267 13.3051 6.708L13.0001 4H11.0061L10.6941 6.689C10.1901 6.79633 9.72672 6.96967 9.30406 7.209C8.88206 7.44767 8.46206 7.776 8.04406 8.194L5.55006 7.15L4.55606 8.85L6.72506 10.47C6.64172 10.694 6.58339 10.9373 6.55006 11.2C6.51672 11.4627 6.50006 11.736 6.50006 12C6.50006 12.2733 6.51672 12.525 6.55006 12.775C6.58339 13.025 6.63539 13.2683 6.70606 13.505L4.55606 15.15L5.55006 16.85L8.02506 15.8C8.41772 16.196 8.82506 16.5137 9.24706 16.753C9.66972 16.9923 10.1457 17.1787 10.6751 17.312L11.0001 20ZM11.9731 14.5C12.6704 14.5 13.2614 14.2577 13.7461 13.773C14.2307 13.2883 14.4731 12.6973 14.4731 12C14.4731 11.3027 14.2307 10.7117 13.7461 10.227C13.2614 9.74233 12.6704 9.5 11.9731 9.5C11.2717 9.5 10.6797 9.74233 10.1971 10.227C9.71439 10.7117 9.47306 11.3027 9.47306 12C9.47306 12.6973 9.71439 13.2883 10.1971 13.773C10.6797 14.2577 11.2717 14.5 11.9731 14.5Z"
        />
      </svg>
    ),
    path: "/setting",
    id: 5,
  },
];

export const SidebarMain = ({ open, backdropClick }) => {
  const [menuList, setMenuList] = useState(allMenuList);
  let navigate = useNavigate();
  const currentPath = window?.location?.pathname;
  const [collpasedToggle, setCollpasedToggle] = useState(false);
  const [expandedSubMenus, setExpandedSubMenus] = useState({});
  // const shouldCollapse = currentPath === '/chat-widget' || currentPath === '/web-chat' || currentPath === '/work-space' || currentPath === '/add-channel';

  useEffect(() => {
    const path = window?.location?.pathname;
    if (
      path === "/chat-widget" ||
      path === "/web-chat/chat" ||
      path === "/advance/flow" ||
      path === "/advance/automation" ||
      path === "/advance/content" ||
      path === "/advance/tools" ||
      path === "/web-chat/overview"
    ) {
      console.log("Inside useEffects if condition");
      setCollpasedToggle(true);
      setExpandedSubMenus(false);
    } else {
      setCollpasedToggle(false);
    }
  }, []);

  const collpasedFn = (path, id, hasSubMenu) => {
    // Toggle submenu if it exists
    if (hasSubMenu) {
      setExpandedSubMenus((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // Toggle the specific submenu
      }));
      setCollpasedToggle(false);
    } else {
      if (
        path === "/chat-widget" ||
        path === "/web-chat/chat" ||
        path === "/advance/flow" ||
        path === "/advance/automation" ||
        path === "/advance/content" ||
        path === "/advance/tools" ||
        path === "/web-chat/overview"
      ) {
        setCollpasedToggle(true);
        setExpandedSubMenus(false);
      } else {
        setCollpasedToggle(false);
      }

      // If no submenu, perform navigation and sidebar collapse logic
      navigate(path);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const filterMenuListByIds = (ids) => {
    return menuList.filter((item) => ids.includes(item.id));
  };

  return (
    <div
      className={
        collpasedToggle ? "sidebar_main h-screen active" : "sidebar_main"
      }
    >
      {/* Sidebar */}
      <Sidebar
        collapsed={collpasedToggle}
        toggled={open}
        onBackdropClick={backdropClick}
        rtl={false}
        customBreakPoint="1199px"
        className={collpasedToggle ? "active" : ""}
      >
        <div className="sidebar_wrap">
          <div
            className="sidebar_inner"
            style={{ flex: 1, marginBottom: "16px" }}
          >
            {/* Logo */}
            <div className="w-full">
              <img className="h-30" src={logo} alt="Home Banner" />
            </div>

            {/* Menu */}
            <Menu>
              <MenuItem onClick={handleLogoClick} className="logo_wrap">
                <img
                  src={collpasedToggle ? "/only_logo.png" : "/blue_logo.png"}
                  alt=""
                />
              </MenuItem>

              {menuList.map((val, index) => (
                <div key={index}>
                  <MenuItem
                    active={val?.path === currentPath}
                    onClick={() =>
                      collpasedFn(val?.path, val?.id, !!val.subMenu)
                    }
                    component="div"
                    icon={val?.menuIcon}
                  >
                    {val?.menuTitle}

                    {val?.subMenu && val.subMenu.length > 0 && (
                      <svg
                        style={{ marginLeft: "5px" }}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="15px"
                        height="15px"
                        viewBox="0 0 122.88 80.593"
                        enable-background="new 0 0 122.88 80.593"
                      >
                        <g>
                          <polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" />
                        </g>
                      </svg>
                    )}
                  </MenuItem>

                  {/* Submenu */}
                  <div
                    style={{
                      paddingLeft: "20px",
                      marginTop: "1px",
                      display: expandedSubMenus[val.id] ? "block" : "none",
                    }}
                  >
                    {val?.subMenu &&
                      val.subMenu.length > 0 &&
                      val?.subMenu.map((subItem, subIndex) => (
                        <MenuItem
                          key={`${index}-${subIndex}`}
                          active={subItem?.path === currentPath}
                          component="div"
                          onClick={() => collpasedFn(subItem?.path)}
                          icon={subItem?.menuIcon}
                        >
                          {subItem?.menuTitle}
                        </MenuItem>
                      ))}
                  </div>
                </div>
              ))}
            </Menu>
          </div>
        </div>
      </Sidebar>

      {/* Toggle button (hidden on larger screens) */}
      <div
        variant="primary"
        className="arrow_btn lg:hidden"
        onClick={() => setCollpasedToggle(!collpasedToggle)}
      >
        <svg
          fill="#fca5a5"
          height="16px"
          width="16px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          stroke="#fca5a5"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M168.837,256L388.418,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L123.582,240.915 c-8.331,8.331-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17 L168.837,256z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
