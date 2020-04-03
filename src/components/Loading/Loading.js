import React from 'react'
import LoadingSpinner, { LoadingOverlay } from './Loading.style'

const Loading = ({ ...props }) => (
  <LoadingOverlay>
    <LoadingSpinner {...props} />
  </LoadingOverlay>
)

export default Loading
