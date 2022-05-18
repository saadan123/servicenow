import Image from 'next/image'
import img2 from '../../images/image2.jpg'


export default function Div3() {
    return (
        <div className="container mx-auto">
            <div className="md:flex pt-[90px] px-[20px]">
                <div className="md:w-1/2"><Image 
src={img2}
className=''/></div>
                <div className="md:w-1/2 pl-[25px] pt-[50px]">
                    <div className=""><span className="font-bold text-[36px]">The platform of platforms</span></div>
                    <div><span className="text-[22px]">Behind every great experience is a great workflow.As the foundation for all
                    digital workflows,the workflows connects people,functions, and systems across your ogranization.</span></div>
                    <div className=' mt-[40px] pb-[40px] '><button className='border-2  rounded-lg px-[53px] py-[15px] font-semibold text-[16px] border-green-600'>Explore Platform</button></div>
                </div>
            </div>

        </div>
    )}