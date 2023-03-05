const foods = [
  {
    id: '1',
    name: 'Pizza hải sản',
    ingredients: 'Seafood Pizza',
    price: '189',
    image: require('../assets/flashList/meatPizza.png'),
    title:
      'Ngon mê ly với món pizza hải sản đầy ụ nhân này. Mùi phô mai nướng lên hòa lẫn với mùi thơm của hải sản, các loại rau củ sẽ khiến bạn phải phát thèm. Đế bánh mỏng, nóng giòn, kết hợp với phần sốt cà chua đậm đà, tôm và mực tươi ngon, chắc thịt. Thêm vào đó một chút giòn giòn, ngọt ngọt của ớt chuông. Tất cả hải sản và rau củ ngập trong phô mai béo ngậy, tan chảy cực thích. Bạn sẽ không cưỡng lại sức hấp dẫn của món bánh này đâu.',
  },
  {
    id: '2',
    name: 'Pizza mì tôm',
    ingredients: 'Noodle Pizza',
    price: '139',
    image: require('../assets/flashList/cheesePizza.png'),
    title:
      'Một chiếc pizza "đậm chất sinh viên" đó chính là pizza mì gói. Chỉ với những nguyên liệu cực đơn giản là bạn đã có thể làm ngay món bánh thơm ngon này rồi. Đế bánh được làm từ mì và trứng nên có độ giòn giòn, mềm mềm, thêm một lớp phô mai béo ngậy bên trên. Cắn một miếng bạn sẽ cảm nhận được độ béo, thơm, vừa vị của món pizza độc lạ này. Đây sẽ là lựa chọn tuyệt vời cho ngày lười nấu nướng cầu kỳ của bạn.',
  },
  {
    id: '3',
    name: 'Burger gà',
    ingredients: 'Chicken Burger',
    price: '79',
    image: require('../assets/flashList/chickenBurger.png'),
    title:
      'Một chiếc pizza sốt pesto sẽ là món ăn tuyệt vời lắp đầy cái bụng đói của bạn. Bánh được nướng lên cùng với sốt pesto thơm nức mùi húng tây cực kỳ cuốn hút. Vỏ bánh bên trong xốp mềm, bên ngoài giòn tan, lớp nhân bánh bên trên là sự kết hợp hòan hảo giữa sốt pesto lạ miệng, phô mai béo ngậy, thịt tôm tươi ngọt, ớt chuông giòn giòn, đúng là ngon hết ý.',
  },
  {
    id: '4',
    name: 'Sushi Makizushi',
    ingredients: 'Salmon Meat',
    price: '269',
    image: require('../assets/flashList/sushiMakizushi.png'),
    title:
      'Makizushi là một loại cuộn sushi Nhật Bản chứa đầy các chất hàn khác nhau. Thuật ngữ makizushi đề cập đến thực tế là sushi được cuộn: maki có nghĩa là "cuộn" và zushi là phiên bản liên hợp của từ "sushi". Makizushi là loại sushi nổi tiếng nhất bên ngoài Nhật Bản. Makizushi cũng được gọi là nori maki hoặc norimaki bởi vì cơm sushi và các chất hàn đều được gói lại hoặc cuộn bên trong rong biển sấy khô.',
  },
  {
    id: '5',
    name: ' Kimbap Hàn Quốc',
    ingredients: ' Korea Kimbap',
    price: '69',
    image: require('../assets/flashList/onboard.png'),
    title:
      'Mang hương vị của Hawaii về căn bếp nhà bạn với chiếc pizza Hawaii thơm nức mũi. Màu đỏ của sốt cà chua điểm thêm chút xanh của các loại rau nhìn cực bắt mắt. Sốt cà chua khi nướng lên có mùi hương đặc trưng, ngay lặp tức khiến bạn có cảm giác thòm thèm. Phần bánh bên ngoài giòn, bên trong mềm thơm, vị chua ngọt đậm đà của nước sốt kích thích vị giác vô cùng. Đặc biệt phần viền bánh được cuộn với phô mai Mozzarella kéo sợi, béo thơm, đúng là thơm ngon khó cưỡng.',
  },
  {
    id: '6',
    name: 'Pizza phô mai',
    ingredients: 'Cheese Pizza',
    price: '209',
    image: require('../assets/flashList/cheesePizza.png'),
    title:
      'Một chiếc pizza bắp phô mai vàng tươi, thơm ngây ngất chính là "chân ái" của các tín đồ phô mai đó. Chỉ với những nguyên liệu dễ tìm, cách làm siêu đơn giản là bạn đã có ngay chiếc pizza cực hấp dẫn này rồi. Những hạt bắp Mỹ vàng ươm, giòn ngọt ngập trong phô mai béo ngậy. Cắn một miếng bạn có thể cảm nhận được ngay độ béo và thơm của phô mai. Kết hợp với đế bánh giòn tan, sốt cà chua ngọt, đúng là khiến cho người ta phải chết mê với món này.',
  },
  {
    id: '7',
    name: 'Pizza sandwich',
    ingredients: 'Sandwich Pizza',
    price: '169',
    image: require('../assets/flashList/chickenBurger.png'),
    title:
      'Biến tấu chiếc bánh sandwich thường ngày của bạn thành chiếc pizza nóng hổi, thơm lừng, cực hấp dẫn thôi nào. Lớp vỏ bánh sandwich khi được nướng lên cực giòn tan, thêm lớp phô mai tan chảy bên trên, mới chỉ nhìn thôi là đã thấy muốn ăn rồi. Pizza sandwich sẽ là bữa sáng tuyệt vời cho bạn, bánh thơm kết hợp với phô mai béo ngậy, rau củ giòn ngọt, thêm một chút xúc xích đậm đà, giúp bạn nạp nhanh và đủ năng lượng để khởi động ngày mới.',
  },
  {
    id: '8',
    name: 'Pizza khoai lang',
    ingredients: 'Potato Pizza ',
    price: '199',
    image: require('../assets/flashList/sushiMakizushi.png'),
    title:
      'Sự kết hợp độc đáo của khoai lang và phô mai đã cho ra món bánh pizza khoai lang vô cùng độc đáo, mới lạ này. Hương thơm từ khoai lang khi nướng lên quyện cùng với các loại rau củ vô cùng hấp dẫn, khiến bạn thấy thòm thèm ngay lập tức. Đế bánh được làm từ khoai lang nấu chín, nghiền nhuyễn cùng với sữa tươi nên khi ăn bạn sẽ cảm nhận được độ bùi bùi, ngọt ngọt và béo thơm. Thêm nữa phần đế bánh cũng mềm mịn hơn các loại pizza khác, rất dễ ăn.',
  },
  {
    id: '9',
    name: 'Pizza hải sản',
    ingredients: 'Seafood Pizza',
    price: '189',
    image: require('../assets/flashList/onboard.png'),
    title:
      'Ngon mê ly với món pizza hải sản đầy ụ nhân này. Mùi phô mai nướng lên hòa lẫn với mùi thơm của hải sản, các loại rau củ sẽ khiến bạn phải phát thèm. Đế bánh mỏng, nóng giòn, kết hợp với phần sốt cà chua đậm đà, tôm và mực tươi ngon, chắc thịt. Thêm vào đó một chút giòn giòn, ngọt ngọt của ớt chuông. Tất cả hải sản và rau củ ngập trong phô mai béo ngậy, tan chảy cực thích. Bạn sẽ không cưỡng lại sức hấp dẫn của món bánh này đâu.',
  },
  {
    id: '10',
    name: 'Pizza mì tôm',
    ingredients: 'Noodle Pizza',
    price: '139',
    image: require('../assets/flashList/cheesePizza.png'),
    title:
      'Một chiếc pizza "đậm chất sinh viên" đó chính là pizza mì gói. Chỉ với những nguyên liệu cực đơn giản là bạn đã có thể làm ngay món bánh thơm ngon này rồi. Đế bánh được làm từ mì và trứng nên có độ giòn giòn, mềm mềm, thêm một lớp phô mai béo ngậy bên trên. Cắn một miếng bạn sẽ cảm nhận được độ béo, thơm, vừa vị của món pizza độc lạ này. Đây sẽ là lựa chọn tuyệt vời cho ngày lười nấu nướng cầu kỳ của bạn.',
  },
  {
    id: '11',
    name: 'Burger gà',
    ingredients: 'Chicken Burger',
    price: '79',
    image: require('../assets/flashList/chickenBurger.png'),
    title:
      'Một chiếc pizza sốt pesto sẽ là món ăn tuyệt vời lắp đầy cái bụng đói của bạn. Bánh được nướng lên cùng với sốt pesto thơm nức mùi húng tây cực kỳ cuốn hút. Vỏ bánh bên trong xốp mềm, bên ngoài giòn tan, lớp nhân bánh bên trên là sự kết hợp hòan hảo giữa sốt pesto lạ miệng, phô mai béo ngậy, thịt tôm tươi ngọt, ớt chuông giòn giòn, đúng là ngon hết ý.',
  },
  {
    id: '12',
    name: 'Sushi Makizushi',
    ingredients: 'Salmon Meat',
    price: '269',
    image: require('../assets/flashList/sushiMakizushi.png'),
    title:
      'Makizushi là một loại cuộn sushi Nhật Bản chứa đầy các chất hàn khác nhau. Thuật ngữ makizushi đề cập đến thực tế là sushi được cuộn: maki có nghĩa là "cuộn" và zushi là phiên bản liên hợp của từ "sushi". Makizushi là loại sushi nổi tiếng nhất bên ngoài Nhật Bản. Makizushi cũng được gọi là nori maki hoặc norimaki bởi vì cơm sushi và các chất hàn đều được gói lại hoặc cuộn bên trong rong biển sấy khô.',
  },
  {
    id: '13',
    name: 'Pizza Hawaii',
    ingredients: 'Pizza Hawaii',
    price: '179',
    image: require('../assets/flashList/meatPizza.png'),
    title:
      'Mang hương vị của Hawaii về căn bếp nhà bạn với chiếc pizza Hawaii thơm nức mũi. Màu đỏ của sốt cà chua điểm thêm chút xanh của các loại rau nhìn cực bắt mắt. Sốt cà chua khi nướng lên có mùi hương đặc trưng, ngay lặp tức khiến bạn có cảm giác thòm thèm. Phần bánh bên ngoài giòn, bên trong mềm thơm, vị chua ngọt đậm đà của nước sốt kích thích vị giác vô cùng. Đặc biệt phần viền bánh được cuộn với phô mai Mozzarella kéo sợi, béo thơm, đúng là thơm ngon khó cưỡng.',
  },
  {
    id: '14',
    name: 'Pizza phô mai',
    ingredients: 'Cheese Pizza',
    price: '209',
    image: require('../assets/flashList/cheesePizza.png'),
    title:
      'Một chiếc pizza bắp phô mai vàng tươi, thơm ngây ngất chính là "chân ái" của các tín đồ phô mai đó. Chỉ với những nguyên liệu dễ tìm, cách làm siêu đơn giản là bạn đã có ngay chiếc pizza cực hấp dẫn này rồi. Những hạt bắp Mỹ vàng ươm, giòn ngọt ngập trong phô mai béo ngậy. Cắn một miếng bạn có thể cảm nhận được ngay độ béo và thơm của phô mai. Kết hợp với đế bánh giòn tan, sốt cà chua ngọt, đúng là khiến cho người ta phải chết mê với món này.',
  },
  {
    id: '15',
    name: 'Pizza sandwich',
    ingredients: 'Sandwich Pizza',
    price: '169',
    image: require('../assets/flashList/chickenBurger.png'),
    title:
      'Biến tấu chiếc bánh sandwich thường ngày của bạn thành chiếc pizza nóng hổi, thơm lừng, cực hấp dẫn thôi nào. Lớp vỏ bánh sandwich khi được nướng lên cực giòn tan, thêm lớp phô mai tan chảy bên trên, mới chỉ nhìn thôi là đã thấy muốn ăn rồi. Pizza sandwich sẽ là bữa sáng tuyệt vời cho bạn, bánh thơm kết hợp với phô mai béo ngậy, rau củ giòn ngọt, thêm một chút xúc xích đậm đà, giúp bạn nạp nhanh và đủ năng lượng để khởi động ngày mới.',
  },
  {
    id: '16',
    name: 'Pizza khoai lang',
    ingredients: 'Potato Pizza ',
    price: '199',
    image: require('../assets/flashList/sushiMakizushi.png'),
    title:
      'Sự kết hợp độc đáo của khoai lang và phô mai đã cho ra món bánh pizza khoai lang vô cùng độc đáo, mới lạ này. Hương thơm từ khoai lang khi nướng lên quyện cùng với các loại rau củ vô cùng hấp dẫn, khiến bạn thấy thòm thèm ngay lập tức. Đế bánh được làm từ khoai lang nấu chín, nghiền nhuyễn cùng với sữa tươi nên khi ăn bạn sẽ cảm nhận được độ bùi bùi, ngọt ngọt và béo thơm. Thêm nữa phần đế bánh cũng mềm mịn hơn các loại pizza khác, rất dễ ăn.',
  },
];

export default foods;
