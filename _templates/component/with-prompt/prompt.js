// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'select',
    name: 'component_type',
    message: 'Select component type',
    choices: ['button', 'other', 'scroll-anim'],
  },
  {
    type: 'input',
    name: 'number',
    message: 'Input component number',
  },
];
