const images = require.context('../assets/images', true, /\.png$/)

const heroImg = {
  image: [
    {
      src: images('./nike-red.png'),
    },
    { src: images('./nike-blue.png') 
  }
  ]
}
export default heroImg;
