import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ImageStyle = (width = 100, height = 100) => {
  return {
    width,
    height,
    objectFit: 'cover'
  }
}

export default class Image extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { src, isSelected, onImageClick, width, height } = this.props
    return (
      <div
                className={`responsive${isSelected ? ' selected' : ''}`}
        onClick={onImageClick}
      >
        <img
                    src={src}
          className={`thumbnail${isSelected ? ' selected' : ''}`}
          style={ImageStyle(width, height)}
        />
        <div className='checked'>
          {/* <img src={imgCheck} style={{ width: 75, height: 75, objectFit: "cover" }}/> */}
          <div className='icon' />
        </div>
      </div>
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool
}
