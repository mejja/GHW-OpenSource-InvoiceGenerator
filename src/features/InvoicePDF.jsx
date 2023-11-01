// Create and Download PDF File
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const InvoicePDF = ({ invoiceInfoHeaderData, invoiceItemsTableData }) => {
  // Timestamp variable to be used in invoice name
  const timeStamp = new Date().toISOString();

  const generatePDF = () => {
    const doc = new jsPDF();

    // set font size
    doc.setFontSize(12);

    // Add content to this pdf document
    doc.text("Invoice", 10, 10);
    doc.text(`Company Name: ${invoiceInfoHeaderData.companyName}`, 10, 20);
    doc.text(`Invoice Number: ${invoiceInfoHeaderData.invoiceNumber}`, 10, 30);
    doc.text(`Company Address: ${invoiceInfoHeaderData.companyAddress}`, 10, 40);
    doc.text(`Customer Name: ${invoiceInfoHeaderData.customerName}`, 10, 50);
    doc.text(`Customer Address: ${invoiceInfoHeaderData.customerAddress}`, 10, 60);
    doc.text(`Invoice Date: ${invoiceInfoHeaderData.invoiceDate}`, 10, 70);

    //  create a Table for Invoice Items

    // Define columns
    const columns = [
      "Item Name",
      "Item Description",
      "Quantity",
      "Price",
      "Total",
    ];

    // Define rows
    const rows = invoiceItemsTableData.map((item) => [
      item.itemName,
      item.itemDescription,
      item.quantity,
      item.price,
      item.quantity * item.price,
    ]);

    // Create the table using jspdf-autotable
    doc.autoTable(columns, rows, {
      startY: 80,
      theme: "grid",
      styles: {
        fontSize: 10,
        cellWidth: "wrap",
        cellPadding: 2,
        borderColor: "#000",
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 40 },
        2: { cellWidth: 20 },
        3: { cellWidth: 20 },
        4: { cellWidth: 30 },
      },
      margin: { left: 10, right: 10, top: 10, bottom: 10 },
    });

    // save the invoice pdf
    doc.save(`${invoiceInfoHeaderData.invoiceNumber}_${timeStamp}.pdf`);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={generatePDF} className="btn btn-success">
        Generate PDF
      </button>
    </div>
  );
};

export default InvoicePDF;
