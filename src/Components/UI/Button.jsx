import React from 'react'

function Button({children, color="black", ...rest}) {
  return (
    <button className={`btn-${color}`} {...rest}>
      {children}
    </button>
  )
}

export default Button