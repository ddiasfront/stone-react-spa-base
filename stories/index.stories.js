    
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { TextComponent } from '../src/components/atoms/Text.component'
import { TitleComponent } from '../src/components/atoms/Title.component'
import { DescriptionPrice } from '../src/components/molecules/DescriptionPrice.component'
import '../src/scss/style.scss'

storiesOf('Componente de Texto', module).add('Renderiza paragrafo', () => (
  <TextComponent>Render Paragrafo</TextComponent>
))

storiesOf('Componente de Texto', module).add('Renderiza span', () => (
  <TextComponent texttype={"span"}>Render Span</TextComponent>
))

storiesOf('Componente de Texto', module).add('Renderiza com classe', () => (
  <TextComponent texttype={"span"} styleClass={"classtest"}>Render Span</TextComponent>
))

storiesOf('Componente de preço e descrição', module).add('Preco e descrição', () => (
  <div class="pricedescription">
    <DescriptionPrice 
      description={"descrição do livro"} 
      price={123}
      styleClassDesc={"styleclassdesc"}
      styleClassPrice={"styleclassprice"}
    />
  </div>
))
