import { filterData, searchData} from "../utils";

describe('filterData', () => {
    test('should sort products by price', () => {
        const products = [
            {
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
        ]

        const sortByLowToHigh = 'LOW_TO_HIGH'
        const filteredProductsLowToHigh = filterData(products, sortByLowToHigh)

        expect(filteredProductsLowToHigh).toEqual([
            {
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
        ])

        const sortByHighToLow = 'HIGH_TO_LOW'
        const filterProductsHighToLow = filterData(products, sortByHighToLow)

        expect(filterProductsHighToLow).toEqual([
            {
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
        ])

        const sortByClear = 'CLEAR'
        const filterProductsClear = filterData(products, sortByClear)
        
        expect(filterProductsClear).toEqual(products)
    })
    test('should filter products by category', () => {
        const products = [
            {
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
        ]

        const categoryOne = {
            'Shounen' : false,
            'Seinen' : false,
            'Shoujo' : true,
        }
        const filterProductsOne = filterData(products, '', '', categoryOne)

        expect(filterProductsOne).toEqual([
            {
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
        ])

        const categoryTwo = {
            'Shounen' : false,
            'Seinen' : false,
            'Shoujo' : false,
        }

        const filterProductsTwo = filterData(products, '', '', categoryTwo)
        expect(filterProductsTwo).toEqual([])
    })
})

describe('searchData', () => {
    test('should search and filter products based on input search term', () => {
        const products = [
            {
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
        ]
        
        const searchTermOne = 'a'
        const filterProductsOne = searchData(products, searchTermOne)

        expect(filterProductsOne).toEqual(products)

        const searchTermTwo = 'attack on titan'
        const filterProductsTwo = searchData(products, searchTermTwo)
        expect(filterProductsTwo).toEqual([
            {
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
        ])

        const searchTermThree = ''
        const filterProductsThree = searchData(products, searchTermThree)
        expect(filterProductsThree).toEqual(products)
    })
})