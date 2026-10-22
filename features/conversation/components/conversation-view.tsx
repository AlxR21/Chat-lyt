"use client";
import { type UIMessage } from 'ai';
import React from 'react'

type ConversationViewProps = {
    conversationId: string,
    initialMessages: UIMessage[];
}
const ConversationView = ({conversationId, initialMessages}: ConversationViewProps) => {
  return (
    <div>ConversationView</div>
  )
}

export default ConversationView