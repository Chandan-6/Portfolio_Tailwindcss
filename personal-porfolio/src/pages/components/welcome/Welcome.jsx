import avatar from "../../../assets/logos/avatar.png";
import github_white from "../../../assets/logos/github_icon_white.png";
import linkedin_white from "../../../assets/logos/linkedin_icon_white.png";
import twitter_white from "../../../assets/logos/twitter_icon_white.png";
import profile_cropped from "../../../assets/images/Profile01_croped.jpg";



export default function Welcome(){
    return(
        <div className="Welcome_container h-screen flex justify-evenly items-center tablet:flex-col tablet:gap-8 tablet:mt-20">
            <div data-aos="zoom-in-up" data-aos-delay="200" className="welcome_sub_container flex flex-col glass_2 rounded-xl w-[55%] h-[400px] py-4 px-5 justify-around 2xl:w-[50%] xl:h-[350px] lg:h-[320px] tablet:w-[80%] tablet:h-[400px] min-w-[277px]">
                <div className="flex justify-between items-center mobile-1:flex-col mobile-1:justify-start mobile-1:gap-2">

                    <div className="flex gap-3 justify-center items-center mobile-1:self-start">
                        <div className="wel bg-yellow-300 rounded-full p-2">
                            <img src={avatar} alt="Avatar Image" className="w-[40px] h-[40px] mobile-1:w-[32px] mobile-1:h-[32px] mobile-1:p-1" />
                        </div>    
                        
                        <div className="flex flex-col">
                            <p className="text-white font-bold text-lg sm:text-sm mobile-1:font-semibold">Hi, I'm Chandan Khamitkar</p>
                            <p className="txt text-gray-300 text-sm font-semibold sm:text-xs ">Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-5 sm:gap-3 mobile-1:self-start mobile-1:ml-1">

                        <a  data-aos="zoom-in-up" data-aos-delay="300" href="https://github.com/Chandan-6" target="blank">
                            <div className="wel glass_4 rounded-md p-2 ursor-pointer shadow-lg hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg">
                                <img src={github_white} alt="Github icon" className="w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px] mobile-2:w-[16px] mobile-2:h-[16px] mobile-1:w-[14px] mobile-1:h-[14px]"/>
                            </div>    
                        </a>
                        
                        <a  data-aos="zoom-in-up" data-aos-delay="350" href="https://www.linkedin.com/in/khamitkar-sai-chandan-b91802259/" target="blank">
                            <div className="wel glass_4 rounded-md p-2 ursor-pointer shadow-lg hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg">
                                <img src={linkedin_white} alt="Linked icon" className="w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px] mobile-2:w-[16px] mobile-2:h-[16px] mobile-1:w-[14px] mobile-1:h-[14px]"/>
                            </div>    
                        </a>
                        
                        <a  data-aos="zoom-in-up" data-aos-delay="400" href="https://twitter.com/KhamitkarS24019" target="blank">
                            <div className="wel glass_4 rounded-md p-2 ursor-pointer shadow-lg hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg">
                                <img src={twitter_white} alt="Twitter icon" className="w-[24px] h-[24px] 2xl:w-[20px] 2xl:h-[20px] mobile-2:w-[16px] mobile-2:h-[16px] mobile-1:w-[14px] mobile-1:h-[14px]"/>
                            </div>    
                        </a>
                        
                    </div>
                </div>

                <div>
                    <p className="text-5xl tracking-wide text-white font-semibold drop-shadow-sm 2xl:text-4xl sm:text-2xl">Passionate to Purse</p>
                    <p className="text-5xl tracking-wide text-white font-semibold drop-shadow-sm 2xl:text-4xl sm:text-2xl">the technology</p>
                </div>

                <div className="w-[60%] mobile-1:w-[70%]">
                    <p className="text-md text-gray-200 font-medium 2xl:text-sm 2xl:tracking-wider sm:text-xs sm:font-normal sm:leading-5">I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.</p>
                </div>
                
            </div>

                <div data-aos="zoom-in-up" data-aos-delay="200" className="profileBox max-w-[400px] max-h-[400px] glass rounded-xl flex justify-center items-center xl:w-[350px] xl:h-[350px] lg:h-[320px] lg:w-[320px] sm:w-[277px] sm:h-[277px]">
                    <img src={profile_cropped} alt="Profile Image" className="profile_img object-cover rounded-xl"/>
                </div>

            <div className="flex flex-col gap-4 justify-center items-end fixed z-[100] right-5 bottom-5 tablet-2:right-2">
                <a  href="https://github.com/Chandan-6" target="blank">
                    <div className="wel glass_3 rounded-full p-2 ursor-pointer shadow-lg hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg">
                        <img src={github_white} alt="Github icon" className="w-[20px] h-[20px] xl:w-[18px] xl:h-[18px]"/>
                    </div>    
                </a>
                
                <a href="https://www.linkedin.com/in/khamitkar-sai-chandan-b91802259/" target="blank">
                    <div className="wel glass_3 rounded-full p-2 ursor-pointer shadow-lg hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg">
                        <img src={linkedin_white} alt="Linked icon" className="w-[20px] h-[20px] xl:w-[18px] xl:h-[18px]"/>
                    </div>    
                </a>
                
                <a href="https://twitter.com/chandanK_6" target="blank">
                    <div className="wel glass_3 rounded-full p-2 ursor-pointer shadow-lg hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg">
                        <img src={twitter_white} alt="Twitter icon" className="w-[20px] h-[20px] xl:w-[18px] xl:h-[18px]"/>
                    </div>    
                </a>
            </div>

        </div>


    );
}