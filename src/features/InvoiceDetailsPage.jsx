// InvoiceDetais which is parent to all invoice component
import { useState } from "react";
import InvoiceInfoHeader from "./InvoiceInfoHeader";
import InvoiceItemsTable from "./InvoiceItemsTable";
import TempInvoiceDetailsOutput from "./Temp/TempInvoiceDetailsOutput";

const InvoiceDetailsPage = () => {
  const [invoiceInfoHeader, setInvoiceInfoHeader] = useState({
    companyName: "",
    companyAddress: "",
    customerName: "",
    customerAddress: "",
    invoiceNumber: "",
    invoiceDate: "",
  });

  const handleInvoiceInfoHeaderChange = (name, value) => {
    setInvoiceInfoHeader({ ...invoiceInfoHeader, [name]: value });
  };

  return (
    <>
      {/*InvoiceInfoHeader start */}
      <div className="card card-compact w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <InvoiceInfoHeader
            invoiceInfoData={invoiceInfoHeader}
            onInvoiceInfoChange={(name, value) =>
              handleInvoiceInfoHeaderChange(name, value)
            }
          />
        </div>
      </div>
      {/*InvoiceInfoHeader End*/}
      
      {/* InvoiceItemsTable Start  */}
      <div className="card w-full bg-base-300 shadow-xl my-4">
      <div className="flex justify-center items-center m-6">
      <InvoiceItemsTable />
      </div>
      </div>
      {/* InvoiceItemsTable End  */}

      {/* TempInvoiceDetailsOutput start  */}
      <div className="card w-auto my-8 bg-neutral">
        <TempInvoiceDetailsOutput invoiceInfoHeaderData={invoiceInfoHeader} />
      </div>
      {/* TempInvoiceDetailsOutput End  */}
    </>
  );
};
export default InvoiceDetailsPage;