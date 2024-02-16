import React, { FC } from 'react'
import MessageType, { Name } from '../ts/types'

interface TypingProps {
    from: Name
    message: MessageType
}

export const Typing:FC<TypingProps> = ({from, message}) => {
  return (
    <li>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
      <span className="message-data-time">{message.time}</span>
    </div>
    <i className="fa fa-circle online"></i>
    <i className="fa fa-circle pale"></i>
    <i className="fa fa-circle transparent"></i>
  </li>
  )
}
