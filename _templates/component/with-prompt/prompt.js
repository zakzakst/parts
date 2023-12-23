// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'select',
    name: 'component_type',
    message: 'Select component type',
    choices: [
      'accordion',
      'button',
      'card',
      'carousel',
      'contact',
      'faq',
      'footer',
      'form',
      'heading',
      'hero',
      'loader',
      'menu',
      'modal',
      'news-list',
      'other',
      'scroll-anim',
      'section',
      'service-list',
      'start-anim',
      'utility',
    ],
  },
  {
    type: 'input',
    name: 'number',
    message: 'Input component number',
  },
];
