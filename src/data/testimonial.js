const images = require.context('../assets/images', true, /\.jpg$/);

const testimonialSection = {
  testimonial: [
    {
      id: 1,
      caption: "Modern engineered sneakers",
      testimony:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptatem, ab vitae laboriosam corporis veritatis eum, iste fuga minus voluptates at laudantium ad natus culpa consequuntur',
      avatar: images('./testimonial-avatar.jpg'),
      name: 'Anita Browns',
      title: 'Fashion Designer'
    },
    {
      id: 2,
      caption: "They've got perfect Sneakers",
      testimony:
        'Lorem ipsum dolor, adipisicing elit. Temporibus voluptatem, ab vitae laboriosam corporis veritatis eum, iste fuga minus voluptates at laudantium ad natus culpa consequuntur',
      avatar: images('./testimonial-avatar-2.jpg'),
      name: 'Jim Grey',
      title: 'Professional Photographer'
    },
    {
      id: 3,
      caption: "They've got perfect Sneakers",
      testimony:
        'Lorem ipsum dolor, adipisicing elit. Temporibus voluptatem, ab vitae laboriosam corporis veritatis eum, iste fuga minus voluptates at laudantium ad natus culpa consequuntur',
      avatar: images('./testimonial-avatar-3.jpg'),
      name: 'Jane Parker',
      title: 'Professor at Howard'
    }
  ]
};
export default testimonialSection;
