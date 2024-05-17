import React, { useState} from "react";
import { updateUserProfileAction } from "../Redux/Action/udapteprofilaction"; 
import { useDispatch } from "react-redux";

const Edit = ({ user, onEditEnd }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const dispatch = useDispatch();
  
    const handleSaveClick = () => {
      const updatedUser = { firstName, lastName };
      dispatch(updateUserProfileAction(updatedUser))
        .then(() => {
          onEditEnd(updatedUser);
        })
        .catch(error => {
          console.error("Error updating user profile:", error);
        });
    };


    return (
        <div className="editName">

<div className="inputBox">
        <input type="text" placeholder={firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder={lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="btnBox">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={onEditEnd}>Cancel</button>
        </div>
      </div>
    );
  };

export default Edit;
