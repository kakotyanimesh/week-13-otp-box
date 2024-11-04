// import { Button } from "./Buttons";
// import { useRef, useState } from "react";

// // 1, 2, 3, 6, 10
// export function Otp({ number }) {
//     const ref = useRef(Array(number).fill(0));

//     const [disabled, setDisabled] = useState(true);

//     return <div className="flex justify-center">
        
//         {Array(number).fill(1).map((x, index) => <SubOtpBox reference={(e) => ref.current[index] = e} key={index} onDone={() => {
//             console.log(ref)
//             console.log(index)
//             if (index + 1 >= number) {
//                 return
//             }
//             ref.current[index + 1].focus();
//         }} goBack={() => {
//             if (index == 0) {
//                 return
//             }
//             ref.current[index - 1].focus();
//         }} />)}

//         <br />
//         <Button disabled={disabled}>Sign up</Button>
//     </div>
// }

// function SubOtpBox({
//     reference, onDone, goBack
// }) {
//     const [inputBoxVal, setInputBoxVal] = useState("");

//     return <div>
//         <input value={inputBoxVal} ref={reference} onKeyUp={(e) => {
//             if (e.key == "Backspace") {
//                 goBack()
//             }
//         }} onChange={(e) => {
//             const val = e.target.value

//             if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val  == "9") {
//                 setInputBoxVal(val);
//                 onDone()
//             } else {

//             }
//         }} type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"></input>
//     </div>
// }

import React, { useRef, useState } from 'react'

const Otp = ({noOfInputBox}) => {
    
    const [input, setInput] = useState(new Array(noOfInputBox).fill(''))
    // creatng array name input which length is same as no of input prop from app.jsx and filled with "" or null
    
    const otpRef = useRef([])

    const handleChange = (inputVal, index) => {
        const newArr = [...input]
        newArr[index] = inputVal
        setInput(newArr)

        
        
        if(inputVal && index < noOfInputBox-1){
            console.log(otpRef.current[index]); 
            // returing us the current input box => if 4 inputbxo => console will print 3 as we dont want the last one
            
            otpRef.current[index +1].focus()
        }
    }
// we need both value and index because value will check if the input box has something or not if it has and index < IP box -1 then focus will be to next box , if we remove the value then focus will be to next box if we enter backspace thing 

    const keyUpFunction = (e, index) => {
        if(e.key === 'Backspace' && !e.target.value && index > 0) {
            otpRef.current[index - 1].focus()
        }

        if(e.key === 'Enter' && e.target.value && index < noOfInputBox -1) {
            otpRef.current[index +1 ].focus()
        }
    }

  return (
    <div>
        <h1 className='text-center mt-10'>Enter your Otp</h1>
        <div className='flex justify-center gap-10 mt-10'> 
            {input.map((digit, index) => (
                <input type="text" value={digit} key={index} maxLength={1} 
                onChange={(e) => handleChange(e.target.value, index)}
                ref={(reference) => (otpRef.current[index] = reference)}
                // ref={(reference) => console.log(reference)}
                // the reference returns us each and every input box and adding otpRef.current[index] = reference => referencing to each input box
                onKeyUp={(e) => keyUpFunction(e, index)}
                className='bg-red-200 w-10 h-10 text-center'
                />
            ))}
        </div>
    </div>
  )
}

export default Otp


// import React, { useRef, useState } from 'react'

// const Otp = ({noOfInputBox}) => {
//     const [otps, setOtps] = useState(new Array(noOfInputBox).fill(''))
//     const otpBoxref = useRef([])

//     const handlenInputBox = (value, index) => {
//         const newArr = [...otps]
//         newArr[index] = value
//         setOtps(newArr)

//         if(value && index < noOfInputBox-1) {
//             otpBoxref.current[index+1].focus()
//         }

//         // we need both value and index because value will check if the input box has something or not if it has and index < IP box -1 then focus will be to next box , if we remove the value then focus will be to next box if we enter backspace thing 

//     }

//     const hadndleBackSpaceAndEnter = (e, index) => {
//         if(e.key === "Backspace" && !e.target.value && index > 0){
//             otpBoxref.current[index - 1].focus()
//             // !e.target.value => if there's value or not if current box is empty then focus to prev one 
            
//         }
//         if(e.key = 'Enter' && e.target.value && index < noOfInputBox-1) {
//             otpBoxref.current[index + 1].focus()
//             // e.target.value has and index ka value bhi chota hei then focus to next input box 
//         }
//     }
//   return (
//     <div className='flex flex-col text-center mt-10'>
//         <h1>enter your OTP </h1>
//         <div className='flex gap-10 justify-center mt-10'>
//         {otps.map((digit, index ) => (
//             <input type="text" key={index} value={digit} maxLength={1}
//             onChange={(e) => handlenInputBox(e.target.value, index)}
//             ref={(reference) => otpBoxref.current[index] = reference}
//             onKeyUp={(e) => hadndleBackSpaceAndEnter(e, index)}
//             className='bg-red-200 text-center w-10 h-10'
//             />
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Otp