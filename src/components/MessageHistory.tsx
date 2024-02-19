import React, { FC } from 'react'
import MessageType from '../ts/types'
import { Message } from './Message';
import { Response } from './Response';
import { Typing } from './Typing';

interface MessageHistoryProps {
    list: MessageType[]
}

export const MessageHistory:FC<MessageHistoryProps> = ({list = []}) => {
    console.log(list);
    
  return (
    <>
        {list.length > 0 && 
            list.map(el => (
                el.type === 'message' 
                ? <Message from={el.from} message={el} key={el.id}/>
                : el.type === 'response'
                ? <Response from={el.from} message={el} key={el.id}/>
                : <Typing from={el.from} message={el} key={el.id}/>
            ))
        }
    </>
  )
}
