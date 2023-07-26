import './productList.css'
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import  { useState } from "react";


const ProductList = () => {
    const [data, setData] = useState(ProductRows);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "product",
      headerName: "Product",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="productListitem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 180 },
    { field: "status", headerName: "Status", width: 70 },
    {
      field: "price",
      headerName: "Price",
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
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteIcon
              onClick={() => deleteHandler(params.row.id)}
              className="productListDelete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
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
  )
}

export default ProductList