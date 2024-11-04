
export const InputBox = ({
    placeholder,
    onChange,
    inputWidthSm,
    inputWidthmobile,
    type

}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} className={`rounded-lg bg-[#183e69] pl-4 py-2 ${inputWidthmobile} sm:${inputWidthSm} outline-none`}/>
    )
}





















// export const Input = ({
//     onClick,
//     type,
//     placeholder
// }) => {
//     // clsx, cx
//     return <span onClick={onClick} className={`p-8 text-4xl px-2 py-2 text-white cursor-pointer bg-blue-500 rounded-2xl`}>
//         <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none"></input>
//     </span>
// }
