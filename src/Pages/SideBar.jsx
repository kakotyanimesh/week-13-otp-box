// import React from 'react'

// // after md sm the style apply to specific breakPoint and its above 
// const SideBar = () => {
//   return (
//     <div className='flex'>
//         <div className='transition-all delay-100 bg-red-200 -translate-x-96 md:translate-x-0 '> 
//             SideBar
//         </div>
//         <div className='bg-green-400 flex-1 min-h-screen'>
//             sidebar2 
//         </div>
//     </div>
//   )
// }

// export default SideBar

export function SidebarClass1() {
    return (
      <div className="relative flex">
        <div className="absolute transition-transform duration-500 absolute md:relative md:translate-x-0 -translate-x-full h-screen w-96 bg-red-200">
          Sidebar
        </div>
        <div className="bg-green-400 h-screen flex-1">
          Content
        </div>
      </div>
    );
  }
  