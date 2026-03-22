# Pivra IT Services Backend

This is the Node.js + Express backend that powers Pivra's automated billing, Cashfree payment verifications, and professional invoice generation.

## 🚀 Built With
- **Express / Node.js**: Fast API runtime.
- **MongoDB + Mongoose**: For storing verified Cashfree payment orders.
- **Cashfree SDK / Crypto**: For secure Webhook signature validation.
- **PDFKit**: For generating elegant PDF receipts locally without massive dependencies.
- **Nodemailer**: For robust email delivery via SMTP.

## 🛠️ Setup Instructions

### 1. Configure Environment Variables
Copy the sample environment file to `.env`:
\`\`\`bash
cp .env.example .env
\`\`\`
Edit the `.env` file to include your actual MongoDB URI, Gmail App password, and Cashfree Keys.

### 2. Install Dependencies
Ensure you are in the \`backend\` directory and install npm modules:
\`\`\`bash
npm install
\`\`\`

### 3. Running the Server 
To launch locally in development mode:
\`\`\`bash
npm start
\`\`\`
The server will run on \`http://localhost:5000\`.

## 🌐 API Endpoints

### Payment
- \`POST /api/payment/webhook\`: Listens for \`PAYMENT_SUCCESS_WEBHOOK\` from Cashfree. Validates HMAC, creates DB order, fires email & PDF generator.

### Orders
- \`GET /api/orders/\`: Requires \`Bearer {token}\` linked to Admin. Returns all historical orders.
- \`GET /api/orders/invoice/:orderId\`: Returns a downloadable PDF document buffer of the invoice for the specific order.

## 🔒 Security Measures
- **Signature Validation**: Ensures webhooks strictly originate from Cashfree.
- **JWT Middleware**: Guards sensitive metrics from public traversal.
- **Environment Isolation**: No hard-coded keys or SMPT credentials anywhere in the code.
