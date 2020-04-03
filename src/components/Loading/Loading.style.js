import styled from 'styled-components'

export const LoadingOverlay = styled.div`
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 55px;
  height: 55px;
  z-index: 999;
  background-color: ${props => props.theme.colors.yellow};
`
export default styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top: 4px solid ${props => props.theme.colors.black};
  border-left: 4px solid ${props => props.theme.colors.black};
  border-radius: 50%;
  animation: rotate 2s linear infinite;
`
