import { Children } from "react";



export const Button = ({Children, isactive}) => {
    return (
        <div isactive={isactive} className={`sm:w-[250px] w-48 rounded-lg py-1 font-semibold ${isactive ? 'bg-[#3ddfce]' : 'bg-[#7d95ac]' } ${isactive ? 'text-[#05365b]' : 'text-white' } `}>
            {Children}
        </div>
    )
}


















// export const Button = ({
//     disabled,
//     children,
//     onClick,
//     variant
// }) => {
//     // clsx, cx
//     return <span onClick={onClick} className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}>
//         {children}
//     </span>
// }