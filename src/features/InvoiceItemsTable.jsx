//Add ag-grid table to store invoice items details
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const InvoiceItemsTable = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const defaultColDefs = {
    sortable: true,
    }

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 400, width: 600 }}>
      
      <AgGridReact 
        rowData={rowData} 
        columnDefs={columnDefs}
        defaultColDef={defaultColDefs}
      />
    </div>
  );
};

export default InvoiceItemsTable;