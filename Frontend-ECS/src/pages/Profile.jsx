import React from "react";

function Profile() {
  // State to hold user data
  const [user, setUser] = React.useState(null);

  // Fetch user data from localStorage on component mount
  React.useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.currentUser);
      } else {
        console.warn("No user data found in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  // Display message if user is not signed in or data is unavailable
  if (!user) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Left Section: User Details */}
      <div className="w-1/2 border-2 flex flex-col items-center justify-center text-white text-2xl">
        {/* User Profile Image */}
        <div className="image bg-gray-500 w-full h-1/4 flex items-center justify-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Profile Avatar"
              className="h-full w-auto object-cover"
            />
          ) : (
            "No Avatar"
          )}
        </div>

        {/* User Details */}
        <div className="details flex flex-col justify-evenly h-3/4 w-full">
          <div className="fullname border-2 text-center">
            {user.fullName || "Full Name"}
          </div>
          <div className="scholar_id border-2 text-center">
            {user.scholar_ID || "Scholar ID"}
          </div>
          <div className="username border-2 text-center">
            {user.username || "Username"}
          </div>
          <div className="email border-2 text-center">
            {user.email || "Email"}
          </div>
          <div className="mobile_no border-2 text-center">
            {user.Mobile_No || "Mobile Number not provided"}
          </div>
        </div>
      </div>

      {/* Right Section: Events */}
      <div className="w-1/2 border-2 flex flex-col items-center justify-center text-white text-2xl">
        <div className="events">
          <h2 className="mb-4">Events Registered</h2>
          {user.eventsRegistered && user.eventsRegistered.length > 0 ? (
            <ul>
              {user.eventsRegistered.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          ) : (
            "No events registered yet."
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
