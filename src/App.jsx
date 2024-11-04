// import React from 'react'
// import Age from './Pages/Age'
// import Email from './Pages/Email'
// import Otp from './Pages/Otp'
// import Layout from './components/Layout'
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

// const App = () => {
//   return (
//     <div className='bg-[#002959] min-h-screen text-white'>
//       <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Layout/>}>
//               <Route index element={<Age/>}/>
//               <Route path='/email' element={<Email/>}/>
//               <Route path='/otp' element={<Otp/>}/>
//             </Route> 
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }


// export default App

// import React from 'react'


// const App = () => {
//   return (
//     <div className='flex'>
//       <SideBar/>
//       <Harkirat/>
//     </div>
//   )
// }


// const Harkirat = () => {
//   return <div className='grid grid-cols-12'>
//     <div className='bg-red-200 rounded-xl col-span-3'>

//     </div>
//     <div className='bg-blue-400 col-span-5'>

//     </div>
//     <div className='bg-green-600 col-span-4'>

//     </div>

//   </div>
// }



// const SideBar = () => {
//   return <div className='bg-yellow-200 w-96'>

//   </div>
// }
// export default App

import React from 'react'
import Otp from './components/Otp'

const App = () => {
  return (
    <div>
      <Otp noOfInputBox={10}/>
    </div>
  )
}

export default App