import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversations } from '../../../../Store/App/messaging/selectors'
import { setConversations } from '../../../../Store/App/messaging/slice'
import ChatListItem from './ChatListItem'
import SearchBox from './SearchBox'

function ChatList() {

    const dispatch = useDispatch()
    const conversations = useSelector(selectConversations)
    const loading= true;
    const chatListItems = [
        {
            image: "https://i.imgur.com/aq39RMA.jpg",
            name: "Jessica Koel",
            id: "1",
            previewMsg: "Hey, Joel, I here to help you out please tell me",
            time: "11:2"
        },
        {
            image: "https://i.imgur.com/eMaYwXn.jpg",
            name: "Komeial Bolger",
            id: "2",
            previewMsg: "I will send you all documents as soon as possible",
            time: "12:2"
        },
        {
            image: "https://i.imgur.com/zQZSWrt.jpg",
            name: "Tamaara Suiale",
            id: "34",
            previewMsg: "Are you going to business trip next week",
            time: "8:26"
        },
        {
            image: "https://i.imgur.com/agRGhBc.jpg",
            name: "Sam Nielson",
            id: "3",
            previewMsg: "I suggest to start new business soon",
            time: "7:16"
        },
        {
            image: "https://i.imgur.com/uIgDDDd.jpg",
            name: "Caroline Nexon",
            id: "4",
            previewMsg: "We need to start new reseatch center.",
            time: "9:26"
        },
        {
            image: "https://i.imgur.com/tT8rjKC.jpg",
            name: "Patrick Koeler",
            id: "5",
            previewMsg: "May be yes, may be no.",
            time: "3:26"
        },
        {
            image: "https://i.imgur.com/aq39RMA.jpg",
            name: "Jessica Koel",
            id: "6",
            previewMsg: "Hey, Joel, I here to help you out please tell me",
            time: "11:2"
        },
        {
            image: "https://i.imgur.com/eMaYwXn.jpg",
            name: "Komeial Bolger",
            id: "7",
            previewMsg: "I will send you all documents as soon as possible",
            time: "12:2"
        },
        {
            image: "https://i.imgur.com/zQZSWrt.jpg",
            name: "Tamaara Suiale",
            id: "8",
            previewMsg: "Are you going to business trip next week",
            time: "8:26"
        },
        {
            image: "https://i.imgur.com/agRGhBc.jpg",
            name: "Sam Nielson",
            id: "9",
            previewMsg: "I suggest to start new business soon",
            time: "7:16"
        },
        {
            image: "https://i.imgur.com/uIgDDDd.jpg",
            name: "Caroline Nexon",
            id: "10",
            previewMsg: "We need to start new reseatch center.",
            time: "9:26"
        },
        {
            image: "https://i.imgur.com/tT8rjKC.jpg",
            name: "Patrick Koeler",
            id: "11",
            previewMsg: "May be yes, may be no.",
            time: "3:26"
        },
    ]
    const getMessages = () => {
            // const conversations = await axios.get("/getConversations", userId)
            // dispatch(setConversations(conversations))
            dispatch(setConversations(chatListItems))
        }
       
    useEffect(() => {
        
        getMessages(); // eslint-disable-next-line 
    },[loading]);


    return (
        <div>
            <SearchBox />
            <div className=" mx-auto rounded-lg  overflow-hidden md:max-w-lg px-5">
                <div className="flex">
                    <div className="w-full ">
                        {
                            conversations.map(({ image, name, id, previewMsg, time }) => (
                                <ChatListItem key={id} img={image} id={id} name={name} time={time} previewMsg={previewMsg} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(ChatList)
