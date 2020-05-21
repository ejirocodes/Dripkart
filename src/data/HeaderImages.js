const images = require.context('../assets/images', true, /\.png$/)

const heroImg = {
  image: [
     {
      src: images('./air-vapormax-plus-mens-shoe.png'),
      title: 'Air Vapormax Plus',

    },
     {
      src: images('./air-max-2090-womens-shoe.png'),
      title: 'Air Max 2090',

    },
    {
      src: images('./lebron-17-big-kids-shoe.png'),
      title: 'LeBron 17',

    },
    {
      src: images('./air-max-dia-womens-shoe.png'),
      title: 'Air Max Dia',
    },
    {
      src: images('./air-max-97-tortoise-shell-womens-shoe.png'),
      title: 'Air Max 97',
    },
    {
      src: images('./nike-red.png'),
      title: 'Red Nike',
    },
  ]
}
export default heroImg;
