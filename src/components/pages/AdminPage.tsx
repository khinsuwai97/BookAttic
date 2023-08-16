import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminPage = () => {
  return (
    <motion.main
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Outlet />
    </motion.main>
  );
};

export default AdminPage;
