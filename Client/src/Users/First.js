import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const response = await axios.get("http://localhost:8081/api/v1/getusers");
    setUsers(response.data);
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">PinCode</th>
              <th scope="col">Score</th>
              <th scope="col">Status</th>

            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.country}</td>
                  <td>{user.pincode}</td>
                  <td>{user.score}</td>
                  <td> {user.result} </td>
                </tr>
              ))

            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
