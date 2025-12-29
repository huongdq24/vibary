import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'lychee-rose-delight',
    name: 'BE IN BLOSSOM',
    description: 'Vũ điệu thơ mộng của hoa hồng thơm ngát và vải ngọt ngào.',
    detailedDescription: {
      flavor: 'Mousse hoa hồng tinh tế kết hợp với thạch vải nhẹ và bánh bông lan hạnh nhân mềm mại. Một chút mâm xôi thêm vị chua nhẹ.',
      ingredients: 'Mousse hoa hồng, thạch vải, mứt mâm xôi, bánh dacquoise hạnh nhân, lớp phủ sô cô la trắng.',
      serving: 'Phục vụ 6-8 người. Thưởng thức ngon nhất khi lạnh.',
      storage: 'Bảo quản trong tủ lạnh. Dùng trong vòng 2 ngày để có độ tươi ngon tối ưu.'
    },
    price: 650000,
    sizes: [
      { name: '16cm (6-8 người)', price: 650000 },
      { name: '18cm (8-10 người)', price: 780000 },
    ],
    imageId: 'product-1',
    collection: 'special-occasions',
  },
  {
    id: 'prod-002',
    slug: 'passion-fruit-breeze',
    name: 'BELOVED DARLING',
    description: 'Một cuộc trốn chạy đến miền nhiệt đới trong mỗi miếng bánh, sống động và sảng khoái.',
    detailedDescription: {
      flavor: 'Kem chanh dây tươi sáng, xếp lớp với mousse dừa và đế dừa giòn. Một hương vị của mùa hè Bắc Ninh.',
      ingredients: 'Kem chanh dây, mousse dừa, bánh bông lan hạnh nhân, đế dừa giòn.',
      serving: 'Phục vụ 6-8 người.',
      storage: 'Bảo quản trong tủ lạnh. Lớp đế giòn ngon nhất khi thưởng thức trong ngày đầu tiên.'
    },
    price: 620000,
     sizes: [
      { name: '16cm (6-8 người)', price: 620000 },
      { name: '18cm (8-10 người)', price: 750000 },
    ],
    imageId: 'product-2',
    collection: 'special-occasions',
  },
  {
    id: 'prod-003',
    slug: 'a-little-grace',
    name: 'A LITTLE GRACE',
    description: 'Sự kết hợp thanh lịch giữa vị trà matcha đất và vị cam yuzu.',
    detailedDescription: {
      flavor: 'Mousse matcha Uji đậm đà cân bằng với sữa đông yuzu chua thanh, trên nền bánh bông lan mè đen. Một trải nghiệm tựa thiền.',
      ingredients: 'Mousse matcha Uji, sữa đông yuzu, bánh joconde mè đen, sô cô la trắng.',
      serving: 'Phục vụ 2-4 người (Half Entremet).',
      storage: 'Bảo quản trong tủ lạnh. Dùng trong vòng 2 ngày.'
    },
    price: 380000,
    imageId: 'product-3',
    collection: 'half-entremet',
  },
  {
    id: 'prod-004',
    slug: 'chocolate-hazelnut-dream',
    name: 'SUMMER CALLING',
    description: 'Một món ăn xa hoa và sang trọng cho người thực sự yêu sô cô la.',
    detailedDescription: {
      flavor: 'Mousse sô cô la đen 66% mịn mượt, nhân praline hạt phỉ kem, và bánh bông lan sô cô la ẩm, tất cả trên một lớp đế feuilletine giòn.',
      ingredients: 'Mousse sô cô la đen, praline hạt phỉ, bánh bông lan sô cô la, đế feuilletine giòn.',
      serving: 'Phục vụ 8-10 người.',
      storage: 'Ngon nhất khi để ở nhiệt độ phòng 15 phút trước khi dùng.'
    },
    price: 700000,
    sizes: [
      { name: '18cm (8-10 người)', price: 700000 },
      { name: '20cm (10-12 người)', price: 850000 },
    ],
    imageId: 'product-4',
    collection: 'special-occasions',
  },
  {
    id: 'prod-005',
    slug: 'strawberry-love',
    name: 'A GENTLE BLEND',
    description: 'Trái tim của dâu tây ngọt ngào và kem vani.',
    detailedDescription: {
      flavor: 'Mứt dâu tây tươi và kem mascarpone vani nhẹ trên bánh bông lan vani mềm. Đơn giản là đáng yêu.',
      ingredients: 'Mứt dâu tây, kem mascarpone vani, bánh bông lan vani, dâu tây tươi.',
      serving: 'Phục vụ 6-8 người.',
      storage: 'Bảo quản trong tủ lạnh. Ngon nhất khi dùng trong ngày mua do có trái cây tươi.'
    },
    price: 680000,
    imageId: 'product-5',
    collection: 'heart-shaped',
  },
  {
    id: 'prod-006',
    slug: 'baby-mango-bliss',
    name: 'Baby Mango Bliss',
    description: 'Chiếc bánh nhỏ tràn ngập ánh nắng và hương vị xoài ngọt ngào.',
    detailedDescription: {
      flavor: 'Mousse xoài nhẹ với nhân thạch chanh dây. Kích thước hoàn hảo cho một khoảnh khắc hạnh phúc nhỏ.',
      ingredients: 'Mousse xoài, thạch chanh dây, bánh bông lan hạnh nhân.',
      serving: 'Phục vụ 1-2 người.',
      storage: 'Bảo quản trong tủ lạnh. Dùng trong vòng 2 ngày.'
    },
    price: 250000,
    imageId: 'product-6',
    collection: 'baby-collection',
  },
  {
    id: 'prod-007',
    slug: 'raspberry-pistachio-half',
    name: 'Raspberry & Pistachio Half',
    description: 'Sự kết hợp sống động của mâm xôi chua và hạt dẻ cười bùi.',
    detailedDescription: {
      flavor: 'Mousse hạt dẻ cười mịn màng với trái tim thạch mâm xôi chua, trên nền bánh dacquoise hạt dẻ cười tinh tế.',
      ingredients: 'Mousse hạt dẻ cười, thạch mâm xôi, bánh dacquoise hạt dẻ cười.',
      serving: 'Phục vụ 2-4 người (Half Entremet).',
      storage: 'Bảo quản trong tủ lạnh. Màu sắc và hương vị ngon nhất trong ngày đầu tiên.'
    },
    price: 420000,
    imageId: 'product-7',
    collection: 'half-entremet',
  },
  {
    id: 'prod-008',
    slug: 'summer-berry-cheesecake',
    name: 'Summer Berry Cheesecake',
    description: 'Phiên bản hiện đại của một món kinh điển, tràn ngập các loại quả mọng.',
    detailedDescription: {
      flavor: 'Kem cheesecake không nướng nhẹ nhàng được trang trí bằng một hỗn hợp các loại quả mọng mùa hè tươi trên đế bánh quy bơ.',
      ingredients: 'Phô mai kem, kem tươi, hỗn hợp quả mọng (dâu tây, việt quất, mâm xôi), đế bánh quy digestive.',
      serving: 'Phục vụ 6-8 người.',
      storage: 'Bảo quản trong tủ lạnh. Ngon nhất khi dùng trong vòng 24 giờ.'
    },
    price: 640000,
    imageId: 'product-8',
    collection: 'special-occasions',
  }
];
