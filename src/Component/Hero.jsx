import { motion } from "framer-motion"
import Dish from "./../assets/dish.png";
import Plate from "./../assets/plate-of-food-png.png";
import Tree from "./../assets/tree.png"
import { FaSearch } from 'react-icons/fa';
import { BsFillPatchCheckFill } from 'react-icons/bs';
const Hero = () => {
  return (
    <section className="hero-section py-10 bg-[#F0F4EC] overflow-hidden">
      <div className="container mx-auto px-5 pl-16">
        <div className="grid grid-cols-5 gap-5 items-center justify-center md:justify-start">
          <div
            className="left-side col-span-5 md:col-span-3 relative"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <img
              src={Tree}
              alt=""
              className="absolute -left-5 -top-24 w-32 h-32"
            />
            <h2 className="font-bold text-center md:text-left text-primary text-5xl md:text-65 pb-5">
              Order food online <br></br>from your favourite <br></br>local restaurants<span className="text-orange-500">.</span>
            </h2>
            <div className="text-left">
              <p className="text-center md:text-left text-2xl text-secondary pb-5">
                Freshly made food delivered to your door.
              </p>
            </div>
            <div className="relative rounded-md w-full mt-5">
              <div className="absolute w-10 h-10 bg-orange-500 rounded-full top-[50%] transform -translate-y-1/2 inset-y-0 left-5 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="text"
                className="w-full h-14 px-16 rounded-l-full rounded-r-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></input>
              <button className="absolute h-14 px-10 bg-primary text-2xl text-white rounded-full right-0">
              <FaSearch className="inline pr-1 pb-1" />Search
              
              </button>
            </div>
          </div>
          <div
            className="col-span-5 md:col-span-2 pt-12 lg:pt-0 relative"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            
            <img
              src={Tree}
              alt=""
              className="absolute -right-10 top-10 w-40 h-40"
              
            />
             
            <motion.div animate={{scale:1}}>
            <img
              src={Plate}
              alt=""
              className="absolute -left-16 top-10 w-40 h-40"
            />
            </motion.div>
            <div className="absolute flex flex-col items-center justify-center p-2 bg-slate-100 left-[40%] top-0 rounded-lg">
              <h3 className="font-bold text-xl text-orange-500"><BsFillPatchCheckFill className="inline pr-1 pb-1"/>200K+</h3>
              <p className="text-sm text-secondary">People Delivered</p>
            </div>
            <img src={Dish} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
