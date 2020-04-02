import styled from 'styled-components'

export default styled.button`
  font-size: ${props => props.theme.fonts.button.fontSize};
  font-weight: ${props => props.theme.fonts.weight.normal};
  height: 60px;
  padding: 0 24px;
  border-radius: ${props => props.theme.defaults.radius};
  border: none;
  user-select: none;
  cursor: pointer;
  transition: all ${props => props.theme.defaults.transitionTime};

  &:hover,
  &focus {
    background-color: ${props => props.theme.colors.grey};
  }

  &:focus {
    outline: 2px dotted ${props => props.theme.colors.blue};
    outline-offset: 8px;
  }

  ${props =>
    props.outline
      ? `
    background-color: 'transparent';
    color: ${props.theme.colors.black};
    `
      : `
    background-color: ${props.theme.colors.black};
    color: ${props.theme.colors.white};
  `}
`
