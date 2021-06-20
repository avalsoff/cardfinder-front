import React, { MouseEvent } from 'react'
import * as S from './styles'

export type ButtonVariants = 'primary' | 'secondary'
export type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  text?: string
  variant?: ButtonVariants
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  onClick,
  text = 'Продолжить!',
  variant = 'primary',
  ...buttonAttrs
}: ButtonProps) => (
  <S.Button className={variant} onClick={onClick} {...buttonAttrs}>
    <S.Text>{text}</S.Text>
  </S.Button>
)
