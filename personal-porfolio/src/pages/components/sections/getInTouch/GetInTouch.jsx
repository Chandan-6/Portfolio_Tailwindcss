import toast, {Toaster} from "react-hot-toast";

export default function GetInTouch() {
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "6f0a59d2-df71-4c9d-b572-411ff85e5371");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Message sent successfully");
    }
    else{
      toast.error("Please Try again!");
    }
  };

  return (
    <div  data-aos="zoom-in-up" data-aos-delay="200"
      className="Get_in_touch_main_container w-[60%] h-auto glass_2 rounded-xl mx-auto mt-24 mb-24 pb-6 pt-2 text-center tablet:w-[70%] tablet:mb-16 mobile-1:w-[90%]"
      id="GetInTouch"
    >
      <form
        className="space-y-10"
        onSubmit={submit}
      >
        <p className="font-bold text-4xl text-gray-900 drop-shadow-md tracking-wider mobile-1:text-3xl">
          Get In Touch
        </p>

        <div className="flex flex-col justify-center items-center space-y-3">
          <input  data-aos="zoom-in-up" data-aos-delay="300"
            type="text"
            name="name"
            required
            className="w-[80%] py-4 px-2 bg-slate-100 text-gray-600 rounded-md mobile-1:py-2 mobile-2:text-sm mobile-2:w-[90%]"
            placeholder="Your Name"
            id="client_name"
          />
          <input  data-aos="zoom-in-up" data-aos-delay="400"
            type="email"
            name="email"
            required
            className="w-[80%] py-4 px-2 bg-slate-100 text-gray-600 rounded-md mobile-1:py-2 mobile-2:text-sm mobile-2:w-[90%]"
            placeholder="Email"
            id="client_email"
          />
          <textarea  data-aos="zoom-in-up" data-aos-delay="500"
            type="text"
            name="message"
            required
            rows="5"
            placeholder="Enter Message"
            id="client_message"
            className="w-[80%] h-[200px] py-4 px-2 bg-slate-100 text-gray-600 rounded-md mobile-2:text-sm mobile-2:w-[90%]"
          ></textarea>
        </div>

        <button  data-aos="zoom-in-up" data-aos-delay="600"
          type="submit"
          className="sendBtn bg-blue-300 rounded-lg mx-auto px-4 py-2 font-semibold hover:bg-blue-700 hover:text-white transition-all duration-500 ease-in-out transform active:scale-105 active:duration-500 active:bg-blue-300"
        >
          Send Message
        </button>
      </form>
      <Toaster />
    </div>
  );
}
