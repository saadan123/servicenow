import Image from 'next/image'
import img12 from '../../images/image12.webp'
export default function Div7() {
    return (
        <div className="container mx-auto bg-purple">
         <div className="md:flex py-[120px] px-[20px]">
             <div className="md:w-1/2">
                 <div className='mt-[40px]'><span className='text-[28px] xl:text-[36px] font-bold text-white '> Lloyds transforms service for 17 million customers</span>
                 </div>


    <div className='mt-[20px]'><span className='xl:text-[21px] lg:text-[19px] text-white'> 
    Using our Financial Services Operations platform, Lloyds digitized seven payment processes in just 12 weeks.</span></div>
    
     <div className='sm:flex mt-[42px]'><div><button className='border-2  rounded-lg px-[53px] py-[15px] text-white font-semibold text-[16px] border-green-600'>See Customer Story</button></div>

     <div className='flex'><div className='mt-[15px] ml-[25px]'><span className='lg:text-[16px]  text-white'>View All Stories</span></div>
     <div className='pt-[15px] pl-[2px] lg:pl-[10px]'><svg className='text-green-300 mt-[1px] w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></div></div>
     </div>

    </div>
             <div className="md:w-1/2 mt-[10px]">
                 <Image src={img12}/>
             </div>
             </div> 
     
        </div>
    )}