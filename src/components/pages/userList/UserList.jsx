import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { rows } from "../../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(rows);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "userName",
      headerName: "UserName",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 180 },
    { field: "status", headerName: "Status", width: 70 },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon
              onClick={() => deleteHandler(params.row.id)}
              className="userListDelete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 7]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList
