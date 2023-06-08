import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const response = await axios.get("http://localhost:8081/api/v1/getusers");
    setUsers(response.data);
  };
  const deleteUser = async(name)=>{
   await axios.delete(`http://localhost:8081/api/v1/users/delete/${name}`)
    loadUsers();
  }

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
              <th scope="col">Action</th>
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
                  <td>
                    <Link className='btn btn-outline-primary max-2 ' to={`/edituser/${user.id}`}>
                      Edit
                    </Link>
                    <button className='btn btn-danger max-2 ms-2'
                    onClick={()=>deleteUser(user.name)}>Delete</button>
                  </td>
                </tr>
              ))

            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
