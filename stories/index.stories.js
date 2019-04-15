    
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { TextComponent } from './../components/atoms/text.component'

storiesOf('Welcome', module).add('to Storybook', () => (
  <TextComponent>Teste</TextComponent>
))
