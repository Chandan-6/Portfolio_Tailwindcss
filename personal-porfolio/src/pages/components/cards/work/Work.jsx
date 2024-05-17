import github_white from "../../../../assets/logos/github_icon_white.png";
import view_white from "../../../../assets/logos/view_icon_white.png";

export default function Work(props){
    return(
        <div  data-aos="zoom-in-up" data-aos-delay="300" className="max-w-[400px] max-h-max self-start glass_2 text-center px-6 py-4 rounded-2xl hover:outline outline-red-300 outline-1 ">
        <img  data-aos="zoom-in-up" data-aos-delay="350" src={props.imgLink} alt="NovaBills App Preview" className="object-contain h-auto rounded-2xl " />
        <p className="language_box bg-none outline outline-red-300 outline-1 rounded-lg px-3 py-1 w-fit mx-auto text-white text-base font-mono my-4 mb-0 mobile-1:text-sm">{props.skills}</p>

        <div  data-aos="zoom-in-up" data-aos-delay="500" className="flex justify-center items-center gap-6 my-3">
            <a href={props.demoLink} target="blank">
                <img src={view_white} alt="View icon" className=" rounded-full w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg mobile-1:w-[26px] mobile-1:h-[26px]" />
            </a>
            <a href={props.githubLink} target="blank">
                <img src={github_white} alt="Github icon" className=" rounded-full w-[30px] h-[30px] cursor-pointer hover:scale-125 duration-150 transform ease-in-out hover:drop-shadow-lg mobile-1:w-[26px] mobile-1:h-[26px]" />
            </a>
        </div>

        <p  data-aos="zoom-in-up" data-aos-delay="500" className="text-3xl font-medium text-white mb-2 mobile-1:text-xl">{props.projectName}</p>
        <p  data-aos="zoom-in-up" data-aos-delay="500" className="mb-2 text-gray-400 mobile-1:text-sm">{props.description}</p>
    </div>
    )
}
