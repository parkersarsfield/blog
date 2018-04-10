import React from 'react'
import css from 'glamor'

const SlantedBg = ({ color, isTop, slantDegree, origin }) => {
  let style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: color || 'red',
    transform: `skewY(-${slantDegree}deg)`,
    transformOrigin: origin,
    zIndex: -1,
  }

  return <div style={style} />
}

export default SlantedBg
