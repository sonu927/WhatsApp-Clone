import { getRelativeDateTime, isSameDay } from "@/lib/utils";
import { IMessage } from "@/store/chat-store";

type DateIndicatorProps = {
    message: IMessage,
    prevMessage?: IMessage,
}

const DateIndicator = ({message,prevMessage}:DateIndicatorProps) =>{
    return (
		<>
			{!prevMessage || !isSameDay(prevMessage._creationTime, message._creationTime) ? (
				<div className='flex justify-center'>
					<p className='text-sm text-gray-500 dark:text-gray-400 mb-2 p-1 z-50 rounded-md bg-white dark:bg-gray-primary'>
						{getRelativeDateTime(message, prevMessage)}
					</p>
				</div>
			) : null}
		</>
	);
}

export default DateIndicator;