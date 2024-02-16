import React, { FC } from 'react'
import MessageType, { Name } from '../ts/types'

interface ResponseProps {
    from: Name
    message: MessageType
}

export const Response:FC<ResponseProps> = ({from, message}) => {
  return (
    <li className="clearfix">
        <div className="message-data align-right">
            <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
            <span className="message-data-name">{from.name} </span>
            <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
            {message.text}
        </div>
  </li>
  )
}
