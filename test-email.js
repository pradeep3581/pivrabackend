require('dotenv').config();
const { sendConfirmationEmail } = require('./utils/emailService');

const testOrder = {
  orderId: 'TEST_' + Date.now(),
  email: process.env.EMAIL_USER || 'test@example.com',
  name: 'Test Customer',
  service: 'Test Web Development',
  amount: 99.99
};

const testHtml = `<h1>This is a test payment confirmation</h1><p>Amount: $99.99</p>`;

console.log('Testing email dispatch to', testOrder.email);
console.log('Make sure EMAIL_USER and EMAIL_PASS are correctly set in .env');

sendConfirmationEmail(testOrder, testHtml)
  .then(() => {
    console.log('Test dispatch triggered. Check console logs of emailService for details.');
    setTimeout(() => process.exit(0), 3000); // Wait for async send
  })
  .catch(err => {
    console.error('Test Failed:', err);
    process.exit(1);
  });
