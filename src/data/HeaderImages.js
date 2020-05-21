const images = require.context('../assets/images', true, /\.png$/)

const heroImg = {
  image: [
     {
      src: images('./air-vapormax-plus-mens-shoe.png')

    },
     {
      src: images('./air-max-2090-womens-shoe.png')

    },
    {
      src: images('./lebron-17-big-kids-shoe.png')

    },
    {
      src: images('./air-max-dia-womens-shoe.png')
    },
    {
      src: images('./air-max-97-tortoise-shell-womens-shoe.png')
    },
    {
      src: images('./nike-red.png'),
    },
  ]
}
export default heroImg;
