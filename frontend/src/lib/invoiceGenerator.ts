// PDF Invoice Generator (using jsPDF)
export const generateInvoicePDF = (orderData: any) => {
  // This would use jsPDF library in a real implementation
  // For demo purposes, we'll create a simple HTML-based PDF
  
  const invoiceHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Invoice #${orderData.orderNumber}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #3b82f6; }
        .invoice-title { font-size: 28px; font-weight: bold; color: #1f2937; }
        .invoice-details { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
        .section { background: #f9fafb; padding: 20px; border-radius: 8px; }
        .section h3 { margin: 0 0 15px 0; color: #374151; font-size: 16px; }
        .section p { margin: 5px 0; }
        .items-table { width: 100%; border-collapse: collapse; margin: 30px 0; }
        .items-table th, .items-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        .items-table th { background: #f3f4f6; font-weight: 600; }
        .totals { margin-left: auto; width: 300px; }
        .totals-row { display: flex; justify-content: space-between; padding: 8px 0; }
        .totals-row.total { font-weight: bold; font-size: 18px; border-top: 2px solid #3b82f6; padding-top: 12px; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🛍️ E-Store</div>
        <div class="invoice-title">INVOICE</div>
      </div>
      
      <div class="invoice-details">
        <div class="section">
          <h3>Bill To:</h3>
          <p><strong>${orderData.customer.name}</strong></p>
          <p>${orderData.customer.email}</p>
          <p>${orderData.shippingAddress}</p>
        </div>
        
        <div class="section">
          <h3>Invoice Details:</h3>
          <p><strong>Invoice #:</strong> ${orderData.orderNumber}</p>
          <p><strong>Date:</strong> ${new Date(orderData.date).toLocaleDateString()}</p>
          <p><strong>Payment Method:</strong> ${orderData.paymentMethod}</p>
          <p><strong>Status:</strong> ${orderData.status}</p>
        </div>
      </div>
      
      <table class="items-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${orderData.items.map((item: any) => `
            <tr>
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>${orderData.currency}${item.price.toFixed(2)}</td>
              <td>${orderData.currency}${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div class="totals">
        <div class="totals-row">
          <span>Subtotal:</span>
          <span>${orderData.currency}${orderData.subtotal.toFixed(2)}</span>
        </div>
        <div class="totals-row">
          <span>Shipping:</span>
          <span>${orderData.currency}${orderData.shipping.toFixed(2)}</span>
        </div>
        <div class="totals-row">
          <span>Tax:</span>
          <span>${orderData.currency}${orderData.tax.toFixed(2)}</span>
        </div>
        <div class="totals-row total">
          <span>Total:</span>
          <span>${orderData.currency}${orderData.total.toFixed(2)}</span>
        </div>
      </div>
      
      <div class="footer">
        <p>Thank you for your business!</p>
        <p>E-Store - Your trusted online shopping destination</p>
        <p>support@estore.com | +1 (555) 123-4567</p>
      </div>
    </body>
    </html>
  `
  
  return invoiceHTML
}

export const downloadInvoice = (orderData: any) => {
  const invoiceHTML = generateInvoicePDF(orderData)
  
  // Create a new window for printing/saving as PDF
  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(invoiceHTML)
    printWindow.document.close()
    
    // Trigger print dialog
    setTimeout(() => {
      printWindow.print()
    }, 500)
  }
}

export const emailInvoice = async (orderData: any, emailAddress: string) => {
  // In a real implementation, this would send the invoice via email API
  const invoiceHTML = generateInvoicePDF(orderData)
  
  // Simulate email sending
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Invoice emailed to: ${emailAddress}`)
      resolve(true)
    }, 1000)
  })
}