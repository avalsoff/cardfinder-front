import React from 'react'
import * as S from './styles'

type Props = {
  name?: string
}

const EMPTY_NAME = 'Пусто'

export const Card = ({ name }: Props) => (
  <S.Card>
    <S.Name>{name || EMPTY_NAME}</S.Name>
  </S.Card>
)
