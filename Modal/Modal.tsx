import React, { useState } from 'react';

import styles from './Modal.module.css';
import { motion } from 'framer-motion';

const Modal = ({ onClose }) => {
  const handleCloseButtonOnClick = () => {
    onClose && onClose();
  };

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
    },
  };

  return (
    <div className={styles.backdrop}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
      >
        <h1 className={styles.text}>
          Create this <a href="https://algochurn.com">Modal</a>
        </h1>
        <button className="button" onClick={handleCloseButtonOnClick}>
          close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
