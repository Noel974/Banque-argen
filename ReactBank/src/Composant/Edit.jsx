import React, { useState, useEffect } from "react";
import { updateUserProfileAction } from "../Redux/Action/udapteprofilaction"; 
import { useDispatch } from "react-redux";

const Edit = ({ user, onEditEnd }) => {
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Edit component mounted with user:", user);
  }, [user]);

  const handleSaveClick = () => {
    const updatedUser = { firstName, lastName };
    console.log("Saving user:", updatedUser);
    dispatch(updateUserProfileAction(updatedUser))
      .then(() => {
        console.log("User profile updated successfully");
        onEditEnd(updatedUser);
      })
      .catch(error => {
        console.error("Error updating user profile:", error);
      });
  };

  return (
    <div className="editName">
      <div className="inputBox">
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => {
            console.log("First name changed:", e.target.value);
            setFirstName(e.target.value);
          }} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => {
            console.log("Last name changed:", e.target.value);
            setLastName(e.target.value);
          }} 
        />
      </div>
      <div className="btnBox">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={() => {
          console.log("Cancel button clicked");
          onEditEnd();
        }}>Cancel</button>
      </div>
    </div>
  );
};

export default Edit;
