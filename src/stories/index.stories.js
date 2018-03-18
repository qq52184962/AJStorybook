/* eslint-disable react/react-in-jsx-scope */

import {
  storiesOf
} from '@storybook/vue'
import {
  action
} from '@storybook/addon-actions'
import {
  linkTo
} from '@storybook/addon-links'

import BComponent from './BComponent.vue'
import BlocklyComponent from './BlocklyComponent.vue'


storiesOf('Blockly Component', module)
  .add('Demo', () => ({
    components: {
      BlocklyComponent
    },
    template: '<blockly-component></blockly-component>',
    methods: {
      action: action('clicked')
    }
  })).add('BComponent', () => ({
    components: {
      BComponent
    },
    render() {
      return <b-component onClick = { this.action } > With JSX </b-component>
    },
    methods: {
      action: linkTo('clicked')
    }
  }));

/* eslint-enable react/react-in-jsx-scope */