import React from 'react'

function ChatList() {

    const dummyListItems = () => {
        return (
            <ul>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Jessica Koel</span> <span className="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">11:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2  pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/eMaYwXn.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Komeial Bolger</span> <span className="text-sm text-gray-400 truncate w-32">I will send you all documents as soon as possible</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">12:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Tamaara Suiale</span> <span className="text-sm text-gray-400 truncate w-32">Are you going to business trip next week</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">8:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Sam Nielson</span> <span className="text-sm text-gray-400  truncate w-32">I suggest to start new business soon</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">7:16</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/uIgDDDd.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Caroline Nexon</span> <span className="text-sm text-gray-400 truncate w-32">We need to start new reseatch center.</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">9:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/tT8rjKC.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Patrick Koeler</span> <span className="text-sm text-gray-400 truncate w-32">May be yes, may be no.</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">3:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Jessica Koel</span> <span className="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">11:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2  pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/eMaYwXn.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Komeial Bolger</span> <span className="text-sm text-gray-400 truncate w-32">I will send you all documents as soon as possible</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">12:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Tamaara Suiale</span> <span className="text-sm text-gray-400 truncate w-32">Are you going to business trip next week</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">8:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Sam Nielson</span> <span className="text-sm text-gray-400  truncate w-32">I suggest to start new business soon</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">7:16</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/uIgDDDd.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Caroline Nexon</span> <span className="text-sm text-gray-400 truncate w-32">We need to start new reseatch center.</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">9:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
                <li className="flex justify-between items-center bg-white mt-2 p-2 pt-4 hover:shadow-md rounded-lg cursor-pointer transition">
                    <div className="flex ml-1"> <img alt="avatar-img" src="https://i.imgur.com/tT8rjKC.jpg" width="40" height="40" className="rounded-full" />
                        <div className="flex flex-col ml-5"> <span className="font-medium text-black text-left">Patrick Koeler</span> <span className="text-sm text-gray-400 truncate w-32">May be yes, may be no.</span> </div>
                    </div>
                    <div className="flex flex-col items-center"> <span className="text-gray-300">3:26</span> <i className="fa fa-star text-green-400"></i> </div>
                </li>
            </ul>
        )
    }
    return (
        <div className=" mx-auto rounded-lg  overflow-hidden md:max-w-lg px-5 pb-5">
            <div className="flex">
                <div className="w-full ">
                    {dummyListItems()}
                </div>
            </div>
        </div>
    )
}

export default ChatList
