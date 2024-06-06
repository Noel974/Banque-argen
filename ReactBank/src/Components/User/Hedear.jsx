import React, { useState, useEffect } from 'react';
import Edit from '../../Composant/Edit';
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(state => state.user.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  useEffect(() => {
    console.log("User from state:", user);
    setEditableUser(user);
  }, [user]);

  const handleEditEnd = (updatedUser) => {
    if (updatedUser) {
      console.log("Updated User:", updatedUser);
      setEditableUser(updatedUser);
    }
    setIsEditing(false);
  };

  return (
    <div className="header">
      <h1>Welcome back<br />{editableUser ? `${editableUser.firstName} ${editableUser.lastName}` : 'Guest'}!</h1>
      {isEditing ? (
        <Edit className="edit-button" user={editableUser} onEditEnd={handleEditEnd} />
      ) : (
        <button className="edit-button" onClick={() => {
          console.log("Edit button clicked");
          setIsEditing(true);
        }}>Edit Name</button>
      )}
    </div>
  );
};

export default Header;
