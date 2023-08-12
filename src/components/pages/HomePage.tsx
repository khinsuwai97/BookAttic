import { motion } from 'framer-motion';
import Hero from '../Home/Hero';
import FeaturedBooks from '../Home/FeaturedBooks';
import Quote from '../Home/Quote';

const HomePage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedBooks />
      <Quote />
    </motion.div>
  );
};

export default HomePage;
