import type { Product, Collection, Article, FaqItem, NavLink } from './types';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export const collections: Collection[] = [
  {
    id: '1',
    slug: 'special-occasions',
    title: 'Entremet for Special Occasions',
    description: 'Elevate your celebrations with cakes that are as memorable as the moments.',
    imageId: 'collection-special-occasion',
  },
  {
    id: '2',
    slug: 'heart-shaped',
    title: 'Heart-Shaped Cakes',
    description: 'A gesture of love, crafted with passion and the finest ingredients.',
    imageId: 'collection-heart-shaped',
  },
  {
    id: '3',
    slug: 'half-entremet',
    title: 'Half Entremet for Everyday Indulgence',
    description: 'Savor a moment of pure bliss, perfectly portioned for two to five.',
    imageId: 'collection-half',
  },
  {
    id: '4',
    slug: 'baby-collection',
    title: 'Pretty Little Baby Collection',
    description: 'Delicate creations for the little joys and milestones in life.',
    imageId: 'collection-baby',
  },
];

export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'lychee-rose-delight',
    name: 'Lychee & Rose Delight',
    description: 'A poetic dance of fragrant rose and sweet lychee.',
    detailedDescription: {
      flavor: 'Delicate notes of rose mousse paired with a light lychee jelly and a soft almond sponge. A hint of raspberry adds a gentle tartness.',
      ingredients: 'Rose mousse, lychee jelly, raspberry confit, almond dacquoise, white chocolate glaze.',
      serving: 'Serves 6-8 people. Best enjoyed chilled.',
      storage: 'Keep refrigerated. Consume within 2 days for optimal freshness.'
    },
    price: 650000,
    sizes: [
      { name: '16cm (6-8 people)', price: 650000 },
      { name: '18cm (8-10 people)', price: 780000 },
    ],
    imageId: 'product-1',
    collection: 'special-occasions',
  },
  {
    id: 'prod-002',
    slug: 'passion-fruit-breeze',
    name: 'Passion Fruit Breeze',
    description: 'A tropical escape in every bite, vibrant and refreshing.',
    detailedDescription: {
      flavor: 'A bright passion fruit cream, layered with coconut mousse and a crunchy coconut base. A taste of summer in Hanoi.',
      ingredients: 'Passion fruit cream, coconut mousse, almond sponge, crispy coconut crunch.',
      serving: 'Serves 6-8 people.',
      storage: 'Keep refrigerated. The crunch layer is best enjoyed on the first day.'
    },
    price: 620000,
     sizes: [
      { name: '16cm (6-8 people)', price: 620000 },
      { name: '18cm (8-10 people)', price: 750000 },
    ],
    imageId: 'product-2',
    collection: 'special-occasions',
  },
  {
    id: 'prod-003',
    slug: 'matcha-yuzu-garden',
    name: 'Matcha & Yuzu Garden',
    description: 'An elegant fusion of earthy matcha and citrusy yuzu.',
    detailedDescription: {
      flavor: 'Rich Uji matcha mousse balanced with a tangy yuzu curd, on a black sesame sponge. A zen-like experience.',
      ingredients: 'Uji matcha mousse, yuzu curd, black sesame joconde, white chocolate.',
      serving: 'Serves 2-4 people (Half Entremet).',
      storage: 'Keep refrigerated. Consume within 2 days.'
    },
    price: 380000,
    imageId: 'product-3',
    collection: 'half-entremet',
  },
  {
    id: 'prod-004',
    slug: 'chocolate-hazelnut-dream',
    name: 'Chocolate Hazelnut Dream',
    description: 'A decadent and luxurious treat for the true chocolate lover.',
    detailedDescription: {
      flavor: 'Velvety 66% dark chocolate mousse, a creamy hazelnut praline center, and a moist chocolate sponge, all on a crunchy feuilletine base.',
      ingredients: 'Dark chocolate mousse, hazelnut praline, chocolate sponge, crunchy feuilletine.',
      serving: 'Serves 8-10 people.',
      storage: 'Best served at room temperature for 15 minutes before consumption.'
    },
    price: 700000,
    sizes: [
      { name: '18cm (8-10 people)', price: 700000 },
      { name: '20cm (10-12 people)', price: 850000 },
    ],
    imageId: 'product-4',
    collection: 'special-occasions',
  },
  {
    id: 'prod-005',
    slug: 'strawberry-love',
    name: 'Strawberry Love',
    description: 'A heart of sweet strawberries and vanilla cream.',
    detailedDescription: {
      flavor: 'Fresh strawberry compote and light vanilla mascarpone cream on a soft vanilla sponge. Simply lovely.',
      ingredients: 'Strawberry compote, vanilla mascarpone cream, vanilla sponge, fresh strawberries.',
      serving: 'Serves 6-8 people.',
      storage: 'Keep refrigerated. Best consumed on the day of purchase due to fresh fruit.'
    },
    price: 680000,
    imageId: 'product-5',
    collection: 'heart-shaped',
  },
  {
    id: 'prod-006',
    slug: 'baby-mango-bliss',
    name: 'Baby Mango Bliss',
    description: 'A small cake full of sunshine and sweet mango flavor.',
    detailedDescription: {
      flavor: 'A light mango mousse with a passion fruit jelly center. Perfectly sized for a small, happy moment.',
      ingredients: 'Mango mousse, passion fruit jelly, almond sponge.',
      serving: 'Serves 1-2 people.',
      storage: 'Keep refrigerated. Consume within 2 days.'
    },
    price: 250000,
    imageId: 'product-6',
    collection: 'baby-collection',
  },
  {
    id: 'prod-007',
    slug: 'raspberry-pistachio-half',
    name: 'Raspberry & Pistachio Half',
    description: 'A vibrant pairing of tart raspberry and nutty pistachio.',
    detailedDescription: {
      flavor: 'Smooth pistachio mousse with a heart of tangy raspberry jelly, on a delicate pistachio dacquoise.',
      ingredients: 'Pistachio mousse, raspberry jelly, pistachio dacquoise.',
      serving: 'Serves 2-4 people (Half Entremet).',
      storage: 'Keep refrigerated. The colors and flavors are best on the first day.'
    },
    price: 420000,
    imageId: 'product-7',
    collection: 'half-entremet',
  },
  {
    id: 'prod-008',
    slug: 'summer-berry-cheesecake',
    name: 'Summer Berry Cheesecake',
    description: 'Our modern take on a classic, bursting with berries.',
    detailedDescription: {
      flavor: 'A light, no-bake cheesecake cream adorned with a medley of fresh summer berries on a buttery biscuit base.',
      ingredients: 'Cream cheese, fresh cream, mixed berries (strawberries, blueberries, raspberries), digestive biscuit base.',
      serving: 'Serves 6-8 people.',
      storage: 'Keep refrigerated. Best consumed within 24 hours.'
    },
    price: 640000,
    imageId: 'product-8',
    collection: 'special-occasions',
  }
];

export const articles: Article[] = [
  {
    id: 'news-1',
    slug: 'our-founder-story',
    title: 'The Sweet Journey of Our Founder',
    excerpt: 'From a small kitchen in Hanoi to a celebrated pastry brand, read the story of our founder, Lan.',
    date: 'May 20, 2024',
    category: 'Founder Stories',
    imageId: 'blog-1',
    content: '<p>The story of Entremet Hanoi begins not in a grand patisserie, but in a small, sunlit kitchen in the heart of Hanoi. Our founder, Lan, discovered her passion for French pastry during a year spent studying in Paris. She was mesmerized by the artistry, the precision, and the delicate balance of flavors in every entremet she tasted. Upon returning to Vietnam, she dreamt of bringing that magic home, but with a unique Vietnamese twist.</p><p>She spent years perfecting her craft, experimenting with local, seasonal fruits like lychee, passion fruit, and mango, and adjusting sweetness levels to suit the local palate. Her vision was to create modern French pastries that felt both luxurious and familiar. Entremet Hanoi is the culmination of that dream—a celebration of technique, creativity, and the freshest ingredients our beautiful country has to offer.</p>'
  },
  {
    id: 'news-2',
    slug: 'behind-the-scenes-cake-creation',
    title: 'Behind the Scenes: Crafting the Perfect Cake',
    excerpt: 'A glimpse into the meticulous process and passion that goes into every single one of our cakes.',
    date: 'May 15, 2024',
    category: 'Behind-the-scenes',
    imageId: 'blog-2',
    content: '<p>What does it take to create an Entremet Hanoi cake? It starts with inspiration—often from a seasonal fruit or a memory of a particular scent. Our pastry chefs then begin a meticulous process of sketching, flavor pairing, and testing. Each layer is crafted and frozen separately before being assembled into a perfect whole. The final touch, the glaze or "glaçage," is a moment of pure focus, requiring a steady hand and precise temperature control to achieve that signature mirror-like shine. It\'s a labor of love, a dance of science and art that we are proud to share with you.</p>'
  },
  {
    id: 'news-3',
    slug: 'shopping-guide-for-introverts',
    title: 'A Shopping Guide for Introverts',
    excerpt: 'Hate making phone calls? We get it. Here’s how to order your perfect cake, peacefully and online.',
    date: 'May 10, 2024',
    category: 'Shopping Guides',
    imageId: 'blog-3',
    content: '<p>We believe that the joy of enjoying a beautiful cake should be accessible to everyone, even those who prefer quiet contemplation over conversation. That\'s why we\'ve designed our website to be a peaceful and seamless experience. You can browse our full collection, find your perfect match with our flavor quiz, and place your order without ever needing to pick up the phone. Simply choose your cake, select your delivery time, and let us handle the rest. It\'s your moment of indulgence, on your terms.</p>'
  },
];

export const faqs: FaqItem[] = [
    {
        id: 'faq-1',
        question: 'How do I place an order?',
        answer: 'You can easily place an order through our website. Simply browse our products, add your desired cake to the cart, and proceed to checkout. You will be asked for delivery details and payment information.'
    },
    {
        id: 'faq-2',
        question: 'What are your delivery areas in Hanoi?',
        answer: 'We currently offer hand-delivery to all urban districts within Hanoi. For suburban districts, please contact our hotline to check for availability and potential extra fees.'
    },
    {
        id: 'faq-3',
        question: 'How should I store my Entremet cake?',
        answer: 'Our Entremet cakes are best stored in the refrigerator at 2-6°C. For optimal taste and texture, we recommend consuming them within 2 days of purchase. Please refer to the specific product page for any unique storage tips.'
    },
    {
        id: 'faq-4',
        question: 'Can I customize a cake?',
        answer: 'Due to the complexity of our Entremet recipes, we do not offer flavor customizations. However, we can add simple messages on a chocolate tag. Please specify your message in the order notes during checkout.'
    },
    {
        id: 'faq-5',
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods for your convenience, including Momo, ZaloPay, bank transfer (chuyển khoản), and Cash on Delivery (COD).'
    },
    {
        id: 'faq-6',
        question: 'I have allergies. How can I check the ingredients?',
        answer: 'Each product page has a detailed description including a list of main ingredients. If you have a specific allergy, please contact our hotline before ordering so we can advise you on the best options.'
    },
];
