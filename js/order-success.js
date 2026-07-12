// Simple Order Success Page Controller

document.addEventListener('DOMContentLoaded', () => {
  const receiptJson = sessionStorage.getItem('simple_last_receipt');
  if (!receiptJson) {
    // Redirect to home if accessed directly without an active transaction receipt
    window.location.href = 'index.html';
    return;
  }
  
  const receipt = JSON.parse(receiptJson);
  
  const orderRefEl = document.getElementById('success-order-ref');
  const emailEl = document.getElementById('success-email');
  const totalEl = document.getElementById('success-total');
  
  if (orderRefEl) orderRefEl.textContent = receipt.orderRef;
  if (emailEl) emailEl.textContent = receipt.email;
  if (totalEl) totalEl.textContent = `$${receipt.total.toFixed(2)}`;
  
  // Optional: clear receipt after page leave to prevent repeat loads
  // window.addEventListener('beforeunload', () => {
  //   sessionStorage.removeItem('simple_last_receipt');
  // });
});
