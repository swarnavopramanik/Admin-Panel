import React from 'react';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';

const Inbox = () => (
  <div>
    <div>
      <div className="relative min-h-screen flex flex-col bg-gray-50">
        {/* chat-layout-start-here */}
        <div className="flex-grow w-full max-w-7xl mx-auto lg:flex">
          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50">
              <div className="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="h-full relative">
                  <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 mb-4">
                    <div className="flex-shrink-0 ml-3">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      />
                    </div>
                    <div className="flex-1 min-w-0">

                      <span className="absolute inset-0" />
                      <p className="text-sm font-bold">Dries Vincet</p>
                      <p className="text-sm text-gray-500 truncate">Marketing Manager</p>

                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <AiOutlineSearch className="ml-2" />
                      </div>
                      <input
                        name="search"
                        className="block pl-10 sm:text-sm border-gray-100 rounded-full p-2 border ml-3"
                      />
                    </div>
                  </div>
                  {/* search-box-end  */}
                  {/* user-1 */}
                  <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      />
                    </div>
                    <div className="flex-1 min-w-0">

                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold ml-1">
                          Kina Mayer
                        </p>
                        <div className="text-gray-400 text-xs">
                          Just now
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 truncate">Byee</p>
                      </div>

                    </div>
                  </div>
                  {/* user-2 */}
                  <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                      />
                    </div>
                    <div className="flex-1 min-w-0">

                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold ml-1">
                          James Dry
                        </p>
                        <div className="text-gray-400 text-xs">
                          12:35 AM
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 truncate">Hi</p>
                        <div className="text-white text-xs rounded-full px-1 py-0" style={{ backgroundColor: 'rgb(3, 201, 215)' }}>2</div>
                      </div>

                    </div>
                  </div>
                  {/* user-3  */}
                  <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="focus:outline-none">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold ml-1">
                            Lily Henry
                          </p>
                          <div className="text-gray-400 text-xs">
                            12:35 AM
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500 truncate">Hi</p>
                          <div className="text-white text-xs rounded-full px-1 py-0" style={{ backgroundColor: 'rgb(3, 201, 215)' }}>1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* middle section  */}
            <div className="flex-1 p:2 sm:pb-6 justify-between flex flex-col h-screen xl:flex">
              <div className="flex sm:items-center justify-between py-3 border-b border-gray-200 p-3">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-12 h-12 rounded-full cursor pointer"
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  />
                  <div className="flex flex-col leading-tight">
                    <div className="text-1xl mt-1 flex items-center">
                      <span className="text-gray-700 mr-3">Kina Mayer</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition
                                        duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <AiOutlineSearch className="text-2xl" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition
                                        duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <AiOutlineHeart className="text-2xl" />
                  </button>
                </div>
              </div>
              {/* messages-strts-here  */}
              <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {/* first-message  */}
                <div className="chat-message">
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                          Hey! How are you?
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-9 h-9 rounded-full order-1"
                      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    />
                  </div>
                </div>
                {/* second-message  */}
                <div className="chat-message">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-end">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none text-white" style={{ backgroundColor: 'rgb(3, 201, 215)' }}>
                          Awesome :)
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-9 h-9 rounded-full order-1"
                      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    />
                  </div>
                </div>
                {/* third-message */}
                <div className="chat-message">
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                          Let us meet! It is already since we saw each other.
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-9 h-9 rounded-full order-1"
                      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    />
                  </div>
                </div>
                <div className="chat-message">
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                          Byee
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-9 h-9 rounded-full order-1"
                      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    />
                  </div>
                </div>
                {/* message-ends-here */}
                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2">
                  <div className="relative flex">
                    <span className="absolute inset-y-0 flex items-center">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300"
                      >
                        <BsMic className="text-xl" />
                      </button>
                    </span>
                    <input placeholder="Write something" className="focus:ring-red-500 focus:border-red-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Inbox;
