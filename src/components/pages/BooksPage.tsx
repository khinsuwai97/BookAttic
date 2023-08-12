import { motion } from 'framer-motion';
import Books from '../Books/Books';

const BooksPage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Books />
    </motion.div>
  );
};

export default BooksPage;
