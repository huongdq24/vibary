

import type { Product, Collection, Article, FaqItem, NavLink } from './types';

export const navLinks: NavLink[] = [
  { href: '/products', label: 'Sản Phẩm' },
  { href: '/about', label: 'Về Vibary' },
  { href: '/faq', label: 'Hỏi đáp' },
  { href: '/news', label: 'Tin Tức' },
  { href: '/contact', label: 'Liên Hệ' },
];

export const collections: Collection[] = [
  {
    id: '1',
    slug: 'special-occasions',
    title: 'Entremet cho Dịp Đặc Biệt',
    description: 'Nâng tầm lễ kỷ niệm của bạn với những chiếc bánh đáng nhớ như chính khoảnh khắc.',
    imageId: 'collection-special-occasion',
  },
  {
    id: '2',
    slug: 'heart-shaped',
    title: 'Bánh Hình Trái Tim',
    description: 'Một cử chỉ yêu thương, được chế tác bằng niềm đam mê và những nguyên liệu tốt nhất.',
    imageId: 'collection-heart-shaped',
  },
  {
    id: '3',
    slug: 'half-entremet',
    title: 'Half Entremet cho Ngày Thường',
    description: 'Thưởng thức một khoảnh khắc hạnh phúc thuần khiết, khẩu phần hoàn hảo cho hai đến năm người.',
    imageId: 'collection-half',
  },
  {
    id: '4',
    slug: 'baby-collection',
    title: 'Bộ Sưu Tập Bé Xinh',
    description: 'Những sáng tạo tinh tế cho những niềm vui và cột mốc nhỏ trong đời.',
    imageId: 'collection-baby',
  },
];

export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'lychee-rose-delight',
    name: 'BE IN BLOSSOM',
    subtitle: 'VẢI & HOA HỒNG',
    description: 'Vũ điệu thơ mộng của hoa hồng thơm ngát và vải ngọt ngào.',
    detailedDescription: {
      flavor: 'Mousse hoa hồng tinh tế kết hợp với thạch vải nhẹ và bánh bông lan hạnh nhân mềm mại. Một chút mâm xôi thêm vị chua nhẹ.',
      ingredients: 'Mousse hoa hồng, thạch vải, mứt mâm xôi, bánh dacquoise hạnh nhân, lớp phủ sô cô la trắng.',
      serving: 'Dành cho 6-8 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Không nên để bánh ở nhiệt độ phòng quá 30 phút (Bánh sẽ bị chảy). Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 16cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 10 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 650000,
    sizes: [
      { name: '16cm (6-8 người)', price: 650000 },
      { name: '18cm (8-10 người)', price: 780000 },
    ],
    imageIds: ['product-1', 'product-2', 'product-3'],
    collection: 'special-occasions',
    categorySlug: 'banh-sinh-nhat',
    flavorProfile: ['Ngọt ngào', 'Thơm ngát', 'Tinh tế'],
    structure: [
        'Phun phủ bơ cacao',
        'Mousse hoa hồng',
        'Thạch vải & mứt mâm xôi',
        'Bạt bánh hạnh nhân',
        'Đế giòn'
    ],
    stock: 15,
  },
  {
    id: 'prod-002',
    slug: 'passion-fruit-breeze',
    name: 'BELOVED DARLING',
    subtitle: 'CHANH DÂY & DỪA',
    description: 'Một cuộc trốn chạy đến miền nhiệt đới trong mỗi miếng bánh, sống động và sảng khoái.',
    detailedDescription: {
      flavor: 'Kem chanh dây tươi sáng, xếp lớp với mousse dừa và đế dừa giòn. Một hương vị của mùa hè.',
      ingredients: 'Kem chanh dây, mousse dừa, bánh bông lan hạnh nhân, đế dừa giòn.',
      serving: 'Dành cho 6-8 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Không nên để bánh ở nhiệt độ phòng quá 30 phút (Bánh sẽ bị chảy). Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 16cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 10 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 620000,
     sizes: [
      { name: '16cm (6-8 người)', price: 620000 },
      { name: '18cm (8-10 người)', price: 750000 },
    ],
    imageIds: ['product-2', 'product-3', 'product-4'],
    collection: 'special-occasions',
    categorySlug: 'banh-sinh-nhat',
    flavorProfile: ['Chua thanh', 'Nhiệt đới', 'Sảng khoái'],
    structure: [
        'Phun phủ bơ cacao',
        'Mousse chanh dây',
        'Mousse dừa',
        'Bạt bánh hạnh nhân',
        'Đế dừa giòn'
    ],
    stock: 12,
  },
  {
    id: 'prod-003',
    slug: 'a-little-grace',
    name: 'A LITTLE GRACE',
    subtitle: 'MATCHA & YUZU',
    description: 'Sự kết hợp thanh lịch giữa vị trà matcha đất và vị cam yuzu.',
    detailedDescription: {
      flavor: 'Mousse matcha Uji đậm đà cân bằng với sữa đông yuzu chua thanh, trên nền bánh bông lan mè đen. Một trải nghiệm tựa thiền.',
      ingredients: 'Mousse matcha Uji, sữa đông yuzu, bánh joconde mè đen, sô cô la trắng.',
      serving: 'Dành cho 2-4 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Không nên để bánh ở nhiệt độ phòng quá 30 phút (Bánh sẽ bị chảy). Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 12cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 4 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 380000,
    imageIds: ['product-3', 'product-4', 'product-5'],
    collection: 'half-entremet',
    categorySlug: 'banh-ngot',
    flavorProfile: ['Đậm vị trà', 'Chua nhẹ', 'Thanh lịch'],
     structure: [
        'Phủ bột matcha',
        'Mousse matcha Uji',
        'Kem yuzu',
        'Bạt bánh mè đen',
        'Đế giòn'
    ],
    stock: 20,
  },
  {
    id: 'prod-004',
    slug: 'chocolate-hazelnut-dream',
    name: 'SUMMER CALLING',
    subtitle: 'SÔ CÔ LA & HẠT DẺ',
    description: 'Một món ăn xa hoa và sang trọng cho người thực sự yêu sô cô la.',
    detailedDescription: {
      flavor: 'Mousse sô cô la đen 66% mịn mượt, nhân praline hạt phỉ kem, và bánh bông lan sô cô la ẩm, tất cả trên một lớp đế feuilletine giòn.',
      ingredients: 'Mousse sô cô la đen, praline hạt phỉ, bánh bông lan sô cô la, đế feuilletine giòn.',
      serving: 'Dành cho 8-10 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Ngon nhất khi để ở nhiệt độ phòng 15 phút trước khi dùng. Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 18cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 10 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 700000,
    sizes: [
      { name: '18cm (8-10 người)', price: 700000 },
      { name: '20cm (10-12 người)', price: 850000 },
    ],
    imageIds: ['product-4', 'product-5', 'product-6'],
    collection: 'special-occasions',
    categorySlug: 'banh-sinh-nhat',
    flavorProfile: ['Đậm đà', 'Sang trọng', 'Giòn tan'],
     structure: [
        'Phủ sô cô la',
        'Mousse sô cô la đen',
        'Kem praline hạt dẻ',
        'Bạt bánh sô cô la',
        'Đế giòn feuilletine'
    ],
    stock: 8,
  },
  {
    id: 'prod-005',
    slug: 'strawberry-love',
    name: 'A GENTLE BLEND',
    subtitle: 'DÂU TÂY & VANI',
    description: 'Trái tim của dâu tây ngọt ngào và kem vani.',
    detailedDescription: {
      flavor: 'Mứt dâu tây tươi và kem mascarpone vani nhẹ trên bánh bông lan vani mềm. Đơn giản là đáng yêu.',
      ingredients: 'Mứt dâu tây, kem mascarpone vani, bánh bông lan vani, dâu tây tươi.',
      serving: 'Dành cho 6-8 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Ngon nhất khi dùng trong ngày mua do có trái cây tươi. Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 16cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 10 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 680000,
    imageIds: ['product-5', 'product-6', 'product-7'],
    collection: 'heart-shaped',
    categorySlug: 'banh-ngot',
     flavorProfile: ['Ngọt ngào', 'Kinh điển', 'Trái cây tươi'],
     structure: [
        'Trang trí dâu tươi',
        'Kem mascarpone vani',
        'Mứt dâu tây',
        'Bạt bánh vani',
        'Đế bánh quy'
    ],
    stock: 18,
  },
  {
    id: 'prod-006',
    slug: 'baby-mango-bliss',
    name: 'Baby Mango Bliss',
    subtitle: 'XOÀI & CHANH DÂY',
    description: 'Chiếc bánh nhỏ tràn ngập ánh nắng và hương vị xoài ngọt ngào.',
    detailedDescription: {
      flavor: 'Mousse xoài nhẹ với nhân thạch chanh dây. Kích thước hoàn hảo cho một khoảnh khắc hạnh phúc nhỏ.',
      ingredients: 'Mousse xoài, thạch chanh dây, bánh bông lan hạnh nhân.',
      serving: 'Dành cho 1-2 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Không nên để bánh ở nhiệt độ phòng quá 30 phút (Bánh sẽ bị chảy). Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 8cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 2 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 250000,
    imageIds: ['product-6', 'product-7', 'product-8'],
    collection: 'baby-collection',
    categorySlug: 'banh-man',
     flavorProfile: ['Nhiệt đới', 'Ngọt dịu', 'Dễ thương'],
     structure: [
        'Phun phủ màu vàng',
        'Mousse xoài',
        'Thạch chanh dây',
        'Bạt bánh hạnh nhân',
        'Đế giòn'
    ],
    stock: 30,
  },
  {
    id: 'prod-007',
    slug: 'raspberry-pistachio-half',
    name: 'Raspberry & Pistachio Half',
    subtitle: 'MÂM XÔI & HẠT DẺ CƯỜI',
    description: 'Sự kết hợp sống động của mâm xôi chua và hạt dẻ cười bùi.',
    detailedDescription: {
      flavor: 'Mousse hạt dẻ cười mịn màng với trái tim thạch mâm xôi chua, trên nền bánh dacquoise hạt dẻ cười tinh tế.',
      ingredients: 'Mousse hạt dẻ cười, thạch mâm xôi, bánh dacquoise hạt dẻ cười.',
      serving: 'Dành cho 2-4 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Màu sắc và hương vị ngon nhất trong ngày đầu tiên. Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 12cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 4 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 420000,
    imageIds: ['product-7', 'product-8', 'product-1'],
    collection: 'half-entremet',
    categorySlug: 'do-uong',
    flavorProfile: ['Bùi', 'Chua thanh', 'Độc đáo'],
    structure: [
        'Phủ men trắng',
        'Mousse hạt dẻ cười',
        'Thạch mâm xôi',
        'Bạt bánh hạt dẻ cười',
        'Đế giòn'
    ],
    stock: 5,
  },
  {
    id: 'prod-008',
    slug: 'summer-berry-cheesecake',
    name: 'Summer Berry Cheesecake',
    subtitle: 'CHEESECAKE & DÂU RỪNG',
    description: 'Phiên bản hiện đại của một món kinh điển, tràn ngập các loại quả mọng.',
    detailedDescription: {
      flavor: 'Kem cheesecake không nướng nhẹ nhàng được trang trí bằng một hỗn hợp các loại quả mọng mùa hè tươi trên đế bánh quy bơ.',
      ingredients: 'Phô mai kem, kem tươi, hỗn hợp quả mọng (dâu tây, việt quất, mâm xôi), đế bánh quy digestive.',
      serving: 'Dành cho 6-8 người ăn',
      storage: 'Luôn giữ bánh trong hộp kín & bảo quản trong ngăn mát tủ lạnh. Ngon nhất khi dùng trong vòng 24 giờ. Sử dụng trong vòng 03 ngày.',
      dimensions: 'Đường kính: 16cm | Chiều cao: 5cm',
      accessories: [
        '01 Chiếc nến sinh nhật',
        '01 Bộ đĩa và dĩa dành cho 10 người',
        '01 Dao cắt bánh'
      ]
    },
    price: 640000,
    imageIds: ['product-8', 'product-1', 'product-2'],
    collection: 'special-occasions',
    categorySlug: 'banh-khac',
    flavorProfile: ['Béo ngậy', 'Tươi mát', 'Kinh điển'],
    structure: [
        'Trang trí dâu rừng tươi',
        'Lớp cheesecake',
        'Đế bánh quy bơ',
        'N/A',
        'N/A'
    ],
    stock: 9,
  }
];

export const articles: Article[] = [
  {
    id: 'news-1',
    slug: 'our-founder-story',
    title: 'Hành Trình Ngọt Ngào Của Người Sáng Lập',
    excerpt: 'Từ một căn bếp nhỏ ở Bắc Ninh đến một thương hiệu bánh ngọt nổi tiếng, hãy đọc câu chuyện của người sáng lập của chúng tôi, Lan.',
    date: 'Ngày 20 tháng 5, 2024',
    category: 'Câu chuyện người sáng lập',
    imageId: 'blog-1',
    content: '<p>Câu chuyện của Vibary không bắt đầu từ một tiệm bánh lớn, mà trong một căn bếp nhỏ đầy nắng ở trung tâm Bắc Ninh. Người sáng lập của chúng tôi, Lan, đã khám phá ra niềm đam mê với bánh ngọt Pháp trong một năm học tập tại Paris. Cô bị mê hoặc bởi tính nghệ thuật, sự chính xác và sự cân bằng tinh tế của hương vị trong mỗi chiếc bánh entremet cô nếm. Khi trở về Việt Nam, cô mơ ước mang phép màu đó về quê hương, nhưng với một nét chấm phá độc đáo của Việt Nam.</p><p>Cô đã dành nhiều năm để hoàn thiện tay nghề, thử nghiệm với các loại trái cây địa phương theo mùa như vải, chanh dây, và xoài, và điều chỉnh độ ngọt để phù hợp với khẩu vị địa phương. Tầm nhìn của cô là tạo ra những chiếc bánh ngọt Pháp hiện đại vừa sang trọng vừa quen thuộc. Vibary là đỉnh cao của giấc mơ đó—một sự tôn vinh kỹ thuật, sự sáng tạo và những nguyên liệu tươi ngon nhất mà đất nước xinh đẹp của chúng ta mang lại.</p>'
  },
  {
    id: 'news-2',
    slug: 'behind-the-scenes-cake-creation',
    title: 'Hậu Trường: Tạo Ra Chiếc Bánh Hoàn Hảo',
    excerpt: 'Một cái nhìn thoáng qua về quy trình tỉ mỉ và niềm đam mê trong mỗi chiếc bánh của chúng tôi.',
    date: 'Ngày 15 tháng 5, 2024',
    category: 'Hậu trường',
    imageId: 'blog-2',
    content: '<p>Cần những gì để tạo ra một chiếc bánh Vibary? Nó bắt đầu từ cảm hứng—thường là từ một loại trái cây theo mùa hoặc một ký ức về một mùi hương đặc biệt. Các đầu bếp bánh của chúng tôi sau đó bắt đầu một quy trình tỉ mỉ gồm phác thảo, kết hợp hương vị và thử nghiệm. Mỗi lớp được chế tác và đông lạnh riêng biệt trước khi được lắp ráp thành một tổng thể hoàn hảo. Nét chấm phá cuối cùng, lớp men hay "glaçage", là một khoảnh khắc tập trung tuyệt đối, đòi hỏi một bàn tay vững vàng và nhiệt độ chính xác để đạt được độ bóng như gương đặc trưng. Đó là một công việc của tình yêu, một vũ điệu của khoa học và nghệ thuật mà chúng tôi tự hào chia sẻ với bạn.</p>'
  },
  {
    id: 'news-3',
    slug: 'shopping-guide-for-introverts',
    title: 'Hướng Dẫn Mua Sắm Cho Người Hướng Nội',
    excerpt: 'Ghét gọi điện thoại? Chúng tôi hiểu. Đây là cách đặt chiếc bánh hoàn hảo của bạn, một cách yên bình và trực tuyến.',
    date: 'Ngày 10 tháng 5, 2024',
    category: 'Hướng dẫn mua sắm',
    imageId: 'blog-3',
    content: '<p>Chúng tôi tin rằng niềm vui thưởng thức một chiếc bánh đẹp nên dành cho tất cả mọi người, ngay cả những người thích sự yên tĩnh hơn là trò chuyện. Đó là lý do tại sao chúng tôi đã thiết kế trang web của mình để trở thành một trải nghiệm yên bình và liền mạch. Bạn có thể duyệt qua toàn bộ bộ sưu tập của chúng tôi, tìm thấy sự kết hợp hoàn hảo của bạn với bài trắc nghiệm hương vị của chúng tôi và đặt hàng mà không cần phải nhấc điện thoại. Chỉ cần chọn bánh của bạn, chọn thời gian giao hàng và để chúng tôi lo phần còn lại. Đó là khoảnh khắc nuông chiều của bạn, theo cách của bạn.</p>'
  },
];

export const faqs: FaqItem[] = [
    {
        id: 'faq-1',
        question: 'Thời gian đặt bánh trước tối thiểu là bao lâu?',
        answer: 'Để đảm bảo chất lượng tốt nhất, bạn vui lòng đặt bánh trước ít nhất 24 giờ. Đối với các đơn hàng đặc biệt hoặc số lượng lớn, chúng tôi khuyến khích bạn đặt trước 48-72 giờ.'
    },
    {
        id: 'faq-2',
        question: 'Phí giao hàng của VIBARY được tính như thế nào?',
        answer: 'Phí giao hàng được tính dựa trên khoảng cách từ bếp của chúng tôi đến địa chỉ của bạn. Bạn có thể xem phí giao hàng chính xác sau khi nhập địa chỉ ở trang thanh toán.'
    },
    {
        id: 'faq-3',
        question: 'Tôi có thể đến mua bánh trực tiếp tại xưởng của VIBARY không?',
        answer: 'Hiện tại, VIBARY hoạt động theo mô hình bếp trung tâm và chỉ bán hàng trực tuyến để đảm bảo chất lượng sản phẩm tốt nhất khi đến tay khách hàng. Chúng tôi không có cửa hàng bán lẻ trực tiếp.'
    },
    {
        id: 'faq-4',
        question: 'VIBARY có các hình thức thanh toán nào?',
        answer: 'Chúng tôi chấp nhận thanh toán qua Momo, ZaloPay, chuyển khoản ngân hàng và thanh toán tiền mặt khi nhận hàng (COD).'
    },
    {
        id: 'faq-5',
        question: 'Tôi có thể chọn giờ giao hàng không?',
        answer: 'Có, bạn có thể chọn ngày và khung giờ giao hàng mong muốn tại trang thanh toán. Chúng tôi sẽ cố gắng hết sức để giao hàng trong khoảng thời gian bạn đã chọn.'
    },
    {
        id: 'faq-6',
        question: 'Nếu bánh giao đến bị xô lệch/ hình thức không còn nguyên vẹn do lỗi của shipper thì tôi phải làm thế nào?',
        answer: 'Chúng tôi rất tiếc về trải nghiệm này. Vui lòng kiểm tra kỹ bánh khi nhận hàng. Nếu có bất kỳ vấn đề gì về hình thức, bạn có quyền từ chối nhận hàng và liên hệ ngay với hotline của chúng tôi để được hỗ trợ giải quyết và sắp xếp một đơn hàng mới.'
    },
     {
        id: 'faq-7',
        question: 'Sau khi tôi nhận bánh & shipper đã ra về thì mới phát hiện bánh bị xô lệch/ hình thức không nguyên vẹn thì tôi phải làm thế nào?',
        answer: 'VIBARY rất tiếc nhưng chúng tôi không thể giải quyết các khiếu nại về hình thức bánh sau khi bạn đã nhận hàng và shipper đã rời đi. Việc đồng kiểm tra sản phẩm khi nhận là rất quan trọng. Mong bạn thông cảm.'
    },
     {
        id: 'faq-8',
        question: 'Tôi có thể đặt bánh theo mẫu riêng mà tôi muốn được không?',
        answer: 'Do đặc thù của dòng bánh Entremet, chúng tôi hiện không nhận làm bánh theo mẫu riêng. Tuy nhiên, chúng tôi có thể hỗ trợ viết lời chúc theo yêu cầu trên một tấm thẻ sô cô la.'
    },
     {
        id: 'faq-9',
        question: 'Tôi muốn di chuyển bánh từ nơi này đến nơi khác bằng xe máy/ ô tô thì có sợ bánh bị chảy không?',
        answer: 'Bánh của chúng tôi được giữ lạnh để đảm bảo kết cấu. Nếu bạn cần di chuyển, hãy đảm bảo bánh được giữ trong môi trường mát (tốt nhất là có đá khô hoặc trong thùng giữ nhiệt) và hạn chế di chuyển dưới trời nắng gắt quá 15-20 phút để tránh bánh bị chảy.'
    }
];
