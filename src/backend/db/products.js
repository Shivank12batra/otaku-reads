import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/513cm8JktAL._SX331_BO1,204,203,200_.jpg",
    name: "One Piece",
    author: "Eiichiro Oda",
    price: 299,
    originalPrice: 399,
    isBestSeller: true,
    isSoldOut: false,
    category: "Shounen",
    rating: 5,
  },
  {
    _id: uuid(),
    img: "https://kbimages1-a.akamaihd.net/00b22f7a-2bbf-4deb-a49a-817220431611/353/569/90/False/attack-on-titan-4-2.jpg",
    name: "Attack On Titan",
    author: "Hajime Isayama",
    price: 399,
    originalPrice: 599,
    isBestSeller: true,
    isSoldOut: true,
    category: "Shounen",
    rating: 5,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71QYLrc-IQL.jpg",
    name: "Naruto",
    author: "Masashi Kishimoto",
    price: 200,
    originalPrice: 315,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61GWN9NPJvL.jpg",
    name: "Fulltime Alchemist",
    author: "Hiromu Arakawa",
    price: 100,
    originalPrice: 199,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91KS3nAZfRL.jpg",
    name: "Vineland Saga",
    author: "Makoto Yukimura",
    price: 50,
    originalPrice: 115,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91D07epNE9L.jpg",
    name: "Berserk",
    author: "Kentaro Miura",
    price: 215,
    originalPrice: 350,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/815cktznRcL.jpg",
    name: "Akira",
    author: "Eiichiro Oda",
    price: 130,
    originalPrice: 200,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/8125DI58M+L.jpg",
    name: "Haiyku!!",
    author: "Haruichi Furudate",
    price: 70,
    originalPrice: 149,
    isBestSeller: false,
    isSoldOut: true,
    category: "Seinen",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41ZNPThtZLL._SX346_BO1,204,203,200_.jpg",
    name: "Fruits Basket",
    author: "Natsuki Takaya",
    price: 50,
    originalPrice: 79,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shoujo",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81K7vi5x2TL.jpg",
    name: "Kino's Journey",
    author: "Keiichi Sigsawa",
    price: 71,
    originalPrice: 120,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shoujo",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51PwooY8JkL.jpg",
    name: "One-Punch Man",
    author: "Yusuke Murata",
    price: 315,
    originalPrice: 420,
    isBestSeller: true,
    isSoldOut: true,
    category: "Shounen",
    rating: 5,
  },
  {
    _id: uuid(),
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617389215i/55575967.jpg",
    name: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    price: 130,
    originalPrice: 200,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://i.pinimg.com/564x/5a/d7/65/5ad76564f4ab7b213bd335e59e1ca925.jpg",
    name: "Slam Drunk",
    author: "Takehiko Inoue",
    price: 75,
    originalPrice: 99,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51PhW2p60OL.jpg",
    name: "My Hero Academia",
    author: "Kohei Horikoshi",
    price: 100,
    originalPrice: 150,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649508834l/60619439.jpg",
    name: "The Tatami Galaxy",
    author: "Tomihiko Morimi",
    price: 50,
    originalPrice: 130,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shoujo",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/M/MV5BMmMzOWNhNTYtYmY0My00OGJiLWIzNDUtZWRhNGY0NWFjNzFmXkEyXkFqcGdeQXVyNjUxMDQ0MTg@._V1_.jpg",
    name: "Perfect Blue",
    author: "Yoshikazu Takeuchi",
    price: 215,
    originalPrice: 277,
    isBestSeller: true,
    isSoldOut: false,
    category: "Seinen",
    rating: 5,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71w4lwcojEL.jpg",
    name: "Devilman Cry",
    author: "Yoshikazu Takeuchi",
    price: 300,
    originalPrice: 450,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51U32pESRlL._SX342_SY445_QL70_ML2_.jpg",
    name: "Tokyo Revengers",
    author: " Ken Wakui",
    price: 110,
    originalPrice: 139,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81tZrYS1DvS.jpg",
    name: "Oresama Teacher",
    author: "Izumi Tsubaki",
    price: 50,
    originalPrice: 79,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shoujo",
    rating: 1,
  },
  {
    _id: uuid(),
    img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-86556-BlackClover_GN24_C1_Web-3-O7sU0ZfiLDytGRHme_CePA.jpg",
    name: "Black Clover",
    author: "Yuki Tabata",
    price: 120,
    originalPrice: 399,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/517TuvmxkxL._SX331_BO1,204,203,200_.jpg",
    name: "Bleach",
    author: "Tite Kubo",
    price: 210,
    originalPrice: 260,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91SLpHwjp8L.jpg",
    name: "Dr. Stone",
    author: "Riichiro Inagaki",
    price: 320,
    originalPrice: 350,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51YrhkB2wkL.jpg",
    name: "Hunter x Hunter",
    author: "Yoshihiro Togashi",
    price: 410,
    originalPrice: 499,
    isBestSeller: true,
    isSoldOut: true,
    category: "Seinen",
    rating: 5,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/514a9YSY1+L._SX329_BO1,204,203,200_.jpg",
    name: "Mushishi",
    author: "Yuki Urushibara",
    price: 115,
    originalPrice: 149,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41vP2ZtqYfL._SX351_BO1,204,203,200_.jpg",
    name: "Gantz",
    author: "Hiroya Oku",
    price: 75,
    originalPrice: 99,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61FgaySLtBL.jpg",
    name: "Blue Exorcist",
    author: "Kazue Kato",
    price: 50,
    originalPrice: 80,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/518-TGR6tgL._SX331_BO1,204,203,200_.jpg",
    name: "Black Lagoon",
    author: "Rei Hiroe",
    price: 117,
    originalPrice: 150,
    isBestSeller: false,
    isSoldOut: false,
    category: "Seinen",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71t6FHJhxHL.jpg",
    name: "Blue Lock",
    author: "Yusuke Nomura",
    price: 350,
    originalPrice: 500,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81diu2yB8YL.jpg",
    name: "Bakuman",
    author: "Tsugumi Ohba",
    price: 170,
    originalPrice: 208,
    isBestSeller: false,
    isSoldOut: false,
    category: "Shounen",
    rating: 2
  },
];
