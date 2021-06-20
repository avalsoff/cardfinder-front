import React from 'react'

import { Chat } from '../../blocks/chat'
import { Card, L, Button } from '../../components'
import * as S from './styles'

const NAMES_MOCK = ['Вы', 'Другой игрок', '', '']

export const MainPage = () => {
  return (
    <L.Content>
      <S.Wrapper>
        <S.Row>
          <S.Cards>
            {NAMES_MOCK.map((name, idx) => (
              <Card name={name} key={idx} />
            ))}
          </S.Cards>
        </S.Row>
        <S.Row>
          <Button text="Начать игру" />
          <Chat />
        </S.Row>
      </S.Wrapper>
    </L.Content>
  )
}
