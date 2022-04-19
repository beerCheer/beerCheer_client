import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const titleStyle = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200,
  color: 'red',
})

const Home: NextPage = () => {
  return (
    <Emotion>
      <h1 css={titleStyle}>red text</h1>
    </Emotion>
  )
}

export default Home

const Emotion = styled.div`
  background: #cceecc;
`
