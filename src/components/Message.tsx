import React, { FC } from 'react'
import MessageType, { Name } from '../ts/types'

interface MessageProps {
    from: Name
    message: MessageType
}

export const Message:FC<MessageProps> = ({from, message}) => { 
  return (
    <li>
        <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
            <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">
            {message.text}
        </div>
    </li>
  )
}
