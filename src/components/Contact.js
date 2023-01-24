import React from 'react'

const Contact = () => {
  return (
    <div className=' flex flex-col items-center mt-[30px]'>

        <h1 id='contacth1' className='text-white md:text-[38px] text-[26px] text-center  ' >Contact Us</h1>
        <div id='fullname' className=' md:w-[680px] flex flex-col md:flex-row justify-between md:mt-[30px] mt-[15px]' >
            <input type="text" name='FirstName' className=' bg-transparent focus: md:pl-[30px] pl-[15px] w-[85vw] md:w-[330px] md:pr-[30px] pr-[15px] rounded-sm text-white py-[10px] md:mt-0  '  placeholder='First Name' />
            <input type="text" name='LastName' className='bg-transparent focus: md:pl-[30px] pl-[15px] w-[85vw] md:w-[330px] md:pr-[30px] pr-[15px] rounded-sm text-white py-[10px] md:mt-0 mt-[14px] '  placeholder='Last Name' />
            
        </div>


        <div id='contactdetails' className=' md:w-[680px] flex flex-col md:flex-row justify-between md:mt-[30px] ' >
            <input type="email" name='Email' className='bg-transparent focus: md:pl-[30px] pl-[15px] md:mt-[0px] mt-[14px] w-[85vw] md:w-[330px] md:pr-[30px] pr-[15px] rounded-sm text-white py-[10px] '  placeholder='Email' />
            <input type="text" name='Phone' className='bg-transparent focus: md:pl-[30px] pl-[15px] md:mt-[0px] mt-[14px] w-[85vw] md:w-[330px] md:pr-[30px] pr-[15px] rounded-sm text-white py-[10px] '  placeholder='Phone' />
        </div>

       <div id='address' className='md:mt-[30px] mt-[14px]' >
       <textarea  rows='2' type="text" name='Address' className='bg-transparent  focus: md:pl-[30px] pl-[15px] w-[85vw] md:w-[680px] md:pr-[30px] pr-[15px] rounded-sm text-white py-[10px] '  placeholder='Address' />
       </div>

       <div id='message' className='md:mt-[30px] mt-[14px]' >
       <textarea rows='6' type="text" name='Message' className='bg-transparent focus: md:pl-[30px] pl-[15px] w-[85vw] md:w-[680px] md:pr-[30px] pr-[15px] rounded-sm text-white py-[10px] '  placeholder='Type your message here **' />
       </div>

        <button id='submit' className='text-black font-semibold mt-[30px] bg-slate-100 px-[10px] py-[2px] rounded-sm hover:bg-slate-300 '> Submit </button>
        
    </div>
  )
}

export default Contact