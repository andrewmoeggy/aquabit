const SHOP_DATA = [
  {
    id: 1,
    title: 'Laptops',
    routeName: 'laptops',
    items: [







      {
        id: 1,
        name: 'HP 250',
        imageUrl: 'https://i.ibb.co/gT1Jnp7/laptop-1-min.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Mac 250',
        imageUrl: 'https://i.ibb.co/M7mLh3v/laptop-2-min.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Lenovo R9sV',
        imageUrl: 'https://i.ibb.co/QHWR5q8/laptop-3-min.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Toshiba U89',
        imageUrl: 'https://i.ibb.co/qnyXhgd/laptop-4-min.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'HP 98VV',
        imageUrl: 'https://i.ibb.co/7Cnm8JG/laptop-5-min.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'The ENIAC',
        imageUrl: 'https://i.ibb.co/N6kv8Lh/laptop-6-min.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'MacBook Pro',
        imageUrl: 'https://i.ibb.co/6nCKvw7/laptop-7-min.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Lenovo 12',
        imageUrl: 'https://i.ibb.co/G9C0D8B/laptop-8-min.jpg',
        price: 14
      }
    ]
  },
  {
    id: 2,
    title: 'Desktops',
    routeName: 'desktops',
    items: [
      {
        id: 1,
        name: 'Dell Opti',
        imageUrl: 'https://i.ibb.co/9tTGMd4/desktop-1-min.jpg',
        price: 220
      },
      {
        id: 2,
        name: 'Acer Aspire',
        imageUrl: 'https://i.ibb.co/wLcjLQq/desktop-2-min.jpg',
        price: 280
      },
      {
        id: 3,
        name: 'Hp EliteDesk',
        imageUrl: 'https://i.ibb.co/s6CRhg3/desktop-3-min.jpg',
        price: 110
      },
      {
        id: 4,
        name: 'Acer Desktop',
        imageUrl: 'https://i.ibb.co/ZSn2h3J/desktop-4-min.jpg',
        price: 160
      },
      {
        id: 5,
        name: 'Apple iMac',
        imageUrl: 'https://i.ibb.co/2nFwPVn/desktop-5-min.jpg',
        price: 160
      },
      {
        id: 6,
        name: 'Asus 940',
        imageUrl: 'https://i.ibb.co/qYzRCxY/desktop-6-min.jpg',
        price: 160
      },
      {
        id: 7,
        name: 'Toshiba Desktop',
        imageUrl: 'https://i.ibb.co/k0ccWFd/desktop-7-min.jpg',
        price: 190
      },
      {
        id: 8,
        name: 'UltraFax Fax 9000',
        imageUrl: 'https://i.ibb.co/s5ykRJK/desktop-8-min.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Watches',
    routeName: 'watches',
    items: [
      {
        id: 1,
        name: 'iWatch',
        imageUrl: 'https://i.ibb.co/pfBnWZN/watch-1-min.jpg',
        price: 125
      },
      {
        id: 2,
        name: 'Rolex 12',
        imageUrl: 'https://i.ibb.co/PwMPvdf/watch-2-min.jpg',
        price: 90
      },
      {
        id: 3,
        name: 'Invicta',
        imageUrl: 'https://i.ibb.co/37Jj3qV/watch-3-min.jpg',
        price: 90
      },
      {
        id: 4,
        name: 'Citizen Eco',
        imageUrl: 'https://i.ibb.co/x3psW1R/watch-4-min.jpg',
        price: 165
      },
      {
        id: 5,
        name: 'GV2 Gevril',
        imageUrl: 'https://i.ibb.co/j6JdQ6w/watch-5-min.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Televisons',
    routeName: 'televison',
    items: [
      {
        id: 1,
        name: 'Samsung Q70R',
        imageUrl: 'https://i.ibb.co/BVSwG8x/televison-1-min.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'LG OLED',
        imageUrl: 'https://i.ibb.co/ZcC2D43/televison-2-min.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'VIZIO 241',
        imageUrl: 'https://i.ibb.co/mHYtQyn/televison-3-min.jpg',
        price: 80
      },
      {
        id: 4,
        name: 'Sony IO',
        imageUrl: 'https://i.ibb.co/TBnNphw/televison-4-min.jpg',
        price: 80
      },
      {
        id: 5,
        name: 'Apple TV',
        imageUrl: 'https://i.ibb.co/N3JYCdN/televison-5-min.jpg',
        price: 45
      },
      {
        id: 6,
        name: 'Samsung 94Q',
        imageUrl: 'https://i.ibb.co/B3xLHDG/televison-6-min.jpg',
        price: 135
      },
      {
        id: 7,
        name: 'Philips R29',
        imageUrl: 'https://i.ibb.co/w4qQDQt/televison-7-min.jpg',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Phones',
    routeName: 'phones',
    items: [
      {
        id: 1,
        name: 'iPhone A',
        imageUrl: 'https://i.ibb.co/GtPTDcM/phone-1-min.jpg',
        price: 325
      },
      {
        id: 2,
        name: 'iPhone B',
        imageUrl: 'https://i.ibb.co/515gHjd/phone-2-min.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'iPhone C',
        imageUrl: 'https://i.ibb.co/r4H4SwP/phone-3-min.jpg',
        price: 25
      },
      {
        id: 4,
        name: 'iPhone D',
        imageUrl: 'https://i.ibb.co/zVysGDN/phone-4-min.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'iPhone E',
        imageUrl: 'https://i.ibb.co/dJvFZWn/phone-5-min.jpg',
        price: 40
      },
      {
        id: 6,
        name: 'iPhone F',
        imageUrl: 'https://i.ibb.co/SX6YsP4/phone-6-min.jpg',
        price: 25
      }
    ]
  }
]

export default SHOP_DATA;