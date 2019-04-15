import React from 'react'

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-white hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
  >
    {children}
  </button>
)

export default Button
