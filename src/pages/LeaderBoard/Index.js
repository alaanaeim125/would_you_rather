import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Styles.css";

const LeaderBoard = (props) => {
  const [orderUsers, setOrderUsers] = useState([]);

  const allUsers = useSelector((state) => state.data.users);

  const getAllUsersSorted = (users) => {
    let sortedUsers = Object.keys(users)
      .map((id) => ({
        id: id,
        name: users[id].name,
        answer: Object.keys(users[id].answers).length,
        question: Object.keys(users[id].questions).length,
        avatarURL: users[id].avatarURL,
      }))
      .sort((a, b) => b.answer + b.question - a.answer - a.question);
    setOrderUsers(sortedUsers);
  };

  useEffect(() => {
    getAllUsersSorted(allUsers);
  }, [allUsers]);

  return (
    <div className="container">
      <Table
        striped
        bordered
        hover
        responsive
        variant="light"
        className="table"
      >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Profile And Name</th>
            <th>Number Of Question Asked</th>
            <th>Number Of Question Answered</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderUsers.length !== 0 ? (
            orderUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td style={{ textAlign: "left" }}>
                  <img
                    src={user.avatarURL}
                    width="40"
                    height="40"
                    alt="Profile img"
                    style={{ borderRadius: "30px", marginRight: "10px" }}
                  />
                  {user.name}
                </td>
                <td>{user.question}</td>
                <td>{user.answer}</td>
                <td>{user.answer + user.question}</td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default LeaderBoard;
