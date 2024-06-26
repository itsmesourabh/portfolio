import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration:0.5}}
        >
          .
        </motion.span>
        <div className="social">
          <a href="https://github.com/itsmesourabh">
            <img src="/github.jpg" alt="Github" />
          </a>
         
          <a href="https://www.linkedin.com/in/sourabh-kashyap/">
            <img src="/linkedin.jpg" alt="linkedin" />
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
