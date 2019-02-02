import React from 'react'

export default function MissionKey({ textPos, textNeg }) {
  return (
    <div className="my-3">
      <p>
        <span className="px-3 mr-2 bg-success"/> = {textPos}
        <span className="px-3 ml-2 bg-danger"/> = {textNeg}
      </p>
    </div>
  )
}
