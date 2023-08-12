import { motion } from 'framer-motion';
import Bookmark from '../Bookmark/Bookmark';

const BookmarkPage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Bookmark />
    </motion.div>
  );
};

export default BookmarkPage;
