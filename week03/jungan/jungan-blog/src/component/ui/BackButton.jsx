import React from 'react'

export default function BackButton(isWriting, postSelected) {
    const back = () => {
        isWriting(false),
        postSelected(null)
    }

  return (
    <div>
        <button onClick={back}>목록</button>
    </div>
  )
}
