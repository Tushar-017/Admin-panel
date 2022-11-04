import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { userRows } from "../../DummyData"
import { Link } from "react-router-dom"
import { useState } from "react"

import "./UserList.css"

function UserList() {
  const [data, setData] = useState(userRows)

  // Delete user
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="avatar" className="userListImg" />
            {params.row.username}
          </div>
        )
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      type: "number",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList
