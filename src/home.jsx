import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./features/Users";


const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  
  const handleDelete = (id, firstname, lastname) => {
    alert(`Delete ${firstname} ${lastname} from staff database`)
    dispatch(deleteUser({ id:id }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-4 font-bold font-sans">STAFF MANAGEMENT SYSTEM</h1>
      <Link to='/create' className="bg-green-500 text-white px-5 py-3 rounded hover:bg-green-600">Add New Staff </Link>

      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left px-4 py-2">ID</th>
              <th className="text-left px-4 py-2">First Name</th>
              <th className="text-left px-4 py-2">Last Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Phone Number</th>
              <th className="text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.lastName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2 space-x-2">
                 <Link
                    to= {`/update/${user.id}`}
                    className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
                  >
                    Edit
                  </Link> 
                  <button
                    onClick={() => handleDelete(user.id, user.firstName, user.lastName)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* smaller screens */}
      <div className="block md:hidden">
        {userList.map((user) => (
          <div
            key={user.id}
            className="border border-gray-300 rounded-lg mb-4 p-4 bg-white shadow space-y-3"
          >
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>First Name:</strong> {user.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {user.lastName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phone}
            </p>
            <div className="flex justify-between items-center space-x-2">
                  <Link
                     to= {`/update/${user.id}`}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 flex-1"
                  >
                    Edit
                  </Link>   
              <button
                onClick={() => handleDelete(user.id,user.firstName, user.lastName)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 flex-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
