import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Address = () => {
    return (
        <div className='w-auto'>
            <div className="flex w-full items-center justify-between mb-3">
                <h1 className='text-xl font-bold pb-2'>배송지정보</h1>
                <div className='w-[100px] h-[40px] flex justify-center items-center p-2 rounded-md border-[1px] border-black hover:opacity-30'>추가 </div>
            </div>
            <div className='w-full h-[70px] rounded-md flex items-center justify-between border-[1px] border-black p-1 text-sm xl:text-xl'>
                <div className='flex items-center space-x-5'>
                    <h1>기본</h1>
                    <h1>494 abqfqfda, newewe</h1>
                    <h1>(82) 010-1234-1234</h1>
                </div>
                <div className=' flex items-center justify-between hover:opacity-30 cursor-pointer'>
                    <AiOutlineDelete size={25} />
                </div>
            </div>
        </div>
    )
}

export default Address