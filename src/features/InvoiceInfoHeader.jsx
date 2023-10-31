// Add Invoice information like user, customer, Date, invoice number
const InvoiceInfoHeader = ({ invoiceInfoData, onInvoiceInfoChange }) => {
  const invoiceInfoHeadersArray = [
    {
      label: "Company Name",
      value: invoiceInfoData.companyName,
      onChange: (value) => onInvoiceInfoChange("companyName", value),
    },
    {
      label: "Company Address",
      value: invoiceInfoData.companyAddress,
      onChange: (value) => onInvoiceInfoChange("companyAddress", value),
    },
    {
      label: "Customer Name",
      value: invoiceInfoData.customerName,
      onChange: (value) => onInvoiceInfoChange("customerName", value),
    },
    {
      label: "Customer Address",
      value: invoiceInfoData.customerAddress,
      onChange: (value) => onInvoiceInfoChange("customerAddress", value),
    },
    {
      label: "Invoice Number",
      value: invoiceInfoData.invoiceNumber,
      onChange: (value) => onInvoiceInfoChange("invoiceNumber", value),
    },
    {
      label: "Customer Date",
      value: invoiceInfoData.invoiceDate,
      onChange: (value) => onInvoiceInfoChange("invoiceDate", value),
    },
  ];
  return (
    <div>
      <h1>InvoiceInfoHeader</h1>
      {/*Map over InvoiceInfoHeadersArray Start */}
      <div className="flex flex-wrap">
        {invoiceInfoHeadersArray.map((item) => (
          <div key={item.label} className="w-full sm:w-1/2 md:w-1/4 p-2">
            <label className="block text-sm text-neutral-content pb-1">
              {item.label}
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              value={item.value}
              onChange={(e) => item.onChange(e.target.value)}
            />
          </div>
        ))}
      </div>
      {/*Map over InvoiceInfoHeadersArray End */}
    </div>
  );
};

export default InvoiceInfoHeader;
