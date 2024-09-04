import { IMessage } from "@/store/chat-store"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

type ChatBubbleAvatarProps = {
    message : IMessage,
    isMember : boolean,
    isGroup : true | false | undefined,
}

const ChatBubbleAvatar = ({message,isMember,isGroup}:ChatBubbleAvatarProps) => {
    if(!isGroup) return null
    return (
        <Avatar className="overflow-visible relative">
            {message.sender.isOnline && isMember && (
                <div className="absolute top-0 right-[8px] w-2 h-2 bg-green-500 rounded-full border-2 border-foreground "></div>
            )}
            <AvatarImage src={message.sender?.image} className="rounded-full object-cover w-8 h-8" />
            <AvatarFallback className="w-8 h-8">
                <div className="animate-pulse bg-gray-primary rounded-full"></div>
            </AvatarFallback>
        </Avatar>
    )
}

export default ChatBubbleAvatar;