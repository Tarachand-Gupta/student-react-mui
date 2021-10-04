import React from 'react'

function Noticeboard() {
    return (
        <div className="my-3">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
                <div className="w-full bg-white  max-h-96 min-h-40 static overflow-scroll rounded-lg pt-6 px-8 pb-4  flex flex-col  shadow-lg">
                    <div className="mb-1">
                        <p className="text-xl text-gray-700 font-bold mb-2">Notoice Title</p>
                    </div>
                    <div className="text-left">
                        <p className="text-md text-gray-700  mb-2">Dany Bailey</p>
                        <p className="text-md text-gray-700  mb-2">Dany Bailds fasfawf  awf  warqwFD qfdawff  wfwa fef ef effey</p>
                        <p className="text-md text-gray-700  mb-2">Dany Bailey</p>
                        <p className="text-md text-gray-700  mb-2">Dany Bailey</p>
                        <p className="text-md text-gray-700  mb-2">Dany Bailey</p>
                        <p className="text-md text-gray-700  mb-2">Dany Bailey</p>
                    </div>
                    <div className="mb-1 ">
                        <p className="text-base text-right relative fixed bottom-0 right-0 text-gray-400 font-normal">2 hours sgo</p>
                    </div>

                </div>
                <div >
                    <div className=" bg-gray-100 flex items-center justify-center">
                        <div className="bg-white rounded-lg py-2 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                            <div className="flex justify-between mb-2 space-x-4">
                                <img className="w-10 h-10 rounded-full ml-2" src="https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium" alt="David" />
                                <div>
                                    <h1 className="mb-1 text-xl font-bold text-gray-700">Stuar Manson</h1>
                                    <p className="text-sm font-normal text-center text-gray-600 mr-14 ">2 hours ago</p>
                                </div>
                                <span className="pr-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-blue-400 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="dfsdf" />
                            <div className="flex justify-between px-10 py-6">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <div className="px-10">
                                    <input className=" text-sm font-thin  px-5 py-2 mb-2 bg-gray-50 outline-none rounded-full border-1" type="text" placeholder="Enter your comment" />
                                    <span className="text-sm text-gray-500 bg-gray-50 p-2 rounded-full px-2 py-2 transition duration-100 hover:text-blue-400 cursor-pointer">Send</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center shadow-lg">
                    <div className="mb-8">
                        <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photdso" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                        <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center shadow-lg">
                    <div className="mb-8">
                        <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="phoaadto" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                        <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center shadow-lg">
                    <div className="mb-8">
                        <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photadao" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                        <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center shadow-lg">
                    <div className="mb-8">
                        <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="phoadto" />
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                        <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Noticeboard
