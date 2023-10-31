//Temporary component to display invoice data in JSON format

const TempInvoiceDetailsOutput = ({ invoiceInfoHeaderData }) => {
  return (
    <div className="m-8">
      <pre>
        <code>
          {JSON.stringify({ invoiceInfoHeaderData }, null, 2)}
        </code>
      </pre>
    </div>
  )
}

export default TempInvoiceDetailsOutput;