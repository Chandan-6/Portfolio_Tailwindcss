export default function Skill(props) {
  return (
    <div className="flex justify-center items-center flex-col space-y-2">
      <div  data-aos="zoom-in-up" data-aos-delay="300" className="skills bg-gray-500 bg-opacity-45 rounded-full p-6">
        <img  data-aos="zoom-in-up" data-aos-delay="370"
          src={props.imgLink}
          alt={props.name}
          className="w-[38px] h-[38px] drop-shadow-2xl"
        />
      </div>
      <p  data-aos="zoom-in-up" data-aos-delay="450" className="text-slate-400 font-medium text-xs">{props.skill}</p>
    </div>
  );
}
