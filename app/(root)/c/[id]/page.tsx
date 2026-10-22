import React from 'react';
import { notFound } from 'next/navigation';
import {getConversation} from '@/features/conversation/actions/conversation-action';
import {loadChatMessages} from "@/features/ai/actions/chat-store"
import  ConversationView  from '@/features/conversation/components/conversation-view';


type ConversationPageProps = {
    params: Promise<{id: string}>;
}

const page = async ({params}: ConversationPageProps) => {
    const {id} = await params;

    try{
        await getConversation(id)
    }catch (error){
        notFound()
    }

    const initialMessages = await loadChatMessages(id);

  return (
    <ConversationView
    key={id}
    conversationId={id}
    initialMessages={initialMessages}
    />
    
  )
}

export default page;