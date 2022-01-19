import styled from '@emotion/styled'

export const Placeholder = styled.span`
  display: block;
  position: absolute;
  bottom: 8px;
  left: 20px;
  font-size: 18px;
  transition: 250ms linear;

  input:focus + & {
    bottom: 80%;
  }

  input:placeholder-shown + & {
    background-color: red;
  }

  input:not(:placeholder-shown).input:not(:focus) + & {
    bottom: 80%;
  }
`
