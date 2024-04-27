import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ( {children} ) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 0, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;