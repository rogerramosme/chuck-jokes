import React from 'react'
import { string, func } from 'prop-types'
import { ROUTES } from 'routes'
import { Content, ErrorTitle, ErrorSubtitle, ErrorDescription, Button, Link } from './Error.style'

export default function Error({ buttonText, handleError, errorMessage }) {
  return (
    <Content>
      <ErrorTitle>There is Something Wrong</ErrorTitle>
      <ErrorSubtitle>And this isn&apos;t a joke</ErrorSubtitle>
      <ErrorDescription>{errorMessage}</ErrorDescription>
      {buttonText && <Button onClick={handleError}>{buttonText}</Button>}
      <Link to={ROUTES.INTRO}>
        <Button outline={buttonText.length}>Go Home</Button>
      </Link>
    </Content>
  )
}

Error.propTypes = {
  buttonText: string,
  handleError: func,
  errorMessage: string
}

Error.defaultProps = {
  buttonText: '',
  handleError: () => {},
  errorMessage: ''
}
