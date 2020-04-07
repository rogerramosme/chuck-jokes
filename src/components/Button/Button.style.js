import styled from 'styled-components'

export default styled.button`
  font-size: ${props => props.theme.fonts.button.fontSize};
  font-weight: ${props => props.theme.fonts.weight.normal};
  display: inline-flex;
  height: 60px;
  padding: 0 24px;
  border-radius: ${props => props.theme.defaults.radius};
  border: none;
  user-select: none;
  cursor: pointer;
  transition: all ${props => props.theme.defaults.transitionTime};
  text-decoration: none;
  justify-content: center;
  align-items: center;
  background-color: ${({ outline, theme }) => (outline ? 'transparent' : theme.colors.black)};
  color: ${({ outline, theme }) => (outline ? theme.colors.black : theme.colors.white)};
  border: solid 3px ${({ outline, theme }) => (outline ? theme.colors.black : 'transparent')};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${({ outline, theme }) => (outline ? theme.colors.black : theme.colors.grey)};
  }

  &:focus {
    outline: 2px dotted ${props => props.theme.colors.blue};
    outline-offset: 8px;
  }
`
