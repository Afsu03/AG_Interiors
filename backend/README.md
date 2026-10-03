# AG Interiors Backend API

A Node.js/Express backend for the AG Interiors interior design platform. This API handles client inquiries, contact form submissions, and portfolio management.

## Features

- ✅ Contact form submission with email notifications
- ✅ Client inquiry management (CRUD operations)
- ✅ Portfolio item management
- ✅ CORS enabled for frontend integration
- ✅ Error handling and validation
- ✅ Environment configuration

## Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your configuration:

```bash
cp .env.example .env
```

Edit `.env` with your settings:
- `PORT`: Server port (default: 5000)
- `EMAIL_USER`: Your email for sending contact form notifications
- `EMAIL_PASS`: Email app password
- `MONGODB_URI`: MongoDB connection string (optional)

### 3. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server will run at `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check if API is running

### Contact Form
- `POST /api/contact/submit` - Submit contact form
  - Body: `{ name, email, phone, subject, message }`

### Client Inquiries
- `GET /api/inquiries` - Fetch all inquiries
- `GET /api/inquiries/:id` - Fetch single inquiry
- `POST /api/inquiries` - Create new inquiry
- `DELETE /api/inquiries/:id` - Delete inquiry

### Portfolio
- `GET /api/portfolio` - Fetch all portfolio items
- `GET /api/portfolio/:id` - Fetch single portfolio item
- `POST /api/portfolio` - Add new portfolio item

## Frontend Integration

To connect from your frontend, update API calls to point to your backend:

```javascript
const API_URL = 'http://localhost:5000/api';

// Contact form example
fetch(`${API_URL}/contact/submit`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
.then(res => res.json())
.then(data => console.log(data));
```

## Next Steps

- [ ] Connect MongoDB database
- [ ] Add authentication (JWT)
- [ ] Create admin dashboard
- [ ] Add image upload functionality
- [ ] Deploy to production (Heroku, Railway, Render)
- [ ] Set up GitHub Actions for CI/CD

## Support

For questions or issues, contact: https://github.com/Afsu03
