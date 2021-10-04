import React from 'react'
import ChatListItem from './ChatListItem'
import SearchBox from './SearchBox'

function ChatList() {

    const chatListItems = [
        {
            img: "https://i.imgur.com/aq39RMA.jpg",
            name: "Jessica Koel",
            id: "1",
            previewMsg: "Hey, Joel, I here to help you out please tell me",
            time: "11:2"
        },
        {
            img: "https://i.imgur.com/eMaYwXn.jpg",
            name: "Komeial Bolger",
            id: "2",
            previewMsg: "I will send you all documents as soon as possible",
            time: "12:2"
        },
        {
            img: "https://i.imgur.com/zQZSWrt.jpg",
            name: "Tamaara Suiale",
            id: "3",
            previewMsg: "Are you going to business trip next week",
            time: "8:26"
        },
        {
            img: "https://i.imgur.com/agRGhBc.jpg",
            name: "Sam Nielson",
            id: "3",
            previewMsg: "I suggest to start new business soon",
            time: "7:16"
        },
        {
            img: "https://i.imgur.com/uIgDDDd.jpg",
            name: "Caroline Nexon",
            id: "4",
            previewMsg: "We need to start new reseatch center.",
            time: "9:26"
        },
        {
            img: "https://i.imgur.com/tT8rjKC.jpg",
            name: "Patrick Koeler",
            id: "5",
            previewMsg: "May be yes, may be no.",
            time: "3:26"
        },
        {
            img: "https://i.imgur.com/aq39RMA.jpg",
            name: "Jessica Koel",
            id: "6",
            previewMsg: "Hey, Joel, I here to help you out please tell me",
            time: "11:2"
        },
        {
            img: "https://i.imgur.com/eMaYwXn.jpg",
            name: "Komeial Bolger",
            id: "7",
            previewMsg: "I will send you all documents as soon as possible",
            time: "12:2"
        },
        {
            img: "https://i.imgur.com/zQZSWrt.jpg",
            name: "Tamaara Suiale",
            id: "8",
            previewMsg: "Are you going to business trip next week",
            time: "8:26"
        },
        {
            img: "https://i.imgur.com/agRGhBc.jpg",
            name: "Sam Nielson",
            id: "9",
            previewMsg: "I suggest to start new business soon",
            time: "7:16"
        },
        {
            img: "https://i.imgur.com/uIgDDDd.jpg",
            name: "Caroline Nexon",
            id: "10",
            previewMsg: "We need to start new reseatch center.",
            time: "9:26"
        },
        {
            img: "https://i.imgur.com/tT8rjKC.jpg",
            name: "Patrick Koeler",
            id: "11",
            previewMsg: "May be yes, may be no.",
            time: "3:26"
        },
    ]
    return (
        <div>
            <SearchBox />

            <div className=" mx-auto rounded-lg  overflow-hidden md:max-w-lg px-5">

                <div className="flex">
                    <div className="w-full ">
                        {
                            chatListItems.map(({ img, name, id, previewMsg, time }) => (
                                <ChatListItem img={img} id={id} name={name} time={time} previewMsg={previewMsg} />
                            ))
                        }
                        <ChatListItem img={"https://i.imgur.com/agRGhBc.jpg"} id={"Tara"} name={"Tarachand"} time={"20:30"} previewMsg={"bola tha to kya bc aisa thodi hota h"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatList
