import React from 'react'

export const ChevronRight = props => (
  <svg
    style={{
      display: 'intline-block',
      marginBottom: '-4px',
      marginLeft: '6px',
    }}
    width={11}
    height={18}
    viewBox="0 0 11 18"
    fill="none"
    {...props}
  >
    <path
      d="M2 2l7 7-7 7"
      stroke="#2D2F7F"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)