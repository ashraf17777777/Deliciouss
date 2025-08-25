/* eslint-disable no-unused-vars */
import Popular from "../components/popular";
import Viggie from "../components/veggie";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Popular />
      <Viggie />
    </motion.div>
  );
}

export default Home;
