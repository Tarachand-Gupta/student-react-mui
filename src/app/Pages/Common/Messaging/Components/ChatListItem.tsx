import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

type props = {
    img: string;
    name: string;
    id: string;
    previewMsg?: string;
    time: string;
}
function ChatListItem( {img, name, id, previewMsg, time}: props) {
    let { url } = useRouteMatch();

    return (
        <Link to={`${url}/${id}`}>
        <li className="flex justify-between items-center bg-white mb-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
            <div className="flex ml-1"> <img alt="avatar-img" src={img} width="40" height="40" className="rounded-full" />
                <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">{name}</span> <span className="text-sm text-gray-400 truncate w-32">{previewMsg}</span> </div>
            </div>
            <div className="flex flex-col items-center"> <span className="text-gray-300">{time}</span> <i className="fa fa-star text-green-400"></i> </div>
        </li>
        </Link>
    )
}

export default ChatListItem
