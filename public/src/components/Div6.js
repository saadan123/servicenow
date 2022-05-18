import Image from 'next/image'
import img6 from '../../images/image6.webp'
import img7 from '../../images/image7.webp'
import img8 from '../../images/image8.png'
import img9 from '../../images/image9.png'
import img10 from '../../images/image10.png'

export default function Div6() {
    return (
    <div className='container mx-auto'>
        <div className='flex pl-[30px] lg:pl-[0px] md:justify-center pt-[170px]'><span className='font-bold sm:text-[24px]'>
                Trusted by ~7,400 enterprise customers            
        </span></div>

        <div className='md:flex justify-center pt-[56px]'>
            <div className='flex '>
            <div className=''><Image src={img6} className=''/></div>
            <div className=''><Image src={img7} className=''/></div>
            <div className=''><Image src={img8} className=''/></div>
            </div>
            <div className='flex '>
            <div className=''><Image src={img9} className=''/></div>
            <div className=''><Image src={img10} className=''/></div>
            <div className='md:w-0 visible md:invisible'><Image src={img10} className=''/></div>

            </div>
        </div>
    </div>
    )}