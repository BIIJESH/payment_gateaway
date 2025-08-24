export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Broccoli",
    price: 180, // NPR per kg
    image: "https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_960_720.png?w=300&h=300&fit=crop",
    description: "Fresh, crisp broccoli packed with nutrients and flavor.",
    category: "Vegetable"
  },
  {
    id: 2,
    name: "Apple",
    price: 250, // NPR per kg
    image: "https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_1280.jpg",
    description: "Juicy, sweet apples perfect for snacking or baking.",
    category: "Fruit"
  },
  {
    id: 3,
    name: "Banana",
    price: 120, // NPR per dozen
    image: "https://cdn.pixabay.com/photo/2014/04/16/09/58/banana-325461_960_720.jpg",
    description: "Ripe, energy-rich bananas full of natural sweetness.",
    category: "Fruit"
  },
  {
    id: 4,
    name: "Tomato",
    price: 90, // NPR per kg
    image: "https://cdn.pixabay.com/photo/2019/07/11/10/14/cherry-tomato-4330441_640.jpg",
    description: "Fresh red tomatoes ideal for salads and cooking.",
    category: "Vegetable"
  },
  {
    id: 5,
    name: "Orange",
    price: 220, // NPR per kg
    image: "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_640.jpg",
    description: "Citrusy and refreshing oranges rich in Vitamin C.",
    category: "Fruit"
  },
  {
    id: 6,
    name: "Carrot",
    price: 100, // NPR per kg
    image: "https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184_640.jpg",
    description: "Crunchy and sweet carrots packed with beta-carotene.",
    category: "Vegetable"
  },
  {
    id: 7,
    name: "Cabbage",
    price: 80, // NPR per piece
    image: "https://cdn.pixabay.com/photo/2018/10/03/22/08/kohl-3722517_1280.jpg",
    description: "Leafy green cabbage perfect for stir-fries and salads.",
    category: "Vegetable"
  },
  {
    id: 8,
    name: "Mango",
    price: 300, // NPR per kg
    image: "https://cdn.pixabay.com/photo/2016/07/22/02/58/mango-1534061_640.jpg",
    description: "Delicious and juicy mangoes full of tropical flavor.",
    category: "Fruit"
  }
];
