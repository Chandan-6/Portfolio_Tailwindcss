import mailIcon from "../../../../assets/logos/mail_icon_white.png";
import resume from "../../../../assets/docs/ResumeWebDeveloper.pdf";

export default function HireMe(){
    return (
        <div  data-aos="zoom-in-up" data-aos-delay="200" className="hireMe w-[60%] h-[300px] flex flex-col justify-center items-center px-6 py-2 rounded-xl mx-auto mt-28 mb-36 space-y-4 relative tablet:h-[250px] mobile-1:h-[200px] mobile-1:w-[70%]" id="HireMe">
        <p className="hireMe_text text-black text-4xl font-bold animate___animated animate-pulse animate_infinite mobile-1:text-3xl">Hire ME</p>

        <div className="flex justify-center items-center gap-9 sm:gap-6">
            <a  data-aos="zoom-in-right" data-aos-delay="400" href="mailto:khamitkarsaichandan1035@gmail.com">
                <img src={mailIcon} alt="Mail icon" className="w-[38px] h-[38px] cursor-pointer shadow-md hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg sm:w-[28px] sm:h-[28px] mobile-1:w-[24px] mobile-1:h-[24px]" />
            </a>
            
            {/* <!-- Download resume --> */}
            <a  data-aos="zoom-in-left" data-aos-delay="400" href={resume} download>
                <button className="bg-white rounded-lg px-3 py-2 font-bold tracking-wide shadow-md hover:bg-[#3652AD] hover:text-white transition-all duration-500 ease-in-out transform active:scale-105 active:duration-500 sm:text-xs ">Download Resume</button>
            </a>
        </div>

        <div  data-aos="fade-left" data-aos-delay="300" className="blur_square w-[200px] h-[200px] glass_3 rounded-bl-[50px] rounded-xl absolute -top-20 -right-20 outline outline-gray-50 outline-4 sm:w-[90px] sm:h-[90px] sm:-right-14 sm:-top-16 sm:rounded-bl-[40px] mobile-1:-right-10"></div>
        <div  data-aos="fade-right" data-aos-delay="300" className="blur_square w-[200px] h-[200px] glass_3 rounded-tr-[50px] rounded-xl absolute -bottom-20 -left-20 outline outline-gray-50 outline-4 sm:w-[90px] sm:h-[90px] sm:-left-14  sm:-bottom-16 sm:rounded-tr-[40px] mobile-1:-left-10 mobile-1:-bottom-12"></div>

    </div>
    )
}