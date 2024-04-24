import { useState } from "react";
import './index.css';

const Sidebar = () => { 
  const [isOpen, setStatus] = useState(false);

  const menuItems = [{
    className : "bx bx-grid-alt",
    itemName : "Dashboard"
  },
  {
    className : "bx bx-desktop",
    itemName : "Desktop"
  },
  {
    className : "bx bx-info-circle",
    itemName : "Information"
  },
  {
    className : "bx bxs-calendar-event",
    itemName : "Events"
  },
  {
    className : "bx bx-buildings",
    itemName : "Locations"
  },
  {
    className : "bx bxs-dollar-circle",
    itemName : "Revenue"
  },
  {
    className : "bx bx-headphone",
    itemName : "Podcast"
  }];
  
  const changeStatus = () => {
    setStatus((prevState) => !prevState);
  };

	return (
		<div>
			<div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="logo_details">
          <i className="bx bxs-dashboard icon"></i>
          <div className="logo_name">Data Map</div>
            <i className="bx bx-menu" id="btn" onClick={changeStatus}></i>
          </div>
          <ul className="nav-list">
            <li key={0}>
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </li>
            {menuItems.map((item, index) =>
              <li key={index + 1}>
                <a href="#">
                  <i className={item.className}></i>
                  <span className="link_name">{item.itemName}</span>
                </a>
                <span class="tooltip">{item.itemName}</span>
              </li>
              )
          }
          <li class="profile">
            <div class="profile_details">
              <img src="profile.jpg" alt="pic" />
              <div class="profile_content">
                <div class="name">Dhanush</div>
                <div class="designation">Admin</div>
              </div>
            </div>
            <i class="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
		</div>
	);
}

export default Sidebar;