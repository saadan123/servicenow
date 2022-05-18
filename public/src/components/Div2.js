import Image from 'next/image'
import img1 from '../../images/icon1.svg'

export default function Div2() {
    return (
     <div className="Container mx-auto" >
       <div className="flex md:flex-row flex-col justify-around sm:px-[40px] sm:mx-[90px] mt-[40px]">
         <div className='1 flex'>
           <div><Image 
src={img1}
className=''/></div>
           <div className='py-[15px]'><span className='px-[20px] font-semibold'>Try Demo</span></div>
         </div>
       

         <div className='2 flex'>
           <div><Image 
src={img1}
className=''/></div>
           <div className='py-[15px]'><span className='px-[20px] font-semibold'>Contact Sales</span></div>
         </div>

         <div className='3 flex'>
           <div><Image 
src={img1}
className=''/></div>
           <div className='py-[15px]'><span className='px-[20px] font-semibold'>View Customer Stories</span></div>
         </div>

       </div>

     </div>
      
    )
  }
  