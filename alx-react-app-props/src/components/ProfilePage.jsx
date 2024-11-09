import React, { useContext } from 'react';
import UserInfo from './UserInfo'; // Adjust path if needed
import UserContext from '../UserContext'; // Import UserContext

function ProfilePage() {
  const userData = useContext(UserContext);  // Consume the context

  return <UserInfo userData={userData} />; // Pass userData to UserInfo
}

export default ProfilePage;
