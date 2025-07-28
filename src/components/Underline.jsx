import React from 'react'

const Underline = ({color = "bg-blue-500", width = "w-16", className = ""}) => {
  return (
<span className={`block ${width} h-1 ${color} mx-auto mt-2 rounded ${className}`}></span>
  )
}

export default Underline
