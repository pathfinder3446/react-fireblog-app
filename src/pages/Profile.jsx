import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";


const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.email);

  return (
    <div className="profile">
      <div className="profile-container">
          <Avatar
            alt={currentUser.email[0]}
            src="/static/images/avatar/2.jpg"
            sx={{height:"100px", width:"100px"}}
          />
        <h3>{currentUser.email}</h3>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis in
          consequatur distinctio ut explicabo obcaecati itaque maiores similique
          officiis quae! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Unde, provident.
        </p>
      </div>
    </div>
  );
};

export default Profile;
