<template>

  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-0 py-0 lg:px-5 lg:pl-3">
    <div class="flex items-center">
      <div class="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
        <a href="/" class="flex ms-2 md:me-14">
          <img src="../../assets/logo.png" class="h-20 me-5" alt="FlowBite Logo"> <!-- Adjusted size to h-20 -->
        </a>
      </div>
      <div class="flex items-center">
        <div class="flex items-center ms-3">
          <div class="flex items-center p-4">
            
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ml-4" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  
                  <img class="w-12 h-12 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
              </button>
          </div>
          
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.simsflowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
            <div class="flex items-center pl-6" style="margin-left: 38.5rem;margin-right: 40px;">
              <img src="../../assets/globe-icon.svg" alt="Globe Icon" class="mr-6 w-8 h-8">
              <img src="../../assets/print-icon.svg" alt="Print Icon" class="mr-12 w-8 h-8">
              <div class="flex flex-col items-end" style="margin-right: 40px;">
                  <div class="font-bold text-4xl">17:28</div>
                  <div>Thu, 8 February 2024</div>
              </div>
              
              <button type="button" style="border-radius:50px;background-color: #6C4EF9;margin-left: 30px;margin-right: 20px;font-size: 18px;height: 50px;" class="focus:outline-none text-white  hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Panding Tasks</button>
              <div class="btn-group" style="margin-right: 40px;"> 
                  <button class="btn " style="border-radius: 999px; padding: 0px; width: 50px; height: 70px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                          <g id="search-icon" transform="translate(1 1)">
                            <path
                              id="icon"
                              d="M16.221,16.215A9.5,9.5,0,1,1,19,9.5a9.471,9.471,0,0,1-2.783,6.719L19.5,19.5Z"
                              fill="none"
                              stroke="#8280fd"
                            ></path>
                          </g>
                        </svg>
                  </button>
                  <button class="btn " style="border-radius: 999px; padding: 0px; width: 50px; height: 70px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                          <g id="message-icon" transform="translate(1.06 1)">
                            <path
                              id="Union_3"
                              data-name="Union 3"
                              d="M.622,20.21a4.745,4.745,0,0,0,2.505-3.177A10.286,10.286,0,0,1,.74,10.439,10.537,10.537,0,0,1,11.37,0,10.537,10.537,0,0,1,22,10.439,10.537,10.537,0,0,1,11.37,20.88a10.736,10.736,0,0,1-4.985-1.217A11.074,11.074,0,0,1,1.272,21C.033,21-.518,20.678.622,20.21Z"
                              transform="translate(0 0.002)"
                              fill="#e9e7ff"
                              stroke="#8280fd"
                            ></path>
                            <circle
                              id="Ellipse_9"
                              data-name="Ellipse 9"
                              cx="1.5"
                              cy="1.5"
                              r="1.5"
                              transform="translate(4.763 8.941)"
                              fill="#8280fd"
                            ></circle>
                            <circle
                              id="Ellipse_12"
                              data-name="Ellipse 12"
                              cx="1.5"
                              cy="1.5"
                              r="1.5"
                              transform="translate(9.834 8.941)"
                              fill="#8280fd"
                            ></circle>
                            <circle
                              id="Ellipse_11"
                              data-name="Ellipse 11"
                              cx="1.5"
                              cy="1.5"
                              r="1.5"
                              transform="translate(14.906 8.941)"
                              fill="#8280fd"
                            ></circle>
                          </g>
                        </svg>
                  </button>
                  <button class="btn " style="border-radius: 999px; padding: 0px; width: 50px; height: 70px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                          <path
                            id="notification-icon"
                            d="M7.881,18.353h5.958c0,2.014-1.334,3.647-2.979,3.647S7.881,20.367,7.881,18.353Zm0,0Zm3.039-.13H0S5.369,14.71,5.453,5.487l0-.038A5.623,5.623,0,0,1,10.921.007V0L11,0l.078,0V.007A5.624,5.624,0,0,1,16.549,5.45l0,.038C16.63,14.71,22,18.223,22,18.223Z"
                            transform="translate(1.002 1.002)"
                            fill="#e9e7ff"
                            stroke="#8280fd"
                          ></path>
                        </svg>
                  </button>
              
                  </div>

          </div>
          
          
          
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" class="fixed top-8 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
          <li>
              <a href="#" class="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                
                 <span class="ms-3">Main</span>
              </a>
           </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
       
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64 " style="background-color: rgb(212, 212, 212);height: 100vh;">
   <div class="p-4   rounded-lg dark:border-gray-700 mt-14">
      <div class=" mb-4">
       
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg" style="display: flex; background-color: rgb(255, 255, 255); height: 120px; padding: 20px; margin-top: 80px; justify-content: space-between; align-items: center;">       
                 <button type="button"  data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" style="background-color: #6C4EF9;" class="flex items-center justify-center text-white  rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                  <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" @click="openModal" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                  </svg>  
              </button>
               <!-- Modal structure -->
 <div>
    <!-- Diğer bileşen içeriği buraya gelebilir -->

   <div id="myModal" class="modal fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center hidden">
  <div class="modal-content bg-white w-1/2 p-6 rounded-lg">
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
      <input type="text" id="name" v-model="newUser.name" class="mt-1 p-2 border rounded-md w-full" />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
      <input type="text" id="email" v-model="newUser.email" class="mt-1 p-2 border rounded-md w-full" />
    </div>
    <div class="mb-4">
      <label for="phone" class="block text-sm font-medium text-gray-700">Phone:</label>
      <input type="text" id="phone" v-model="newUser.phone" class="mt-1 p-2 border rounded-md w-full" />
    </div>
    <div class="mb-4">
      <label for="age" class="block text-sm font-medium text-gray-700">Age:</label>
      <input type="text" id="age" v-model="newUser.age" class="mt-1 p-2 border rounded-md w-full" />
    </div>
    <div class="mb-4">
      <label for="joiningDate" class="block text-sm font-medium text-gray-700">Joining Date:</label>
      <input type="text" id="joiningDate" v-model="newUser.joiningDate" class="mt-1 p-2 border rounded-md w-full" />
    </div>
    <div class="mb-4">
      <label for="salary" class="block text-sm font-medium text-gray-700">Salary:</label>
      <input type="text" id="salary" v-model="newUser.salary" class="mt-1 p-2 border rounded-md w-full" />
    </div>

    <div class="flex justify-end">
      <button @click="createUser" class="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">Create User</button>
      <button @click="closeModal" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Close</button>
    </div>
  </div>
</div>


    <!-- Diğer bileşen içeriği buraya gelebilir -->
  </div>


              <div class="contact-header d-flex align-items-sm-center media flex-column flex-sm-row bg-white mb-30" style="display:flex;"><div class="contact-header-left media-body d-flex align-items-center mr-4" style="margin-right:650px ;"><div class="add-new-contact mr-20"><a href="#" class="btn-circle" data-toggle="modal" data-target="#contactAddModal"><svg xmlns="http://www.w3.org/2000/svg" width="12.002" height="12" viewBox="0 0 12.002 12" class="svg replaced-svg">
                  <g id="Group_925" data-name="Group 925" transform="translate(-228.998 -1180.998)">
                    <line id="Line_6" data-name="Line 6" x2="10.002" transform="translate(229.998 1186.998)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                    <line id="Line_7" data-name="Line 7" y2="10" transform="translate(235 1181.998)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line>
                  </g>
                </svg></a></div><form action="#" class="search-form flex-grow"><div class="theme-input-group style--two"><input type="text" class="theme-input-style" placeholder="Search Here"> <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="21.502" height="21.498" viewBox="0 0 21.502 21.498" class="svg replaced-svg">
                  <g id="search-icon" transform="translate(1 1)">
                    <path id="icon" d="M16.221,16.215A9.5,9.5,0,1,1,19,9.5a9.471,9.471,0,0,1-2.783,6.719L19.5,19.5Z" fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </g>
                </svg></button></div></form></div><div class="contact-header-right d-flex align-items-center justify-content-end mt-3 mt-sm-0" style="display:flex;"><div class="grid"><a href="contact-grid.html"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" class="svg replaced-svg">
                  <g id="grid-icon" transform="translate(-1713 -155)">
                    <g id="Rectangle_844" data-name="Rectangle 844" transform="translate(1713 155)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <rect width="8" height="8" stroke="none"></rect>
                      <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                    </g>
                    <g id="Rectangle_847" data-name="Rectangle 847" transform="translate(1713 166)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <rect width="8" height="8" stroke="none"></rect>
                      <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                    </g>
                    <g id="Rectangle_845" data-name="Rectangle 845" transform="translate(1724 155)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <rect width="8" height="8" stroke="none"></rect>
                      <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                    </g>
                    <g id="Rectangle_846" data-name="Rectangle 846" transform="translate(1724 166)" fill="#f5f5f5" stroke="#aeaeae" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <rect width="8" height="8" stroke="none"></rect>
                      <rect x="1" y="1" width="6" height="6" fill="none"></rect>
                    </g>
                  </g>
                </svg></a></div><div class="star"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="svg replaced-svg">
                  <path id="star" d="M-22394.154-18561.168l2.52-5.312,2.463,5.188,5.643.85-4,4.137.994,5.826-5.1-2.8-4.863,2.7.9-5.719-3.928-4.137Z" transform="translate(22400.529 18567.48)" fill="#fff4e6" stroke="#ffb959" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg></a></div><div class="delete_mail"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" class="svg replaced-svg">
                  <g id="delete" transform="translate(1 1)">
                    <rect id="Rectangle_338" data-name="Rectangle 338" width="18" height="4" rx="2" transform="translate(0 3)" fill="#ffe2e6" stroke="#fe5280" stroke-linecap="round" stroke-width="2"></rect>
                    <path id="Rectangle_339" data-name="Rectangle 339" d="M3,0H5A3,3,0,0,1,8,3V3A0,0,0,0,1,8,3H0A0,0,0,0,1,0,3V3A3,3,0,0,1,3,0Z" transform="translate(5)" fill="#ffe2e6" stroke="#fe5280" stroke-width="2"></path>
                    <path id="Rectangle_340" data-name="Rectangle 340" d="M0,0H14a0,0,0,0,1,0,0V10a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V0A0,0,0,0,1,0,0Z" transform="translate(2 7)" fill="#ffe2e6" stroke="#fe5280" stroke-width="2"></path>
                    <line id="Line_28" data-name="Line 28" y2="5" transform="translate(7 11.719)" fill="none" stroke="#fe5280" stroke-linecap="round" stroke-width="1"></line>
                    <line id="Line_29" data-name="Line 29" y2="5" transform="translate(11 11.719)" fill="none" stroke="#fe5280" stroke-linecap="round" stroke-width="1"></line>
                  </g>
                </svg></a></div><div class="pagination style--two d-flex flex-column align-items-center ml-n2"><ul style="display:flex;" class="list-inline d-inline-flex align-items-center"><li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="6.412" height="10.828" viewBox="0 0 6.412 10.828" class="svg replaced-svg">
                  <path id="left-angle" d="M-22247.133-18561.5l-4,4,4,4" transform="translate(22252.131 18562.914)" fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg></a></li><li><a href="#" class="current"><svg xmlns="http://www.w3.org/2000/svg" width="6.414" height="10.828" viewBox="0 0 6.414 10.828" class="svg replaced-svg">
                  <path id="right-angle" d="M-22245.137-18561.5l4,4-4,4" transform="translate(22246.551 18562.914)" fill="none" stroke="#8280fd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg></a></li></ul></div></div></div>
           
            
          </div> 

         

   <div class="relative overflow-x-auto shadow-md sm:rounded-lg" style="margin-top: 50px;">
    <!-- Table with Tailwind CSS styles -->
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <!-- Table header -->
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <!-- Column headers -->
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Phone</th>
          <th scope="col" class="px-6 py-3">Age</th>
          <th scope="col" class="px-6 py-3">Post</th>
          <th scope="col" class="px-6 py-3">Joining Date</th>
          <th scope="col" class="px-6 py-3">Salary</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>

      <!-- Table body -->
      <tbody>
        <!-- Row for each user -->
        <tr v-for="user in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ user.name }}</td>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="px-6 py-4">{{ user.phone }}</td>
          <td class="px-6 py-4">{{ user.age }}</td>
          <td class="px-6 py-4">{{ user.post }}</td>
          <td class="px-6 py-4">{{ user.joiningDate }}</td>
          <td class="px-6 py-4">{{ user.salary }}</td>
          <td class="px-6 py-4 text-right">
            <a @click="openEditModal(user)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            <span @click="deleteUser(user.id)" class="ml-2 cursor-pointer text-red-600 dark:text-red-500 hover:underline">Delete</span>

          </td>
        </tr>
      </tbody>
    </table>

    <!-- Edit Modal -->
    <div id="editModal" class="modal fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center hidden">
      <div class="modal-content bg-white w-1/2 p-6 rounded-lg">
        <div class="mb-4">
          <label for="editName" class="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="editName" v-model="editedUser.name" class="mt-1 p-2 border rounded-md w-full" />
        </div>  
        <div class="mb-4">
          <label for="editEmail" class="block text-sm font-medium text-gray-700">Email:</label>
          <input type="text" id="editEmail" v-model="editedUser.email" class="mt-1 p-2 border rounded-md w-full" />
        </div>
          <div class="mb-4">
          <label for="editName" class="block text-sm font-medium text-gray-700">Phone:</label>
          <input type="text" id="editName" v-model="editedUser.phone" class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div class="mb-4">
          <label for="editName" class="block text-sm font-medium text-gray-700">Age:</label>
          <input type="text" id="editName" v-model="editedUser.age" class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div class="mb-4">
          <label for="editName" class="block text-sm font-medium text-gray-700">Post:</label>
          <input type="text" id="editName" v-model="editedUser.post" class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div class="mb-4">
          <label for="editName" class="block text-sm font-medium text-gray-700">Joining Date:</label>
          <input type="text" id="editName" v-model="editedUser.joiningDate" class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div class="mb-4">
          <label for="editName" class="block text-sm font-medium text-gray-700">Salary:</label>
          <input type="text" id="editName" v-model="editedUser.salary" class="mt-1 p-2 border rounded-md w-full" />
        </div>
        <!-- Add other fields for editing -->

        <div class="flex justify-end">
          <button @click="updateUser" class="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">Update User</button>
          <button @click="closeEditModal" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Close</button>
        </div>
      </div>
    </div>
  </div>

         
      </div>

   </div>
</div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SidebarItem from '../../components/SidebarItem.vue';
import axios from 'axios';

export default {
  methods: {
     deleteUser(userId) {
        // Implement the logic to delete the user with the given userId
        // You can use this method to make an API call or directly manipulate the users array
        // For example:
        const index = this.users.findIndex(user => user.id === userId);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    },
    openModal() {
      this.newUser = {
        name: '',
        email: '',
        phone: '',
        age: '',
        post: '',
        joiningDate: '',
        salary: '',
      };

      document.getElementById('myModal').classList.remove('hidden');
      document.getElementById('myModal').classList.add('flex');
    },
    closeModal() {
      document.getElementById('myModal').classList.remove('flex');
      document.getElementById('myModal').classList.add('hidden');
    },
    createUser() {
      this.users.push({ ...this.newUser });
      this.closeModal();
    },
    openEditModal(user) {
      this.editedUser = { ...user };
      document.getElementById('editModal').classList.remove('hidden');
      document.getElementById('editModal').classList.add('flex');
    },
    closeEditModal() {
      document.getElementById('editModal').classList.remove('flex');
      document.getElementById('editModal').classList.add('hidden');
    },
    updateUser() {
  // Find the index of the edited user in the array
  const index = this.users.findIndex((user) => user.id === this.editedUser.id);

  // Update the user in the array
  if (index !== -1) {
    // Directly update the reactive property
    this.users[index] = { ...this.editedUser };
  }

  // Make an API call to update the user on the server
  axios.put(`http://localhost:4000/users/${this.editedUser.id}`, this.editedUser)
    .then(() => {
      // Once the update is done, close the edit modal
      this.closeEditModal();
    })
    .catch((error) => {
      console.error('Error updating user:', error);
    });
},
  },
  props: {
    icon: String,
    title: String,
  },
  components: {
    FontAwesomeIcon,
    SidebarItem,
  },
  data() {
    return {
      sidebarItems: [
        
      ],
      modalVisible: false,
      users: [],
      newUser: {
        name: '',
        email: '',
        phone: '',
        age: '',
        post: '',
        joiningDate: '',
        salary: '',
      },
      editedUser: {
        id: '',
        name: '',
        email: '',
        phone: '',
        age: '',
        post: '',
        joiningDate: '',
        salary: '',
        // Add other fields for editing
      },
    };
  },
  created() {
    axios.get('http://localhost:4000/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
};
</script>

<style scoped>
/* Scoped styles for the component */

/* Set margin and padding of navbar to 0 */
.logo {
  margin: 0;
  padding: 0;
  height: 113px;
}
.navbar {
  margin: 0;
  padding: 0;
    height: 113px;
}
.main{
    padding: 20px; 
      margin-right: 0; 
}
li{
    padding:20px
}
</style>
