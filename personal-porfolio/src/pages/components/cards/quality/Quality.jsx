
export default function Quality(props){
    return(
        <div  data-aos="zoom-in-up" data-aos-delay="300" className="max-w-[200px] h-max  self-start">
        <img
          src={props.imgLink}
          alt="Web Development Image"
          width="200px"
          height="250px"
          className="quality_img_1 object-cover rounded-3xl mb-4"
        />
        <p  data-aos="zoom-in-up" data-aos-delay="400" className="text-white font-semibold mb-3 ml-1">{props.title}</p>
        <p   data-aos="zoom-in-up" data-aos-delay="450" className="text-left text-gray-400 font-mono w-full text-sm ml-1">
          {props.txt}
        </p>
      </div>
    )
}