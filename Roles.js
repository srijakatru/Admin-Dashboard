import React, { useState } from "react";

function Roles() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ]);

  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const availablePermissions = ["Read", "Write", "Delete"];

  const addRole = () => {
    if (newRole.name) {
      setRoles([...roles, { id: roles.length + 1, ...newRole }]);
      setNewRole({ name: "", permissions: [] });
    }
  };

  const deleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  const handlePermissionChange = (permission) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((perm) => perm !== permission)
        : [...prev.permissions, permission],
    }));
  };

  const handleRoleChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const styles = {
    heading: {
      textAlign: "center",
      marginBottom: "30px",
    },
    addRole: {
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
    roleList: {
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
    permissionsContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
    },
    permissionCheckbox: {
      margin: "0 10px",
    },
  };

  return (
    <div style={styles.roleContainer}>
      <h2 style={styles.heading}>Role Management</h2>
      <div style={styles.addRole}>
        <input
          type="text"
          name="name"
          placeholder="Role Name"
          value={newRole.name}
          onChange={handleRoleChange}
          style={styles.input}
        />
        <div style={styles.permissionsContainer}>
          {availablePermissions.map((permission) => (
            <label key={permission} style={styles.permissionCheckbox}>
              <input
                type="checkbox"
                checked={newRole.permissions.includes(permission)}
                onChange={() => handlePermissionChange(permission)}
              />
              {permission}
            </label>
          ))}
        </div>
        <button style={styles.button} onClick={addRole}>
          Add Role
        </button>
      </div>
      <div style={styles.roleList}>
        <h3>Role List</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Permissions</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td style={styles.thTd}>{role.name}</td>
                <td style={styles.thTd}>{role.permissions.join(", ")}</td>
                <td style={styles.thTd}>
                  <button
                    style={styles.actionButton}
                    onClick={() => deleteRole(role.id)}
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

export default Roles;

