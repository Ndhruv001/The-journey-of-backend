import useUserData from "../hooks/useUserData";
import { useEffect } from "react";

function UserPage() {
  const { userData, handleClick } = useUserData();

  useEffect(() => {
    handleClick();
  }, []);
    

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black  flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <p id="name" className="bg-gray-200 p-2 rounded">
            {userData.username}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <p id="email" className="bg-gray-200 p-2 rounded">
          {userData.email}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <p id="password"  className="bg-gray-200 p-2 rounded overflow-y-auto">
          {userData.password}
          </p>
        </div>
        <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserPage;
