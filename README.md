# Synergic Intelligent Systems

Landing experience and web presence for Synergic Intelligent Systems — built with Next.js and modern web technologies.

## Tech Stack

- **Next.js** — React framework for production
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Responsive Design** — Mobile-first approach

## Live Site

The site is deployed on Vercel and accessible at:

👉 **https://synergic.vercel.app**

Updates deploy automatically as the codebase evolves.

## Environment Variables

To run this project, you'll need to set up the following environment variables in your `.env` file:

### Core Configuration
- `WEBSITE_BASE_URL` — Your site URL (default: `https://synergic.vercel.app`, update for production)

### Email Service (Resend)
- `RESEND_API_KEY` — API key from [resend.com](https://resend.com)
- `SENDING_EMAIL_ADDRESS` — Email address for outgoing messages (must match your Resend domain)
- `RECEIVING_EMAIL_ADDRESS` — Email address that receives contact form submissions

### reCAPTCHA v2
- `NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY` — Public site key
- `RECAPTCHA_V2_SECRET_KEY` — Private secret key

Get reCAPTCHA keys from: https://www.google.com/recaptcha/admin/

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.