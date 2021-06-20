import styled from 'styled-components'

export const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin: 14px 16px;
`

export const Button = styled.button`
  padding: 0;
  cursor: pointer;
  border: 1px solid #0057b6;
  border-radius: 12px;
  background: #0057b6;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background: #086bd4;
  }

  &.secondary {
    background: white;

    &:hover {
      background: white;
      border-color: #086bd4;
    }

    ${Text} {
      color: #0057b6;
      font-weight: 400;
    }
  }
`
