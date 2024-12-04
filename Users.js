import React, { useState } from "react";

function User() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
  ]);
  
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

  const addUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", role: "", status: "Active" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? { ...user, ...updatedUser } : user));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const styles = {
    heading: {
      textAlign: "center",
      marginBottom: "30px",
    },
    addUser: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
    },
    input: {
      padding: "10px",
      marginRight: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
    userList: {
      maxWidth: "800px",
      margin: "0 auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    thTd: {
      padding: "12px",
      textAlign: "center",
      border: "1px solid #ddd",
    },
    th: {
      backgroundColor: "#4CAF50",
    },
    actionButton: {
      padding: "5px 10px",
      backgroundColor: "#f44336",
      border: "none",
      color: "white",
      cursor: "pointer",
      margin: "5px",
      borderRadius: "5px",
    },
    actionButtonHover: {
      backgroundColor: "#d32f2f",
    },
  };

  return (
    <div style={styles.userContainer}>
      <h2 style={styles.heading}>User Management</h2>
      <div style={styles.addUser}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={newUser.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={newUser.role}
          onChange={handleChange}
          style={styles.input}
        />
        <select
          name="status"
          value={newUser.status}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button style={styles.button} onClick={addUser}>Add User</button>
      </div>
      <div style={styles.userList}>
        <h3>User List</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={styles.thTd}>{user.name}</td>
                <td style={styles.thTd}>{user.role}</td>
                <td style={styles.thTd}>{user.status}</td>
                <td style={styles.thTd}>
                  <button
                    style={styles.actionButton}
                    onClick={() => editUser(user.id, { role: "Admin" })}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.actionButton}
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
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

export default User;
