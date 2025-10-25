# SOA Soda Maker E-Commerce 🥤

The official e-commerce platform for SOA Soda Maker. Transform plain water into delicious soda in seconds!

## Features

- 🛒 **Shopping Cart** - Add products to cart with real-time updates
- 💳 **Wompi Payment Integration** - Secure checkout with Colombian payment gateway
- 📱 **Responsive Design** - Works perfectly on mobile and desktop
- 🎨 **Modern UI** - Built with Shadcn/ui components and Tailwind CSS
- 🔄 **State Management** - Zustand for cart and TanStack Query for API calls
- 🗄️ **Database** - PostgreSQL with Prisma ORM

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Database:** PostgreSQL (via Supabase or any PostgreSQL provider)
- **ORM:** Prisma
- **State Management:** Zustand, TanStack Query
- **Payment Gateway:** Wompi (Colombian payment processor)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (can use Supabase, Railway, or local PostgreSQL)
- Wompi account for payment processing

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd soa_sodamaker_
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Then edit `.env` with your actual values:
```env
DATABASE_URL="postgresql://user:password@host:port/database"
DIRECT_URL="postgresql://user:password@host:port/database"

# Wompi Sandbox Keys (get from https://wompi.com)
WOMPI_PUBLIC_KEY="pub_test_..."
WOMPI_PRIVATE_KEY="prv_test_..."

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. Generate Prisma client:
```bash
npx prisma generate
```

5. Run database migrations:
```bash
npx prisma db push
```

6. Seed the database with sample product:
```bash
npm run db:seed
```

7. Start the development server:
```bash
npm run dev
```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

### Using Supabase (Recommended for beginners)

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > Database
4. Copy the connection string and use it as `DATABASE_URL`
5. For `DIRECT_URL`, use the same connection string but append `?pgbouncer=true`

### Local PostgreSQL

If you prefer to use a local database:

1. Install PostgreSQL on your machine
2. Create a database: `createdb soasodamaker`
3. Use connection string: `postgresql://postgres:password@localhost:5432/soasodamaker`

## Wompi Integration

To test payments, you'll need Wompi sandbox credentials:

1. Sign up at [wompi.com](https://wompi.com)
2. Get your test API keys from the dashboard
3. Add them to your `.env` file
4. Test cards are available in [Wompi's documentation](https://docs.wompi.co/docs/testing)

## Project Structure

```
soa_sodamaker_/
├── app/
│   ├── api/
│   │   └── checkout/        # Payment API endpoint
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page with product catalog
│   └── providers.tsx        # TanStack Query provider
├── components/
│   ├── ui/                  # Shadcn UI components
│   ├── cart-sheet.tsx       # Shopping cart sidebar
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer
│   ├── hero-section.tsx     # Product showcase
│   ├── delivery-section.tsx # Delivery information
│   ├── video-section.tsx    # Product video
│   ├── refill-section.tsx   # CO2 refill service
│   ├── faq-section.tsx      # FAQ accordion
│   └── sticky-buy-bar.tsx   # Sticky bottom CTA
├── hooks/
│   └── use-checkout.ts      # Checkout mutation hook
├── lib/
│   ├── prisma.ts            # Prisma client instance
│   └── utils.ts             # Utility functions
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Database seeding script
├── store/
│   └── cart-store.ts        # Zustand cart state
└── .env.example             # Environment variables template
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed database with sample data

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Railway
- Render
- AWS Amplify
- DigitalOcean App Platform

## Security Notes

⚠️ **Important**: 
- Never commit your `.env` file
- Use environment variables for all sensitive data
- The customer data in the checkout API is currently a placeholder - implement proper user authentication for production

## License

All rights reserved © 2025 SOA Soda Maker

## Support

For questions or issues, contact: info@soasodamaker.com
