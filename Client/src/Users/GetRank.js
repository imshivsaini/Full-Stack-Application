import React, { useEffect, useState } from "react";
import axios from "axios";
export default function BasicPopover() {
  const [rank, setRank] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser]= useState("");
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const response = await axios.get("http://localhost:8081/api/v1/getusers");
    setUsers(response.data);
  };
  const ranks = async (id) => {
    const response = await axios.get(`http://localhost:8081/api/v1/getrank/${id}`);
    setRank(response.data);
  };

  return (
    <div className="container">
       {user && <div id="ranker">{` ${user}= ${rank}`}
        </div>}
        <div className="py-4">
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
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
                <td>{user.pincode}</td>
                <td>{user.score}</td>
                <td>
                  <button className='btn btn-primary max-2'
                    onClick={() => {
                       ranks(user.name);
                      setUser(user.name);
                    }}
                  >
                    GET RANK
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
