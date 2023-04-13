export interface ICategories {
  id: number;
  img: string;
  title: string;
}

const categories: ICategories[] = [
  {
    id: 1,
    img: '../assets/img/categories/popularRing.svg',
    title: 'Кольцо',
  },
  {
    id: 2,
    img: '../assets/img/categories/earrings.svg',
    title: 'Серьги',
  },
  {
    id: 3,
    img: '../assets/img/categories/engagementRings.svg',
    title: 'Помолвочные кольца',
  },
  {
    id: 4,
    img: '../assets/img/categories/bracelets.svg',
    title: 'Браслеты',
  },
  {
    id: 5,
    img: '../assets/img/categories/necklace.svg',
    title: 'Колье и подвески',
  },
  {
    id: 6,
    img: '../assets/img/categories/watch.svg',
    title: 'Часы',
  },
];

export default categories;
