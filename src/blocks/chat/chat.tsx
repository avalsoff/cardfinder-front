import React from 'react'
import { Button, Input } from '../../components'
import * as S from './styles'

type Props = {
  test?: string
}

export const Chat = ({ test }: Props) => (
  <S.Chat>
    <S.ChatBody>sdf</S.ChatBody>
    <S.Bottom>
      <Input />
      <Button text="Отправить" variant="secondary" />
    </S.Bottom>
  </S.Chat>
)
