const SHOP_DATA = [
  {
    id: 1,
    title: 'Laptops',
    routeName: 'laptops',
    items: [
      {
        id: 1,
        name: 'HP 250',
        imageUrl: 'https://i.ibb.co/dmW2v6r/laptop-1.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Mac 250',
        imageUrl: 'https://i.ibb.co/StbzGTP/laptop-2.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Lenovo R9sV',
        imageUrl: 'https://i.ibb.co/BfnwMQG/laptop-3.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Toshiba U89',
        imageUrl: 'https://i.ibb.co/7KyDvMk/laptop-4.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'HP 98VV',
        imageUrl: 'https://i.ibb.co/sFdbpb0/laptop-5.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'The ENIAC',
        imageUrl: 'https://i.ibb.co/hg9fsf4/laptop-6.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'MacBook Pro',
        imageUrl: 'https://i.ibb.co/HP6fYwr/laptop-7.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Lenovo 12',
        imageUrl: 'https://i.ibb.co/wC7vXpv/laptop-8.jpg',
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
        imageUrl: 'https://i.ibb.co/b7s4012/desktop-1.jpg',
        price: 220
      },
      {
        id: 2,
        name: 'Acer Aspire',
        imageUrl: 'https://i.ibb.co/HFfkrYS/desktop-2.jpg',
        price: 280
      },
      {
        id: 3,
        name: 'Hp EliteDesk',
        imageUrl: 'https://i.ibb.co/MMVkYNH/desktop-3.jpg',
        price: 110
      },
      {
        id: 4,
        name: 'Acer Desktop',
        imageUrl: 'https://i.ibb.co/y41gc5K/desktop-4.jpg',
        price: 160
      },
      {
        id: 5,
        name: 'Apple iMac',
        imageUrl: 'https://i.ibb.co/PYgGJXV/desktop-5.jpg',
        price: 160
      },
      {
        id: 6,
        name: 'Asus 940',
        imageUrl: 'https://i.ibb.co/8cbBQZY/desktop-6.jpg',
        price: 160
      },
      {
        id: 7,
        name: 'Toshiba Desktop',
        imageUrl: 'https://i.ibb.co/pwBXSGb/desktop-7.jpg',
        price: 190
      },
      {
        id: 8,
        name: 'UltraFax Fax 9000',
        imageUrl: 'https://i.ibb.co/wMSSwRz/desktop-8.jpg',
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
        imageUrl: 'https://i.ibb.co/tMJH5cd/watch-1.jpg',
        price: 125
      },
      {
        id: 2,
        name: 'Rolex 12',
        imageUrl: 'https://i.ibb.co/3p2KPcb/watch-2.jpg',
        price: 90
      },
      {
        id: 3,
        name: 'Invicta',
        imageUrl: 'https://i.ibb.co/2K65zrX/watch-3.jpg',
        price: 90
      },
      {
        id: 4,
        name: 'Citizen Eco',
        imageUrl: 'https://i.ibb.co/0qJXvc4/watch-4.jpg',
        price: 165
      },
      {
        id: 5,
        name: 'GV2 Gevril',
        imageUrl: 'https://i.ibb.co/L1r0Z00/watch-5.jpg',
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
        imageUrl: 'https://i.ibb.co/KNxfgh6/televison-1.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'LG OLED',
        imageUrl: 'https://i.ibb.co/zX9WtF3/televison-2.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'VIZIO 241',
        imageUrl: 'https://i.ibb.co/56Xss67/televison-3.jpg',
        price: 80
      },
      {
        id: 4,
        name: 'Sony IO',
        imageUrl: 'https://i.ibb.co/B4Zcqpx/televison-4.jpg',
        price: 80
      },
      {
        id: 5,
        name: 'Apple TV',
        imageUrl: 'https://i.ibb.co/dp9Kn21/televison-5.jpg',
        price: 45
      },
      {
        id: 6,
        name: 'Samsung 94Q',
        imageUrl: 'https://i.ibb.co/f8n70KX/televison-6.jpg',
        price: 135
      },
      {
        id: 7,
        name: 'Philips R29',
        imageUrl: 'https://i.ibb.co/mzpm8ZB/televison-7.jpg',
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
        imageUrl: 'https://i.ibb.co/6svJLG3/phone-1.jpg',
        price: 325
      },
      {
        id: 2,
        name: 'iPhone B',
        imageUrl: 'https://i.ibb.co/JRywBjG/phone-2.jpg',
        price: 20
      },
      {
        id: 3,
        name: 'iPhone C',
        imageUrl: 'https://i.ibb.co/wc3C8DD/phone-3.jpg',
        price: 25
      },
      {
        id: 4,
        name: 'iPhone D',
        imageUrl: 'https://i.ibb.co/wL2fBMj/phone-4.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'iPhone E',
        imageUrl: 'https://i.ibb.co/rkTNs8w/phone-5.jpg',
        price: 40
      },
      {
        id: 6,
        name: 'iPhone F',
        imageUrl: 'https://i.ibb.co/gdhsHbP/phone-6.jpg',
        price: 25
      }
    ]
  }
]

export default SHOP_DATA;