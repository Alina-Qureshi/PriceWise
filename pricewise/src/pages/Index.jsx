import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Herosection from '../components/Home/Herosection';
import Featuredproducts from '../components/Home/Featuredproducts';
import Searchpage from '../components/Home/TrendingDeals';
import Webbenefits from '../components/Home/Webbenefits';
import Usageofweb from '../components/Home/Usageofweb';
import Pagelayout from '../components/layout/Pagelayout';
import CallToAction from '../components/Home/CallToAction';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'PriceWise - Track Prices & Get Alerts';
  }, []);

  return (
    <Pagelayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Herosection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Featuredproducts />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Searchpage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Webbenefits />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Usageofweb />
        <CallToAction />
      </motion.div>
    </Pagelayout>
  );
};

export default Index;