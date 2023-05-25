const listTotal = [
  {
    id: '1',
    name: 'Pizza hải sản',
    ingredients: 'Seafood Pizza',
    price: 189,
    image: require('../assets/foodList/pizza/1.jpeg'),
    title:
      'Ngon mê ly với món pizza hải sản đầy ụ nhân này. Mùi phô mai nướng lên hòa lẫn với mùi thơm của hải sản, các loại rau củ sẽ khiến bạn phải phát thèm. Đế bánh mỏng, nóng giòn, kết hợp với phần sốt cà chua đậm đà, tôm và mực tươi ngon, chắc thịt. Thêm vào đó một chút giòn giòn, ngọt ngọt của ớt chuông. Tất cả hải sản và rau củ ngập trong phô mai béo ngậy, tan chảy cực thích. Bạn sẽ không cưỡng lại sức hấp dẫn của món bánh này đâu.',
  },
  {
    id: '2',
    name: 'Pizza Hawaii',
    ingredients: 'Hawaii Pizza',
    price: 139,
    image: require('../assets/foodList/pizza/2.jpeg'),
    title:
      'Mang hương vị của Hawaii về căn bếp nhà bạn với chiếc pizza Hawaii thơm nức mũi. Màu đỏ của sốt cà chua điểm thêm chút xanh của các loại rau nhìn cực bắt mắt. Sốt cà chua khi nướng lên có mùi hương đặc trưng, ngay lặp tức khiến bạn có cảm giác thòm thèm.',
  },
  {
    id: '3',
    name: 'Pizza phô mai',
    ingredients: 'Cheese pizza',
    price: 79,
    image: require('../assets/foodList/pizza/3.jpeg'),
    title:
      'Một chiếc pizza bắp phô mai vàng tươi, thơm ngây ngất chính là "chân ái" của các tín đồ phô mai đó. Chỉ với những nguyên liệu dễ tìm, cách làm siêu đơn giản là bạn đã có ngay chiếc pizza cực hấp dẫn này rồi.',
  },
  {
    id: '4',
    name: 'Pizza khoai lang',
    ingredients: 'Potato pizza',
    price: 169,
    image: require('../assets/foodList/pizza/4.jpg'),
    title:
      'Sự kết hợp độc đáo của khoai lang và phô mai đã cho ra món bánh pizza khoai lang vô cùng độc đáo, mới lạ này. Hương thơm từ khoai lang khi nướng lên quyện cùng với các loại rau củ vô cùng hấp dẫn, khiến bạn thấy thòm thèm ngay lập tức.',
  },
  {
    id: '5',
    name: 'Pizza mì tôm',
    ingredients: ' Noodle pizza',
    price: 139,
    image: require('../assets/foodList/pizza/5.jpeg'),
    title:
      'Một chiếc pizza "đậm chất sinh viên" đó chính là pizza mì gói. Chỉ với những nguyên liệu cực đơn giản là bạn đã có thể làm ngay món bánh thơm ngon này rồi. Đế bánh được làm từ mì và trứng nên có độ giòn giòn, mềm mềm, thêm một lớp phô mai béo ngậy bên trên. Cắn một miếng bạn sẽ cảm nhận được độ béo, thơm, vừa vị của món pizza độc lạ này. Đây sẽ là lựa chọn tuyệt vời cho ngày lười nấu nướng cầu kỳ của bạn.',
  },
  {
    id: '6',
    name: 'Pizza sandwich',
    ingredients: 'Sandwich pizza',
    price: 99,
    image: require('../assets/foodList/pizza/6.jpeg'),
    title:
      'Biến tấu chiếc bánh sandwich thường ngày của bạn thành chiếc pizza nóng hổi, thơm lừng, cực hấp dẫn thôi nào. Lớp vỏ bánh sandwich khi được nướng lên cực giòn tan, thêm lớp phô mai tan chảy bên trên, mới chỉ nhìn thôi là đã thấy muốn ăn rồi. Pizza sandwich sẽ là bữa sáng tuyệt vời cho bạn, bánh thơm kết hợp với phô mai béo ngậy, rau củ giòn ngọt, thêm một chút xúc xích đậm đà, giúp bạn nạp nhanh và đủ năng lượng để khởi động ngày mới.',
  },
  {
    id: '7',
    name: 'Pizza khoai tây',
    ingredients: 'Potato Pizza',
    price: 129,
    image: require('../assets/foodList/pizza/7.jpeg'),
    title:
      'Pizza thơm ngon mà không cần đến bột thì chỉ có có thể là pizza khoai tây. Sự kết hợp của khoai tây bùi bùi và trứng béo ngậy đã cho bạn phần đế bánh cực kỳ thơm ngon, lạ miệng. Càng cuốn hút hơn với lớp thịt nguội ngập trong phô mai nóng hổi, quyện thêm sốt cà chua đậm đà. Thử một miếng bánh bạn sẽ cảm nhận được hương vị độc đáo, không gì sánh kịp của món bánh này đó.',
  },
  {
    id: '8',
    name: 'Pizza nguyên cám',
    ingredients: 'Bran Pizza ',
    price: 149,
    image: require('../assets/foodList/pizza/8.jpeg'),
    title:
      'Một chiếc pizza nguyên cám thơm ngon, bổ dưỡng sẽ là lựa chọn hợp lý cho bạn trong lúc này. Phần bánh thơm nức mũi, nghi ngút khói, kích thích mọi giác quan của bạn. Đế bánh bên ngoài giòn tan, bên trong dai dai, mềm mềm, khi ăn không hề có cảm giác bị ngán. Thêm một lớp nhân đầy ụ bên trên, phô mai béo ngậy, thịt gà mềm, thấm gia vị, sốt cà chua đậm đà, đúng là ngon khó cưỡng.',
  },
  {
    id: '9',
    name: 'Pizza bơ tỏi',
    ingredients: 'Garlic pizza',
    price: 159,
    image: require('../assets/foodList/pizza/9.jpeg'),
    title:
      'Đối thủ nặng ký của món bánh mì bơ tỏi, đang gây bão trên các trang mạng xã hội hiện nay chính là pizza bơ tỏi kem phô mai này đây. Mùi thơm đặc trưng của món bánh này sẽ làm bạn cảm thấy thòm thèm ngay. Phần bánh bên ngoài vàng giòn, bên trong mềm xốp. Phần kem bơ tỏi phô mai bên trên vừa thơm, vừa béo, ăn kèm với phần đế bánh đúng là ngon miễn chê.',
  },
  {
    id: '10',
    name: 'Pizza xúc xích',
    ingredients: 'Sausage Pizza',
    price: 169,
    image: require('../assets/foodList/pizza/10.jpeg'),
    title:
      'Những cái bánh pizza cuộn nhân phô mai xúc xích vàng giòn, thơm nức, bé bé, xinh xinh liệu có khiến bạn cảm thấy muốn ăn ngay. Lớp vỏ bánh giòn tan, ráo dầu nên không hề bị ngấy. Phần nhân xúc xích phô mai bên trong thì ngon miễn chê. Xúc xích đậm đà, ớt chuông giòn tan, phô mai kéo sợi, cắn một miếng là ngập nhân trong miệng. Đảm bảo cả nhà bạn ai cũng thích mê những chiếc bánh này.',
  },
  {
    id: '11',
    name: 'Pizza pesto',
    ingredients: 'Pesto Burger',
    price: 109,
    image: require('../assets/foodList/pizza/11.jpeg'),
    title:
      'Một chiếc pizza sốt pesto sẽ là món ăn tuyệt vời lắp đầy cái bụng đói của bạn. Bánh được nướng lên cùng với sốt pesto thơm nức mùi húng tây cực kỳ cuốn hút. Vỏ bánh bên trong xốp mềm, bên ngoài giòn tan, lớp nhân bánh bên trên là sự kết hợp hòan hảo giữa sốt pesto lạ miệng, phô mai béo ngậy, thịt tôm tươi ngọt, ớt chuông giòn giòn, đúng là ngon hết ý.',
  },
  {
    id: '12',
    name: 'Pizza cơm nguội',
    ingredients: 'Rice Pizza',
    price: 129,
    image: require('../assets/foodList/pizza/12.jpeg'),
    title:
      'Thay vì làm pizza với đế bánh truyền thống sao bạn không thử biến tấu một chút với đế bánh từ cơm nguội. Tận dụng những nguyên liệu sẵn có trong căn bếp của bạn như hành tây, trứng, xúc xích,... là bạn đã có ngay chiếc pizza ngon lành rồi. Đế bánh là từ cơm được trộn đều với trứng, sau đó mang đi chiên nên vừa có độ giòn, vừa có vị béo cực thích. Thêm một chút sốt cà chua đậm đà, vừa vị, kết hợp với phô mai kéo sợi, xúc xích, hành hoặc nấm càng làm cho món ăn trở nên hấp dẫn, khó mà cưỡng lại.',
  },
  {
    id: '13',
    name: 'Pizza gà',
    ingredients: 'Chicken pizza',
    price: 179,
    image: require('../assets/foodList/pizza/13.jpeg'),
    title:
      'Càng ăn, càng nghiện với món pizza gà phô mai cực kỳ thơm ngon, hấp dẫn này. Đế bánh giòn giòn, nóng hổi kết hợp với sốt cà chua đặc trưng của pizza làm cho chiếc bánh trở nên đậm đà, cuốn hút hơn. Cắn một miếng bánh, bạn sẽ lặp tức cảm ngận được hương vị của sốt cà chua ngọt, phô mai béo ngậy, thịt gà mềm, vừa vị, xúc xích, các loại rau củ tươi ngon ngập trong miệng. Đây là hương vị sẽ làm cho bạn chết mê.',
  },
  {
    id: '14',
    name: 'Pizza keto',
    ingredients: 'Keto pizza',
    price: 205,
    image: require('../assets/foodList/pizza/14.jpeg'),

    title:
      'Pizza keto với đế bánh có màu xanh cực bắt mắt sẽ khiến bạn ăn không ngừng. Được làm từ bông cải xanh xay nhuyễn nên khi ăn bạn sẽ cảm nhận được độ tươi ngon, thanh mát. Phần nhân bánh từ thịt nguội và phô mai thơm lừng, béo ngậy. Càng đậm đà hơn khi có sự kết hợp của sốt cà chua. Những cô nàng đang giảm cân mà thèm ăn pizza thì làm ngay món pizza keto này nhé.',
  },
  {
    id: '15',
    name: 'Pizza chay',
    ingredients: 'Vegetarian Pizza',
    price: 189,
    image: require('../assets/foodList/pizza/15.jpeg'),

    title:
      'Món pizza chay thơm ngon, chất lượng thượng hạng, không thua kém bất kỳ loại pizza nào ở nhà hàng, bạn đã thử chưa? Hương thơm từ phô mai và các loại nguyên liệu khác sẽ đánh thức mọi giác quan của bạn. Vỏ bánh được nướng vàng thơm, giòn rụm. Kết hợp ăn kèm cùng với phần nhân bánh chua chua, ngọt ngọt, ngập tràn phô mai béo ngậy. Bạn chắc chắn sẽ bị nghiện món ăn này ngay từ lần đầu tiên nếm thử đó.',
  },
  {
    id: '16',
    name: 'Pizza bò băm',
    ingredients: 'Beef Pizza',
    price: 189,
    image: require('../assets/foodList/pizza/16.jpeg'),

    title:
      'Món pizza chay thơm ngon, chất lượng thượng hạng, không thua kém bất kỳ loại pizza nào ở nhà hàng, bạn đã thử chưa? Hương thơm từ phô mai và các loại nguyên liệu khác sẽ đánh thức mọi giác quan của bạn. Vỏ bánh được nướng vàng thơm, giòn rụm. Kết hợp ăn kèm cùng với phần nhân bánh chua chua, ngọt ngọt, ngập tràn phô mai béo ngậy. Bạn chắc chắn sẽ bị nghiện món ăn này ngay từ lần đầu tiên nếm thử đó.',
  },

  {
    id: '17',
    name: 'Burger Cá hồi',
    ingredients: 'Salmon burger',
    price: 59,
    image: require('../assets/foodList/burger/1.jpeg'),
    title:
      'Ngon mê ly với món pizza hải sản đầy ụ nhân này. Mùi phô mai nướng lên hòa lẫn với mùi thơm của hải sản, các loại rau củ sẽ khiến bạn phải phát thèm. Đế bánh mỏng, nóng giòn, kết hợp với phần sốt cà chua đậm đà, tôm và mực tươi ngon, chắc thịt. Thêm vào đó một chút giòn giòn, ngọt ngọt của ớt chuông. Tất cả hải sản và rau củ ngập trong phô mai béo ngậy, tan chảy cực thích. Bạn sẽ không cưỡng lại sức hấp dẫn của món bánh này đâu.',
  },
  {
    id: '18',
    name: 'Burger Bò phô mai',
    ingredients: 'Cheese burger',
    price: 59,
    image: require('../assets/foodList/burger/2.jpeg'),
    title:
      'Một chiếc pizza "đậm chất sinh viên" đó chính là pizza mì gói. Chỉ với những nguyên liệu cực đơn giản là bạn đã có thể làm ngay món bánh thơm ngon này rồi. Đế bánh được làm từ mì và trứng nên có độ giòn giòn, mềm mềm, thêm một lớp phô mai béo ngậy bên trên. Cắn một miếng bạn sẽ cảm nhận được độ béo, thơm, vừa vị của món pizza độc lạ này. Đây sẽ là lựa chọn tuyệt vời cho ngày lười nấu nướng cầu kỳ của bạn.',
  },
  {
    id: '19',
    name: 'Burger WHOPPER',
    ingredients: 'WHOPPER Burger',
    price: 51,
    image: require('../assets/foodList/burger/3.jpeg'),
    title:
      'Một chiếc pizza sốt pesto sẽ là món ăn tuyệt vời lắp đầy cái bụng đói của bạn. Bánh được nướng lên cùng với sốt pesto thơm nức mùi húng tây cực kỳ cuốn hút. Vỏ bánh bên trong xốp mềm, bên ngoài giòn tan, lớp nhân bánh bên trên là sự kết hợp hòan hảo giữa sốt pesto lạ miệng, phô mai béo ngậy, thịt tôm tươi ngọt, ớt chuông giòn giòn, đúng là ngon hết ý.',
  },
  {
    id: '20',
    name: 'Burger Cá rán',
    ingredients: 'Fish fry burger',
    price: 46,
    image: require('../assets/foodList/burger/4.jpeg'),
    title:
      'Makizushi là một loại cuộn sushi Nhật Bản chứa đầy các chất hàn khác nhau. Thuật ngữ makizushi đề cập đến thực tế là sushi được cuộn: maki có nghĩa là "cuộn" và zushi là phiên bản liên hợp của từ "sushi". Makizushi là loại sushi nổi tiếng nhất bên ngoài Nhật Bản. Makizushi cũng được gọi là nori maki hoặc norimaki bởi vì cơm sushi và các chất hàn đều được gói lại hoặc cuộn bên trong rong biển sấy khô.',
  },
  {
    id: '21',
    name: ' Burger Bò Hành',
    ingredients: ' Onion burger',
    price: 51,
    image: require('../assets/foodList/burger/5.jpeg'),
    title:
      'Kimbap hay còn gọi là gimbap là tên gọi của món cơm gói trong lá rong biển (kim có nghĩa là rong biển, bap là cơm). Người Hàn thường làm kimbap để mang đi ăn trong những buổi dã ngoại hoặc các sự kiện ngoài trời, hoặc là trong các bữa ăn trưa nhẹ. Kimbap hay được ăn cùng với củ cải muối hay kim chi.',
  },
  {
    id: '22',
    name: 'Burger Gà Nướng',
    ingredients: 'Grill burger',
    price: 69,
    image: require('../assets/foodList/burger/6.jpeg'),
    title:
      'Một chiếc pizza bắp phô mai vàng tươi, thơm ngây ngất chính là "chân ái" của các tín đồ phô mai đó. Chỉ với những nguyên liệu dễ tìm, cách làm siêu đơn giản là bạn đã có ngay chiếc pizza cực hấp dẫn này rồi. Những hạt bắp Mỹ vàng ươm, giòn ngọt ngập trong phô mai béo ngậy. Cắn một miếng bạn có thể cảm nhận được ngay độ béo và thơm của phô mai. Kết hợp với đế bánh giòn tan, sốt cà chua ngọt, đúng là khiến cho người ta phải chết mê với món này.',
  },
  {
    id: '23',
    name: 'Burger Bò Khoai',
    ingredients: 'Potato burger',
    price: 147,
    image: require('../assets/foodList/burger/7.jpeg'),
    title:
      'Biến tấu chiếc bánh sandwich thường ngày của bạn thành chiếc pizza nóng hổi, thơm lừng, cực hấp dẫn thôi nào. Lớp vỏ bánh sandwich khi được nướng lên cực giòn tan, thêm lớp phô mai tan chảy bên trên, mới chỉ nhìn thôi là đã thấy muốn ăn rồi. Pizza sandwich sẽ là bữa sáng tuyệt vời cho bạn, bánh thơm kết hợp với phô mai béo ngậy, rau củ giòn ngọt, thêm một chút xúc xích đậm đà, giúp bạn nạp nhanh và đủ năng lượng để khởi động ngày mới.',
  },
  {
    id: '24',
    name: 'Burger 2 Miếng Bò',
    ingredients: 'Two Beef burger',
    price: 169,
    image: require('../assets/foodList/burger/8.jpeg'),
    title:
      'Biến tấu chiếc bánh sandwich thường ngày của bạn thành chiếc pizza nóng hổi, thơm lừng, cực hấp dẫn thôi nào. Lớp vỏ bánh sandwich khi được nướng lên cực giòn tan, thêm lớp phô mai tan chảy bên trên, mới chỉ nhìn thôi là đã thấy muốn ăn rồi. Pizza sandwich sẽ là bữa sáng tuyệt vời cho bạn, bánh thơm kết hợp với phô mai béo ngậy, rau củ giòn ngọt, thêm một chút xúc xích đậm đà, giúp bạn nạp nhanh và đủ năng lượng để khởi động ngày mới.',
  },

  {
    id: '25',
    name: 'Sushi Nigirizushi',
    ingredients: 'Sushi Nigirizushi',
    price: 189,
    image: require('../assets/foodList/sushi/1.jpeg'),
    title:
      'Ngon mê ly với món pizza hải sản đầy ụ nhân này. Mùi phô mai nướng lên hòa lẫn với mùi thơm của hải sản, các loại rau củ sẽ khiến bạn phải phát thèm. Đế bánh mỏng, nóng giòn, kết hợp với phần sốt cà chua đậm đà, tôm và mực tươi ngon, chắc thịt. Thêm vào đó một chút giòn giòn, ngọt ngọt của ớt chuông. Tất cả hải sản và rau củ ngập trong phô mai béo ngậy, tan chảy cực thích. Bạn sẽ không cưỡng lại sức hấp dẫn của món bánh này đâu.',
  },
  {
    id: '26',
    name: 'Sushi Chirashizushi',
    ingredients: 'Sushi Chirashizushi',
    price: 215,
    image: require('../assets/foodList/sushi/2.jpeg'),
    title:
      'Một chiếc pizza "đậm chất sinh viên" đó chính là pizza mì gói. Chỉ với những nguyên liệu cực đơn giản là bạn đã có thể làm ngay món bánh thơm ngon này rồi. Đế bánh được làm từ mì và trứng nên có độ giòn giòn, mềm mềm, thêm một lớp phô mai béo ngậy bên trên. Cắn một miếng bạn sẽ cảm nhận được độ béo, thơm, vừa vị của món pizza độc lạ này. Đây sẽ là lựa chọn tuyệt vời cho ngày lười nấu nướng cầu kỳ của bạn.',
  },
  {
    id: '27',
    name: 'Sushi Makimono',
    ingredients: 'Sushi Makimono',
    price: 179,
    image: require('../assets/foodList/sushi/3.jpeg'),
    title:
      'Một chiếc pizza sốt pesto sẽ là món ăn tuyệt vời lắp đầy cái bụng đói của bạn. Bánh được nướng lên cùng với sốt pesto thơm nức mùi húng tây cực kỳ cuốn hút. Vỏ bánh bên trong xốp mềm, bên ngoài giòn tan, lớp nhân bánh bên trên là sự kết hợp hòan hảo giữa sốt pesto lạ miệng, phô mai béo ngậy, thịt tôm tươi ngọt, ớt chuông giòn giòn, đúng là ngon hết ý.',
  },
  {
    id: '28',
    name: 'Sushi Gunkan',
    ingredients: 'Sushi Gunkan',
    price: 146,
    image: require('../assets/foodList/sushi/4.jpeg'),
    title:
      'Makizushi là một loại cuộn sushi Nhật Bản chứa đầy các chất hàn khác nhau. Thuật ngữ makizushi đề cập đến thực tế là sushi được cuộn: maki có nghĩa là "cuộn" và zushi là phiên bản liên hợp của từ "sushi". Makizushi là loại sushi nổi tiếng nhất bên ngoài Nhật Bản. Makizushi cũng được gọi là nori maki hoặc norimaki bởi vì cơm sushi và các chất hàn đều được gói lại hoặc cuộn bên trong rong biển sấy khô.',
  },
  {
    id: '29',
    name: 'Sushi Oshizushi',
    ingredients: 'Sushi Oshizushi',
    price: 151,
    image: require('../assets/foodList/sushi/5.jpeg'),
    title:
      'Kimbap hay còn gọi là gimbap là tên gọi của món cơm gói trong lá rong biển (kim có nghĩa là rong biển, bap là cơm). Người Hàn thường làm kimbap để mang đi ăn trong những buổi dã ngoại hoặc các sự kiện ngoài trời, hoặc là trong các bữa ăn trưa nhẹ. Kimbap hay được ăn cùng với củ cải muối hay kim chi.',
  },
  {
    id: '30',
    name: 'Sushi Temaki',
    ingredients: 'Sushi Temaki',
    price: 199,
    image: require('../assets/foodList/sushi/6.jpeg'),
    title:
      'Một chiếc pizza bắp phô mai vàng tươi, thơm ngây ngất chính là "chân ái" của các tín đồ phô mai đó. Chỉ với những nguyên liệu dễ tìm, cách làm siêu đơn giản là bạn đã có ngay chiếc pizza cực hấp dẫn này rồi. Những hạt bắp Mỹ vàng ươm, giòn ngọt ngập trong phô mai béo ngậy. Cắn một miếng bạn có thể cảm nhận được ngay độ béo và thơm của phô mai. Kết hợp với đế bánh giòn tan, sốt cà chua ngọt, đúng là khiến cho người ta phải chết mê với món này.',
  },

  {
    id: '31',
    name: 'Salad dầu giấm',
    ingredients: 'Vinegar salad',
    price: 59,
    image: require('../assets/foodList/salad/1.jpeg'),
    title:
      'Đây là món salad đơn giản nhất nhưng không phải ai cũng có thể thực hiện một cách hoàn hảo. Bí quyết có món salad ngon chính là ở dầu giấm. Với những hướng dẫn tỉ mỉ của Cooky, chắc chắn bạn sẽ có một món salad đơn giản mà hấp dẫn lạ kì.',
  },
  {
    id: '32',
    name: 'Salad tổng hợp ',
    ingredients: 'Synthetic salad',
    price: 89,
    image: require('../assets/foodList/salad/2.jpeg'),

    title:
      'Salad tổng hợp với các loại rau quả như xà lách, cà chua, dưa leo, hành tây hoà quyện vào nhau trong vị chua ngọt của dầu giấm, vừa dễ ăn vừa tốt cho sức khoẻ. Món này làm cũng khá nhanh, bạn có thể làm cả trong những ngày bận rộn đấy.',
  },
  {
    id: '33',
    name: 'Salad dưa leo',
    ingredients: 'Cucumber salad',
    price: 36,
    image: require('../assets/foodList/salad/3.jpeg'),

    title:
      'Món ăn cực kì dễ làm, và nguyên liệu thì gần như luôn luôn có sẵn trong tủ lạnh nhà bạn rồi. Thay vì chỉ cắt dưa leo ăn sống, bạn đầu tư thêm vài phút để có một món ăn thơm ngon, đủ vị nhé.',
  },
  {
    id: '34',
    name: 'Salad giá đỗ',
    ingredients: 'Bean sprouts salad',
    price: 29,
    image: require('../assets/foodList/salad/4.jpeg'),

    title:
      'Giá đỗ chứa ít năng lượng, lại có nhiều chất xơ, vitamin và khoáng chất. Các món ăn từ giá đỗ vừa ngon miệng vừa tốt cho sức khoẻ. Salad giá đỗ cũng không là ngoại lệ. Món ăn này còn rất thích hợp cho những người đang có nhu cầu giảm cân đấy. ',
  },
  {
    id: '35',
    name: ' Salad súp lơ',
    ingredients: 'Cauliflower salad',
    price: 51,
    image: require('../assets/foodList/salad/5.jpeg'),

    title:
      'Món salad súp lơ xanh thanh mát này rất thích hợp cho những bạn đang muốn giảm cân. Hơn nữa, súp lơ xanh còn có nhiều lợi ích cho sức khoẻ như chống ung thư, ngăn ngừa tiểu đường. Thay vì xào, bạn hãy thử làm món salad để đổi vị nhé.',
  },
  {
    id: '36',
    name: 'Salad kim châm',
    ingredients: 'Enokitake salad',
    price: 199,
    image: require('../assets/foodList/salad/6.jpeg'),

    title:
      'Salad nấm kim châm có hương vị thanh đạm, ngọt tự nhiên, tươi giòn và chua ngọt nên rất dễ ăn. Không những vậy, món ăn này còn có nhiều chất dinh dưỡng nữa. Món này còn rất thích hợp khi nấu tiệc đó.',
  },
  {
    id: '37',
    name: 'Salad đậu bắp',
    ingredients: 'Sever salad',
    price: 59,
    image: require('../assets/foodList/salad/7.jpeg'),

    title:
      'Bạn sẽ thấy thích thú và ngon miệng với món salad đậu bắp này. Vị chua chua, ngọt ngọt hòa quyện vào nhau sẽ làm tăng thêm độ hấp dẫn cho món ăn. Nguyên liệu cực kì đơn giản, mà chỉ cần 35 phút thôi.',
  },
  {
    id: '38',
    name: 'Salad bơ đậu',
    ingredients: 'Peanut salad',
    price: 59,
    image: require('../assets/foodList/salad/8.jpeg'),

    title:
      'Nguyên liệu chính chỉ có đậu hũ non và bơ, món salad này vô cùng đơn giản nhưng vị ngon lại khiến bạn bất ngờ đấy. Mùa hè nhiều bơ, làm món salad thanh mát này ăn thì quá tuyệt.',
  },
  {
    id: '39',
    name: 'Salad xoài Thái',
    ingredients: 'Thai mango salad',
    price: 79,
    image: require('../assets/foodList/salad/9.jpeg'),

    title:
      'Chỉ cầu bỏ ra chút thời gian với những nguyên liệu quen thuộc như xoài, dưa leo, ớt chuông,... bạn đã có ngay món salad xoài kiểu Thái chua ngọt ăn hoài không chán.',
  },
  {
    id: '40',
    name: 'Salad ớt chuông',
    ingredients: 'Bell pepper salad',
    price: 59,
    image: require('../assets/foodList/salad/10.jpeg'),

    title:
      'Bạn nào thích ăn cay thì đã có ngay công thức món salad ớt chuông rồi đây. Với vài nguyên liệu đơn giản và vài bước thực hiện, món salad ớt chuông đã sẵn sàng cho bạn thưởng thức. ',
  },

  {
    id: '41',
    name: 'Gà giòn không cay',
    ingredients: 'Not spicy chicken',
    price: 36,
    image: require('../assets/foodList/chicken/1.jpeg'),
    title:
      'Cách chế biến gà đơn giản nhất chính là đem đi luộc. Thịt gà được sơ chế kỹ sau đó cho vào nồi, đổ ngập nước thêm vài ba lát gừng để át mùi và luộc chín. Gà luộc chín có lớp bên ngoài màu vàng ruộm trông vừa đẹp mắt, vừa hấp dẫn, mùi thịt gà tỏa thơm lừng, thịt gà chắc không bị nát, khi ăn cảm nhận được sự dai giòn của da và vị ngọt của thịt. Thật ra luộc gà cũng là một nghệ thuật vì bạn có thể luộc gà theo nhiều cách khác nhau. Ví như gà luộc muối, gà luộc lá chanh hay gà luộc nước dừa,...',
  },
  {
    id: '42',
    name: 'Gà MIX WING ',
    ingredients: 'MIX WING chicken',
    price: 75,
    image: require('../assets/foodList/chicken/2.jpeg'),

    title:
      'Giữa tiết trời se lạnh của buổi sớm mà được thưởng thức một tô cháo gà nóng hổi mới ra lò thì còn gì bằng đúng không! Cháo gà được nấu từ nước hầm xương gà nên có vị ngọt thanh, khi chế biến không cần nêm nếm quá nhiều gia vị mà vẫn tạo được hương vị thơm ngon khó cưỡng. Cho cháo gà ra tô, rắc thêm vào một ít tiêu, một ít rau tía tô, hành lá cắt nhỏ, ai đó muốn ăn cay hơn nữa thì cho thêm vào một ít ớt bột hoặc ớt cắt lát nhỏ nữa là có thể thưởng thức được hương vị tuyệt vời của tô cháo gà rồi.',
  },
  {
    id: '43',
    name: 'Gà rán giòn cay',
    ingredients: 'Fried chicken',
    price: 36,
    image: require('../assets/foodList/chicken/3.jpeg'),

    title:
      'Những ngày cuối tuần tụ tập cùng gia đình hay bạn bè chắc chắn sẽ không thể thiếu được món gà nướng để nhâm nhi cùng đồ uống mát lạnh rồi. Gà được sơ chế thật kỹ để loại bỏ mùi tanh thì được đem đi tẩm ướp gia vị đầy đủ, đợi cho gà thấm gia vị thì đem đi nướng. Gà mới nướng xong toả hương thơm nức mũi, mùi da vàng nâu óng ánh đẹp mắt. Thịt gà ngoài giòn dai, cay mặn còn bên trọng thì mềm, ngọt thanh, ăn kèm với muối ớt sữa hoặc muối tiêu chanh thì đúng là hết bài.',
  },
  {
    id: '44',
    name: 'Gà BBQ',
    ingredients: 'BBQ chicken',
    price: 39,
    image: require('../assets/foodList/chicken/4.jpeg'),

    title:
      'Một cách chế biến đơn giản khác từ gà đó là mang đi hấp. Hấp gà cũng có nhiều cách, tùy theo ý thích của mình mà bạn có thể lựa chọn cách hấp. Ở đây, Điện máy XANH giới thiệu đến bạn hai cách hấp gà. Gà ta hấp hành Món đầu tiên trong mục gà hấp sẽ là gà hấp hành. Gà được đem đi hấp với hành lá, sả và gừng tạo nên mùi vị mới lạ, độc đáo nhưng vẫn đọng lại một chút gì đó dân dã, gần gũi. Gà hấp hành mới ra lò bốc khói nghi ngút, hương thơm mộc mạc từ thịt gà quyện với hành lá, sả, gừng kích thích vị giác của bất kỳ thực khách khó tính nào.',
  },
  {
    id: '45',
    name: ' Commbo Gà rán',
    ingredients: ' Commbo fried chicken',
    price: 90,
    image: require('../assets/foodList/chicken/5.jpeg'),

    title: '',
  },
  {
    id: '46',
    name: 'Commbo cay',
    ingredients: 'Commbo spicy',
    price: 119,
    image: require('../assets/foodList/chicken/6.jpeg'),

    title: '',
  },

  {
    id: '47',
    name: 'Cơm Vua cánh gà',
    ingredients: ' King rice chicken',
    price: 49,
    image: require('../assets/foodList/riceking/1.jpeg'),
    title:
      'Dĩa cơm gà đầy ụ, miếng gà bắt ngang dĩa to chà bá, gà bóng dầu cánh gián vô cùng bắt mắt. Miếng gà giòn da, thơm thịt bên ngoài, ngọt đậm bên trong làm tất cả các giác quan dường như được đánh thức. Gà tại quán là gà ta còn tươi sống, được mua về và chế biến kỹ càng. Từ công đoạn sơ chế đến nấu nướng vô cùng kỹ lưỡng, đảm bảo phục vụ cho thực khách món ăn vừa ngon vừa đảm bảo.',
  },
  {
    id: '48',
    name: 'Cơm Vua bò',
    ingredients: 'Beef rice king',
    price: 61,
    image: require('../assets/foodList/riceking/2.jpeg'),

    title:
      'Với bữa cơm cung đình xưa, món ăn phải được trình bày đẹp, mũi ngửi thơm, cảm giác thèm, tai nghe nhưng âm thanh quyến rũ. Từng món được múc ra tô, đĩa rồi đặt trong các quả hộp bằng gỗ sơn son thếp vàng, được niêm phong bằng giấy bản và có chữ kí, đóng dấu của Thượng thiện. Chuông đổ, thức ăn được thị vệ gánh vào cửa cung giao cho phi tần bày biện cho vua. Cuối cùng, nữ quan hoặc các bà nội cung bậc thấp của vua phải thử đũa trước mặt ngài để kiểm tra độc tố. Sở dĩ bữa cơm vua có nhiều món là vì ăn vài món cố định, nhà vua dễ bị đầu độc.',
  },
  {
    id: '49',
    name: 'Combo Bò nướng',
    ingredients: 'Commbo beef rice',
    price: 61,
    image: require('../assets/foodList/riceking/3.jpeg'),

    title:
      'Tại Festival nghề năm 2011, lần đầu tiên nữ nghệ nhân Hoàng Anh đã áp dụng kỹ thuật nấu nướng tuyệt xảo trong cung đình do ông mình truyền lại để tái hiện nguyên bản buổi yến tiệc cung đình xưa với những sơn hào hải vị quý hiếm. Bữa tiệc thịnh soạn này chỉ đủ chiêu đãi cho 26 thực khách may mắn. Giá cả ước tính của bữa cơm cung đình “thứ thiệt” này khoảng 6 triệu đồng/suất. Nhiều người đánh giá, từ trước đến nay, bữa tiệc này mới là cơm cung đình đúng nguyên bản nhất, không như những bữa cơm cung đình phục vụ du khách ở các nhà hàng, khách sạn bây giờ.',
  },
  {
    id: '50',
    name: 'Combo phô mai',
    ingredients: 'Commbo cheese rice ',
    price: 64,
    image: require('../assets/foodList/riceking/4.jpeg'),

    title:
      'Tuy nhiên, có một điều làm người Huế mãi day dứt: Hương vị của món ăn Huế đang nhạt dần theo thời gian. Đặc biệt, chỉ cần khoảng vài chục USD/suất, thực khách đã có thể thưởng thức cái gọi là “cơm cùng đình” nhan nhản ở các nhà hàng, khách sạn dù cũng là nem công, chả phượng, màu sắc và hình thức bắt mắt. Khách được mặc áo hoàng bào, được đóng vai ông hoàng bà chúa trong cung cấm, đóng các vương tôn công tử hay sứ thần các nước để “ngự thiện” như các ông vua thời xưa. Nhưng nói như ông Hồ Tấn Phan, một nhà nghiên cứu văn hóa Huế: “Cơm cung đình bây giờ chỉ là sự “phỉnh phờ”. Họ khéo léo tỉa tót đấy nhưng sao tôi thấy món ăn không có hồn gì của Huế? Với lại, người người đều nấu cơm cung đình thế này mang tiếng quá bởi cơm cung đình xưa đâu có như vậy.',
  },

  {
    id: '51',
    name: 'Nước Cam',
    ingredients: 'Orange juice',
    price: 22,
    image: require('../assets/foodList/drink/nuoccam.jpeg'),
    title:
      'Nước cam có chứa flavonoid có lợi cho sức khỏe và là một nguồn cung cấp các chất chống oxy hóa hesperidin. Đồng thời trong nước cam có chứa nhiều vitamin C,[1] có tác dụng tăng cường đề kháng, chống mệt mỏi. Nước cam thường có sự thay đổi giữa màu cam và màu vàng, mặc dù một số màu đỏ ruby ​​hoặc màu cam giống màu đỏ cam hoặc thậm chí hơi hồng.',
  },
  {
    id: '52',
    name: 'Milo',
    ingredients: 'Milo drink',
    price: 25,
    image: require('../assets/foodList/drink/milo.jpeg'),
    title:
      'Sữa Milo của Netstle đã có mặt và liên tục phát triển tại thị trường Việt Nam từ hơn 17 năm qua và là nhãn hiệu uy tín, dẫn đầu về chất lượng và thị phần trong ngành hàng thức uống cacao dinh dưỡng dành cho trẻ em từ 6-12 tuổi. Thức uống lúa mạch Sữa Milo của Netstle là sự kết hợp hoàn hảo từ hương vị thơm ngon độc đáo của cacao và nguồn dưỡng chất thiên nhiên giàu đạm và các chất dinh dưỡng từ sữa, mầm lúa mạch nguyên cám và các vitamin, khoáng chất.',
  },
  {
    id: '53',
    name: 'DASANI',
    ingredients: 'DASANI',
    price: 22,
    image: require('../assets/foodList/drink/dasani.jpeg'),
    title:
      'Nước tinh khiết Dasani có mặt trên thị trường và khẳng định những ưu điểm vượt trội của mình. Ví dụ điển hình nằm ở thiết kế vỏ chai. Trọng lượng không đáng kể, chất liệu thân thiện với môi trường, dễ dàng bóp nhỏ để tiết kiệm diện tích…Những lý do đó cũng đủ để Dasani nhận được quan tâm chứ chưa nói đến chất lượng sản phẩm và mức độ hài lòng của khách hàng khi uống nước.',
  },
  {
    id: '54',
    name: 'Xoài đào',
    ingredients: 'Mango juice',
    price: 25,
    image: require('../assets/foodList/drink/xoaidao.jpeg'),
    title: `Nước trái cây cô đặc Sjora xoài đào với màu vàng sóng sánh, vị xoài đào đặc trưng mang lại cảm giác tươi mát, giải nhiệt cho những ngày hè.
        ĐẶC ĐIỂM NỔI BẬT
      - Mùi hương xoài đào tự nhiên, kích thích vị giác, thức uống giữ trọn hương vị suốt nhiều giờ.
      - Thức uống cô đặc, dễ dàng pha chế thành nhiều thức uống khác nhau.
      - Sản phẩm chất lượng, an toàn cho mọi lứa tuổi.`,
  },
  {
    id: '55',
    name: 'Trà Chanh',
    ingredients: 'Lemon tea',
    price: 22,
    image: require('../assets/foodList/drink/trachanh.jpeg'),
    title:
      'Trà chanh vốn là thức uống khá nổi vào những năm trước. Khi phong trà ‘trà chanh chém gió’ từ Hà Nội lan rộng đến nhiều thành phố khác. Thức uống có công thức quá đơn giản, bao gồm: nước trà Thái Nguyên, chanh, đường và một ít đá. Lại lan toả rất mạnh đến khắp phố phường. Thời gian gần đây, phong trào lê la đường phố, uống trà chanh cũng giảm mạnh. Một phần sức nóng của xu hướng này đã nguội lạnh. Ngoài ra thì một phần cũng là do những thông tin vệ sinh không tốt về thức uống này. Điển hình là trà chanh mà không làm từ trà, cũng chẳng có chanh, mà nước cũng chưa chắc đã được đun sôi.',
  },
  {
    id: '56',
    name: 'CoCa',
    ingredients: 'Coca Cola',
    price: 22,
    image: require('../assets/foodList/drink/coca.jpeg'),
    title:
      'Coca-Cola được phát minh bởi dược sĩ John Stith Pemberton, chủ một phòng thí nghiệm và hiệu thuốc tư nhân. Ban đầu, Pemberton chỉ định sáng chế ra một loại thuốc bình dân giúp chống đau đầu và mệt mỏi. Ông đã mày mò và thử nghiệm, pha chế thành công một loại siro có màu đen như cà phê. Loại siro này trộn với nước lạnh sẽ có thể được một thứ nước giảm nhức đầu và tăng sảng khoái.',
  },
  {
    id: '57',
    name: 'FanTa',
    ingredients: 'Fanta drink',
    price: 22,
    image: require('../assets/foodList/drink/fanta.jpeg'),
    title:
      'Fanta là một thương hiệu đồ uống có ga có hương vị trái cây được tạo ra bởi Công ty Coca-Cola và được bán trên thị trường toàn cầu. Có hơn 100 hương vị trên toàn thế giới. Đồ uống Fanta có nguồn gốc là loại đồ uống thay thế Cola ở Đức (trong thời Thế chiến II) do việc cấm vận đối với hàng hóa của Coca-Cola vào năm 1940.',
  },
  {
    id: '58',
    name: 'Sprite',
    ingredients: 'Sprite drink',
    price: 22,
    image: require('../assets/foodList/drink/sprite.jpeg'),
    title:
      'Sprite là một loại nước giải khát không màu, có vị chanh - chanh được sản xuất bởi Công ty Coca-Cola. Sprite có nhiều hương vị, bao gồm việt quất, anh đào, nho, cam, nhiệt đới, gừng và vani. Sprite được tạo ra để cạnh tranh chủ yếu với 7 Up của Keurig Dr Pepper.',
  },
  {
    id: '59',
    name: 'COKE Light',
    ingredients: 'Coke Light drink',
    price: 25,
    image: require('../assets/foodList/drink/cokelight.jpeg'),
    title:
      'Coca Light là một dòng sản phẩm nước uống có ga, không đường, dành cho người ăn kiêng, ra đời năm 1982. Với vị ngọt tạo từ Aspartame, đây là loại chất tạo ngọt chứa cực kì ít calo giúp bạn có thể dễ dàng kiểm soát được lượng đường và calo mình hấp thụ vào cơ thể. Nhưng bù lại, chất này có thể gây cảm giác thèm đường cho người uống và một số phản ứng cho cơ thể như mất ngủ, tâm trạng thay đổi. Vị của Coca Light được đánh giá là ít ngọt hơn so với bản gốc, và vị ngọt cũng khác với vị ngọt đường thông thường.',
  },
  {
    id: '60',
    name: 'Mojito',
    ingredients: 'Mojito',
    price: 25,
    image: require('../assets/foodList/drink/1.jpeg'),
    title:
      'Coca Light là một dòng sản phẩm nước uống có ga, không đường, dành cho người ăn kiêng, ra đời năm 1982. Với vị ngọt tạo từ Aspartame, đây là loại chất tạo ngọt chứa cực kì ít calo giúp bạn có thể dễ dàng kiểm soát được lượng đường và calo mình hấp thụ vào cơ thể. Nhưng bù lại, chất này có thể gây cảm giác thèm đường cho người uống và một số phản ứng cho cơ thể như mất ngủ, tâm trạng thay đổi. Vị của Coca Light được đánh giá là ít ngọt hơn so với bản gốc, và vị ngọt cũng khác với vị ngọt đường thông thường.',
  },
  {
    id: '61',
    name: 'Cafe đá bào',
    ingredients: 'Grinded ice coffee',
    price: 32,
    image: require('../assets/foodList/drink/2.jpeg'),
    title:
      'Coca Light là một dòng sản phẩm nước uống có ga, không đường, dành cho người ăn kiêng, ra đời năm 1982. Với vị ngọt tạo từ Aspartame, đây là loại chất tạo ngọt chứa cực kì ít calo giúp bạn có thể dễ dàng kiểm soát được lượng đường và calo mình hấp thụ vào cơ thể. Nhưng bù lại, chất này có thể gây cảm giác thèm đường cho người uống và một số phản ứng cho cơ thể như mất ngủ, tâm trạng thay đổi. Vị của Coca Light được đánh giá là ít ngọt hơn so với bản gốc, và vị ngọt cũng khác với vị ngọt đường thông thường.',
  },
  {
    id: '62',
    name: 'Cafe nghệ thuật',
    ingredients: 'Art coffee',
    price: 45,
    image: require('../assets/foodList/drink/3.jpeg'),
    title:
      'Coca Light là một dòng sản phẩm nước uống có ga, không đường, dành cho người ăn kiêng, ra đời năm 1982. Với vị ngọt tạo từ Aspartame, đây là loại chất tạo ngọt chứa cực kì ít calo giúp bạn có thể dễ dàng kiểm soát được lượng đường và calo mình hấp thụ vào cơ thể. Nhưng bù lại, chất này có thể gây cảm giác thèm đường cho người uống và một số phản ứng cho cơ thể như mất ngủ, tâm trạng thay đổi. Vị của Coca Light được đánh giá là ít ngọt hơn so với bản gốc, và vị ngọt cũng khác với vị ngọt đường thông thường.',
  },
  {
    id: '63',
    name: 'Cafe nóng',
    ingredients: 'Hot coffee',
    price: 35,
    image: require('../assets/foodList/drink/4.jpeg'),
    title:
      'Coca Light là một dòng sản phẩm nước uống có ga, không đường, dành cho người ăn kiêng, ra đời năm 1982. Với vị ngọt tạo từ Aspartame, đây là loại chất tạo ngọt chứa cực kì ít calo giúp bạn có thể dễ dàng kiểm soát được lượng đường và calo mình hấp thụ vào cơ thể. Nhưng bù lại, chất này có thể gây cảm giác thèm đường cho người uống và một số phản ứng cho cơ thể như mất ngủ, tâm trạng thay đổi. Vị của Coca Light được đánh giá là ít ngọt hơn so với bản gốc, và vị ngọt cũng khác với vị ngọt đường thông thường.',
  },
  {
    id: '64',
    name: 'Nước dâu',
    ingredients: 'Strawberry water',
    price: 29,
    image: require('../assets/foodList/drink/5.jpeg'),
    title:
      'Coca Light là một dòng sản phẩm nước uống có ga, không đường, dành cho người ăn kiêng, ra đời năm 1982. Với vị ngọt tạo từ Aspartame, đây là loại chất tạo ngọt chứa cực kì ít calo giúp bạn có thể dễ dàng kiểm soát được lượng đường và calo mình hấp thụ vào cơ thể. Nhưng bù lại, chất này có thể gây cảm giác thèm đường cho người uống và một số phản ứng cho cơ thể như mất ngủ, tâm trạng thay đổi. Vị của Coca Light được đánh giá là ít ngọt hơn so với bản gốc, và vị ngọt cũng khác với vị ngọt đường thông thường.',
  },
  {
    id: '65',
    name: 'Cơm Vua BBQ',
    ingredients: ' King rice BBQ',
    price: 49,
    image: require('../assets/foodList/riceking/3.jpeg'),
    title:
      'Dĩa cơm gà đầy ụ, miếng gà bắt ngang dĩa to chà bá, gà bóng dầu cánh gián vô cùng bắt mắt. Miếng gà giòn da, thơm thịt bên ngoài, ngọt đậm bên trong làm tất cả các giác quan dường như được đánh thức. Gà tại quán là gà ta còn tươi sống, được mua về và chế biến kỹ càng. Từ công đoạn sơ chế đến nấu nướng vô cùng kỹ lưỡng, đảm bảo phục vụ cho thực khách món ăn vừa ngon vừa đảm bảo.',
  },
  {
    id: '66',
    name: 'Combo Gà nướng',
    ingredients: 'Commbo chicken rice',
    price: 61,
    image: require('../assets/foodList/riceking/1.jpeg'),
    title:
      'Tại Festival nghề năm 2011, lần đầu tiên nữ nghệ nhân Hoàng Anh đã áp dụng kỹ thuật nấu nướng tuyệt xảo trong cung đình do ông mình truyền lại để tái hiện nguyên bản buổi yến tiệc cung đình xưa với những sơn hào hải vị quý hiếm. Bữa tiệc thịnh soạn này chỉ đủ chiêu đãi cho 26 thực khách may mắn. Giá cả ước tính của bữa cơm cung đình “thứ thiệt” này khoảng 6 triệu đồng/suất. Nhiều người đánh giá, từ trước đến nay, bữa tiệc này mới là cơm cung đình đúng nguyên bản nhất, không như những bữa cơm cung đình phục vụ du khách ở các nhà hàng, khách sạn bây giờ.',
  },
];

export default listTotal;