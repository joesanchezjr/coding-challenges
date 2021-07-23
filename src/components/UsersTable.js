const UsersTable = ({ users, isSubmitting }) => {
  if (isSubmitting && users.length < 1) return <p>Submitting query...</p>
  if (!isSubmitting && users.length < 1) return <p>No results.</p>
  return (
    <div style={{ position: "relative" }}>
      {isSubmitting && (
        <p style={{ position: "absolute", bottom: "100%", right: 0 }}>Updating query...</p>
      )}
      <div style={{ maxHeight: 500, overflowY: "scroll", position: "relative" }}>
        <table style={{ position: "relative", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ position: "sticky", top: 0, backgroundColor: "#f7f7f7" }}>#</th>
              <th style={{ position: "sticky", top: 0, backgroundColor: "#f7f7f7" }}>Avatar</th>
              <th style={{ position: "sticky", top: 0, backgroundColor: "#f7f7f7" }}>Username</th>
              <th style={{ position: "sticky", top: 0, backgroundColor: "#f7f7f7" }}>User Type</th>
              <th style={{ position: "sticky", top: 0, backgroundColor: "#f7f7f7" }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.avatar_url}
                    width="30"
                    height="30"
                    style={{ borderRadius: "50%", overflow: "hidden" }}
                  />
                </td>
                <td>
                  <p>{user.login}</p>
                </td>
                <td>
                  <p>{user.type}</p>
                </td>
                <td>
                  <p>{user.score}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersTable
