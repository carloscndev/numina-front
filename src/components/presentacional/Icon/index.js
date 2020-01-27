// Import Modules
import React from 'react'
import PropTypes from 'prop-types'

const HamburguerIcon = ({ children, color, height, width }) => (
  <svg fill={color} width={width} height={height} viewBox='0 0 24 24'>
    {children}
  </svg>
)

HamburguerIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

HamburguerIcon.defaultProps = {
  color: '#000',
  height: '24',
  width: '24'
}

export default HamburguerIcon
