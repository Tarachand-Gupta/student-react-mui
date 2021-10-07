import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { selectConversationSearchboxText } from '../../../../Store/App/messaging/selectors';
import { setConversationSearchboxText } from '../../../../Store/App/messaging/slice';

function SearchBox() {
    const dispatch = useDispatch()
    const searchText = useSelector(selectConversationSearchboxText);
    return (
        <div className="flex md:max-w-lg mx-auto px-2 pt-6">
            <div className="flex-grow h-18 pl-2 ">
                <div className="px-1">
                    <div className="bg-white flex items-center rounded-lg shadow-md">
                        <input className="rounded-lg w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Search"
                            value={searchText}
                            onChange={(e) => {
                                dispatch(setConversationSearchboxText(e.target.value))
                            }}

                        />
                    </div>
                </div>
            </div>
            <div className="flex-end w-16 h-16 py-1  pl-1">
                <button className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center shadow-lg">
                    <FiSearch />
                </button>
            </div>
        </div>
    )
}

export default SearchBox
