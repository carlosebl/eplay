import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  border-radius: 8px;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'tranparent'};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  background-color: transparent;
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
