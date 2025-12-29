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
    categorySlug: 'banh-sinh-nhat',
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
    categorySlug: 'banh-sinh-nhat',
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
    categorySlug: 'banh-ngot',
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
    categorySlug: 'banh-sinh-nhat',
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
    categorySlug: 'banh-ngot',
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
    categorySlug: 'banh-man',
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
    categorySlug: 'do-uong',
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
    categorySlug: 'banh-khac',
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
        question: 'Làm cách nào để đặt hàng?',
        answer: 'Bạn có thể dễ dàng đặt hàng qua trang web của chúng tôi. Chỉ cần duyệt qua các sản phẩm, thêm bánh bạn muốn vào giỏ hàng và tiến hành thanh toán. Bạn sẽ được yêu cầu cung cấp thông tin chi tiết giao hàng và thông tin thanh toán.'
    },
    {
        id: 'faq-2',
        question: 'Khu vực giao hàng của bạn ở Bắc Ninh là gì?',
        answer: 'Chúng tôi hiện đang giao hàng tận nơi đến tất cả các quận nội thành Bắc Ninh. Đối với các huyện ngoại thành, vui lòng liên hệ hotline của chúng tôi để kiểm tra tình trạng sẵn có và các khoản phí phụ thêm có thể có.'
    },
    {
        id: 'faq-3',
        question: 'Tôi nên bảo quản bánh Entremet như thế nào?',
        answer: 'Bánh Entremet của chúng tôi được bảo quản tốt nhất trong tủ lạnh ở nhiệt độ 2-6°C. Để có hương vị và kết cấu tối ưu, chúng tôi khuyên bạn nên dùng trong vòng 2 ngày kể từ ngày mua. Vui lòng tham khảo trang sản phẩm cụ thể để biết bất kỳ mẹo bảo quản độc đáo nào.'
    },
    {
        id: 'faq-4',
        question: 'Tôi có thể tùy chỉnh bánh không?',
        answer: 'Do sự phức tạp của công thức Entremet của chúng tôi, chúng tôi không cung cấp tùy chỉnh hương vị. Tuy nhiên, chúng tôi có thể thêm các thông điệp đơn giản trên một thẻ sô cô la. Vui lòng ghi rõ thông điệp của bạn trong ghi chú đơn hàng khi thanh toán.'
    },
    {
        id: 'faq-5',
        question: 'Bạn chấp nhận những phương thức thanh toán nào?',
        answer: 'Chúng tôi chấp nhận nhiều phương thức thanh toán khác nhau để thuận tiện cho bạn, bao gồm Momo, ZaloPay, chuyển khoản ngân hàng và Giao hàng nhận tiền (COD).'
    },
    {
        id: 'faq-6',
        question: 'Tôi bị dị ứng. Làm cách nào để kiểm tra thành phần?',
        answer: 'Mỗi trang sản phẩm đều có mô tả chi tiết bao gồm danh sách các thành phần chính. Nếu bạn bị dị ứng cụ thể, vui lòng liên hệ hotline của chúng tôi trước khi đặt hàng để chúng tôi có thể tư vấn cho bạn về các lựa chọn tốt nhất.'
    },
];
