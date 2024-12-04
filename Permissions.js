import React, { useState } from "react";

function Permissions() {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read", description: "Grants read access" },
    { id: 2, name: "Write", description: "Grants write access" },
    { id: 3, name: "Delete", description: "Grants delete access" },
  ]);

  const [newPermission, setNewPermission] = useState({ name: "", description: "" });

  const addPermission = () => {
    if (newPermission.name && newPermission.description) {
      setPermissions([...permissions, { id: permissions.length + 1, ...newPermission }]);
      setNewPermission({ name: "", description: "" });
    }
  };

  const deletePermission = (id) => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPermission((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const styles = {
    heading: {
      textAlign: "center",
      marginBottom: "30px",
    },
    addPermission: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "30px",
    },
    input: {
      padding: "10px",
      marginBottom: "10px",
      width: "300px",
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
    permissionList: {
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
    <div style={styles.permissionContainer}>
      <h2 style={styles.heading}>Dynamic Permission Management</h2>
      <div style={styles.addPermission}>
        <input
          type="text"
          name="name"
          placeholder="Permission Name"
          value={newPermission.name}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="text"
          name="description"
          placeholder="Permission Description"
          value={newPermission.description}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button style={styles.button} onClick={addPermission}>
          Add Permission
        </button>
      </div>
      <div style={styles.permissionList}>
        <h3>Permission List</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Permission</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.id}>
                <td style={styles.thTd}>{permission.name}</td>
                <td style={styles.thTd}>{permission.description}</td>
                <td style={styles.thTd}>
                  <button
                    style={styles.actionButton}
                    onClick={() => deletePermission(permission.id)}
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

export default Permissions;
