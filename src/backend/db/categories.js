import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: "https://www.entoin.com/images/shou1.jpg",
    categoryName: "Shounen",
    description:
      "Shounen anime and manga typically target young male audiences and are known for their action-packed storylines, featuring themes of adventure, coming-of-age, and fighting against seemingly impossible odds.",
  },
  {
    _id: uuid(),
    img: "https://www.listchallenges.com/f/lists/690768b4-2977-459e-bd2b-0761fcb29cd9.jpg",
    categoryName: "Shoujo",
    description:
      "Shoujo anime and manga are targeted towards young female audiences, and often feature romance, drama, and relationships as central themes. They may also focus on self-discovery and personal growth.",
  },
  {
    _id: uuid(),
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/Record-of-Ragnarok-Berserk-2016-and-Tokyo-Ghoul.jpg",
    categoryName: "Seinen",
    description:
      "Seinen anime and manga are aimed at older male audiences and are typically more mature in content, often dealing with more serious themes such as politics, sexuality, and violence.",
  }
];
