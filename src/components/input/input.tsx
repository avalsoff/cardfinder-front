import React, { SyntheticEvent } from 'react'
import { noop } from '../../lib/noop'
import * as S from './styles'

type Props = {
  onChange?: (event: SyntheticEvent<HTMLInputElement>) => void
  value?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  onChange = noop,
  value,
  ...inputAttrs
}: Props) => <S.Input {...inputAttrs} />
