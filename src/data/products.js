const images = require.context('./images', true, /\.png$/)

const products = {
  featured: [
    {
      id: 1,
      description:
        'Rise from the ashes with the new LeBron 15, engineered with next-generation BattleKnit technology for an unrivaled combination of flexibility and strength.',
      title: 'LeBron 17',
      src: images('./lebron-17-big-kids-shoe.png'),
      category: 'Men\'s Shoe',
      cost: 199
    },
    {
      id: 2,
      description: 'Go for gold in the Nike Air Max 270 React. The design draws inspiration from the Air Max pantheon, showcasing Nike\'s big innovation with its large window and fresh array of colors.',
      title: 'Nike Air Max 270 React',
      src: images('./air-max-270-react-mens-shoe.png'),
      cost: 189,
      category: 'Men\'s Shoe',
      onSale: true
    },
    // {
    //   id: 3,
    //   description:
    //     'Featuring a full-length foam midsole and VaporMax Air unit, the Nike Air VaporMax 360 gives you a cushy ride with bold \'90s style. Iridescent accents on the upper combine with small Air Pod details for a fresh look with just enough flash.',
    //   title: 'Nike Air VaporMax 360',
    //   src: images('./air-vapormax-360-mens-shoe.png'),
    //   category: 'Men\'s Shoe',
    //   cost: 194
    // },
    // {
    //   id: 4,
    //   description:
    //     'Designed specifically for a woman\'s foot, the Nike Air Max Dia delivers a lifted look, an airy aesthetic and a sleek shape. The minimal upper modernizes the look, while the Max Air unit, surrounded by clear TPU, is amplified even further by an exaggerated midsole for a boost of style.',
    //   title: 'Nike Air Max Dia',
    //   src: images('./air-max-dia-womens-shoe.png'),
    //   category: 'Women\'s Shoe',
    //   cost: 111
    // },
    // {
    //   id: 5,
    //   description:
    //     'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 Tortoise Shell lets you push your style full-speed ahead. With its revolutionary full-length Nike Air unit that shook up the running world and new tortoise shell print details, it lets you ride in first-class comfort.',
    //   title: 'Nike Air Max 97 Tortoise Shell',
    //   src: images('./air-max-97-tortoise-shell-womens-shoe.png'),
    //   category: 'Women\'s Shoe',
    //   cost: 159
    // },
    // {
    //   id: 6,
    //   description:
    //     'The Nike Vista Lite SE brings you to a bold new place both rebellious and refined. Using recycled foam from the Nike Zoom X family, it takes Nike DNA and fuses it to elements of fashion and technology. Lightweight mesh, exaggerated stitching and the transparent window on the upper add a modern look while the thick stack of foam adds unreal comfort and response.',
    //   title: 'Nike Vista Lite SE',
    //   src: images('./vista-lite-se-womens.png'),
    //   category: 'Women\'s Shoe',
    //   cost: 99
    // }
  ],
  newArrivals: [
  //   {
  //     id: 1,
  //     description: 'An articulated arm with a claw -- great for reaching around corners or working in tight spaces.',
  //     title: 'Articulated',
  //     src: images('./arm-articulated-claw.png'),
  //     category: 'arms',
  //     cost: 275
  //   },
  //   {
  //     id: 2,
  //     description: 'An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.',
  //     title: 'Two Clawed',
  //     src: images('./arm-dual-claw.png'),
  //     category: 'arms',
  //     cost: 285
  //   },
  //   {
  //     id: 3,
  //     description: 'A telescoping arm with a grabber.',
  //     title: 'Grabber',
  //     src: images('./arm-grabber.png'),
  //     category: 'arms',
  //     cost: 205.5
  //   },
  //   {
  //     id: 4,
  //     description: 'An arm with a propeller -- good for propulsion or as a cooling fan.',
  //     title: 'Propeller',
  //     src: images('./arm-propeller.png'),
  //     category: 'arms',
  //     cost: 230,
  //     onSale: true
  //   },
  //   {
  //     id: 5,
  //     description: 'A short and stubby arm with a claw -- simple, but cheap.',
  //     title: 'Stubby Claw',
  //     src: images('./arm-stubby-claw.png'),
  //     category: 'arms',
  //     cost: 125
  //   }
  // ],
  // torsos: [
  //   {
  //     id: 1,
  //     description: 'A torso that can bend slightly at the waist and equiped with a heat guage.',
  //     title: 'Flexible Gauged',
  //     src: images('./torso-flexible-gauged.png'),
  //     category: 'torsos',
  //     cost: 1575
  //   },
  //   {
  //     id: 2,
  //     description: 'A less flexible torso with a battery gauge.',
  //     title: 'Gauged',
  //     src: images('./torso-gauged.png'),
  //     category: 'torsos',
  //     cost: 1385
  //   },
  //   {
  //     id: 2,
  //     description: 'A simple torso with a pouch for carrying items.',
  //     title: 'Gauged',
  //     src: images('./torso-pouch.png'),
  //     category: 'torsos',
  //     cost: 785,
  //     onSale: true
  //   }
  // ],
  // bases: [
  //   {
  //     id: 1,
  //     description: 'A two wheeled base with an accelerometer for stability.',
  //     title: 'Double Wheeled',
  //     src: images('./base-double-wheel.png'),
  //     category: 'bases',
  //     cost: 895
  //   },
  //   {
  //     id: 2,
  //     description: 'A rocket base capable of high speed, controlled flight.',
  //     title: 'Rocket',
  //     src: images('./base-rocket.png'),
  //     category: 'bases',
  //     cost: 1520.5
  //   },
  //   {
  //     id: 3,
  //     description: 'A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.',
  //     title: 'Single Wheeled',
  //     src: images('./base-single-wheel.png'),
  //     category: 'bases',
  //     cost: 1190.5
  //   },
  //   {
  //     id: 4,
  //     description: 'A spring base - great for reaching high places.',
  //     title: 'Spring',
  //     src: images('./base-spring.png'),
  //     category: 'bases',
  //     cost: 1190.5
  //   },
  //   {
  //     id: 5,
  //     description: 'An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.',
  //     title: 'Triple Wheeled',
  //     src: images('./base-triple-wheel.png'),
  //     category: 'bases',
  //     cost: 700.5
  //   }
  ]
}
export default products;
