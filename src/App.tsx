import styled from 'styled-components'
import { Card } from './components/card'

const S = {
  Container: styled.div`
    display: flex;
  `,
}

export const App = () => {
  return (
    <S.Container>
      {Array.from({ length: 12 }).map((_, idx) => (
        <Card key={idx} />
      ))}
    </S.Container>
  )
}
