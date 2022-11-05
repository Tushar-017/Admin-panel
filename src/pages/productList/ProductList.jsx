import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { productRows } from "../../DummyData"
import { Link } from "react-router-dom"
import { useState } from "react"

import "./ProductList.css"

function ProductList() {
  const [data, setData] = useState(productRows)

  // Delete product
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="img" className="productListImg" />
            {params.row.name}
          </div>
        )
      },
    },
    { field: "stock", headerName: "S tock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },
    {
      field: "price",
      headerName: "Price",
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
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="productList">
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

export default ProductList
