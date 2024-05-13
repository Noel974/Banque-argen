import React, { useState } from 'react';
import Edit from '../../Composant/Edit';
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileAction } from "../../Redux/Action/udapteprofilaction"; // Import de l'action pour mettre à jour le profil utilisateur

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 
	const user = useSelector((state) => state.user.user);
	console.log("user: ", user);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveName = (updatedUserData) => {
    dispatch(updateUserProfileAction(updatedUserData))
      .then(() => {
        setEditableUser(updatedUserData);
        setEditing(false);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <section  className="main bg-dark">
          <div className="header">
      {isAuthenticated && user && <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>}
      <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
      {editing && <Edit user={editableUser} onSave={handleSaveName} onCancel={handleCancelEdit} />}
    </div>
    </section>

  );
}
export default Header;
