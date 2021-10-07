import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom'
import { setCurrentConversation } from '../../../../Store/App/messaging/slice';

type props = {
    image: string;
    name: string;
    id: string;
    previewMsg?: string;
    time: string;
}
function ChatListItem({ image, name, id, previewMsg, time }: props) {
    let { url } = useRouteMatch()
    const dispatch = useDispatch()

    console.log(process.env.REACT_APP_SERVER_BASE_URL);


    const handleSelectConversation = () => {
        const currentConversation = {
            id: id,
            name: name,
            image: image,
            previewMsg: previewMsg,
            time: time
        }
        dispatch(setCurrentConversation(currentConversation))
    }
    return (
        <Link to={`${url}/${id}`} onClick={handleSelectConversation}>
        <li className="flex justify-between items-center bg-white mb-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                <div className="flex ml-1"> <img alt="avatar-img" src={image} width="40" height="40" className="rounded-full" />
                    <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">{name}</span> <span className="text-sm text-left text-gray-400 truncate w-36">{previewMsg}</span> </div>
            </div>
            <div className="flex flex-col items-center"> <span className="text-gray-300">{time}</span> <i className="fa fa-star text-green-400"></i> </div>
        </li>
        </Link>
    )
}

export default ChatListItem
