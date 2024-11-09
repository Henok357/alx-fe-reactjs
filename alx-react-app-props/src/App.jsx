import React from 'react';
import ProfilePage from './components/ProfilePage'; // Adjust path if needed
import UserContext from './UserContext'; // Import UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>  {/* Providing userData */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
