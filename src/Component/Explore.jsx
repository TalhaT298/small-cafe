import { motion } from "framer-motion"
import Circle from "./../assets/circle.png";
import Circles from "./../assets/circles.png";
const Explore = () => {
  return (
    <section className="explore-section overflow-hidden">
      <div className="container mx-auto px-5 pl-16">
        <div className="grid grid-cols md:grid-cols-2 py-5 items-center">
          <div className="" data-aos="fade-down" data-aos-duration="700">
            <h2 className="font-bold text-50 pb-5 text-left text-primary">
              Explore your <br></br>favourite city’s food.
            </h2>
            <p className="text-xl text-secondary text-left">
              Lorem ipsum dolor sit amet consectetur. Ornare massa nunc <br>
              </br>nibh
              tristique. Non ligula tristique ut ut libero sit convallis<br></br>
              maecenas. At egestas auctor porta mattis.
            </p>
            <p className="pt-8"> <img src="https://i.ibb.co/qdXPLXM/Primary-button-Large.png" alt="" />
            </p>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-duration="700">
            <img src={Circles} alt="Circle" className="w-full h-full" />
            
            {/* <img
              src={Circle}
              alt="Circle"
              className="absolute top-0 left-0 w-full h-full"
            /> */}
            <motion.img
      src={Circle}
      className="absolute top-0 left-0 w-full h-full"
      initial={{ x: "-100%" }} // start from right edge of container
      animate={{ x: 0 }} // move to left edge of container
      transition={{ duration: 3 }} // animate for 1 second
    />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
