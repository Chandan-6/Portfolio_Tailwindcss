
export default function Experience(props) {

    return(
        <div data-aos="zoom-in-up" data-aos-delay="300" className="w-[350px] max-h-max glass_2 flex flex-row-reverse justify-between items-center px-4 py-4 rounded-xl gap-6 border border-1 outline-gray-600">
            <img data-aos="zoom-in-up" data-aos-delay="350" src={props.imgLink} alt={props.company} className="w-14 h-14 mobile-1:w-11 mobile-1:h-11 rounded-xl drop-shadow-xl self-start " />
            <div className="flex flex-col gap-2">
                <CustomTag subHeadig={"Company"} content={props.company}/>
                <CustomTag subHeadig={"Job-Type"} content={props.jobType}/>
                <CustomTag subHeadig={"Role"} content={props.role}/>
                <CustomTag subHeadig={"Duration"} content={props.timePeriod}/>
                <CustomTag subHeadig={"Dates"} content={props.dates}/>
            </div>
        </div>
    )
};


const CustomTag = (props) => {
    return (
        <p data-aos="zoom-in-up" data-aos-delay="350"><span className="font-semibold text-sm mobile-1:text-xs text-gray-200">{props.subHeadig}:</span>{'  '}<span className="text-zinc-100 mobile-1:text-sm font-semibold tracking-wide ">{props.content}</span></p>
    )
}