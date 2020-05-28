const images = require.context('../assets/images', true, /\.jpg$/)

const testimonialSection = {
  testimonial: [{
    id: 1,
    caption: 'I\'ve never felt this confident',
    testimony: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptatem, ab vitae laboriosam corporis veritatis eum, iste fuga minus voluptates at laudantium ad natus culpa consequuntur',
    avatar: images('./testimonial-avatar.jpg'),
    name: 'Ejiro Asiuwhu',
    title: 'Front End Developer at Codekago'
  },
    {
    id: 2,
    caption: 'I\'ve never felt this confident',
    testimony: 'Lorem ipsum dolor, adipisicing elit. Temporibus voluptatem, ab vitae laboriosam corporis veritatis eum, iste fuga minus voluptates at laudantium ad natus culpa consequuntur',
    avatar: images('./testimonial-avatar.jpg'),
    name: 'Jim Grey',
    title: 'Stiker at Manchester United F.C.'
  },
  ]
}
export default testimonialSection;