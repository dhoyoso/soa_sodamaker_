// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a sample SOA Soda Maker product
  const product = await prisma.product.upsert({
    where: { id: 'soa-sodamaker-black' },
    update: {},
    create: {
      id: 'soa-sodamaker-black',
      name: 'SOA Soda Maker Classic',
      description: 'Transform plain water into delicious soda in seconds. Save money, reduce waste, and enjoy fresh carbonated drinks at home.',
      price: 450000, // 450,000 COP (approximately $100-120 USD)
      brand: 'SOA Soda Maker',
      color: 'Black',
      images: [
        'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1625772452888-7f6a80c7e98e?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1625772300126-638c04b2e404?w=800&h=800&fit=crop',
      ],
      rating: 4.7,
      stock: 100,
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log('Created product:', product.name);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
