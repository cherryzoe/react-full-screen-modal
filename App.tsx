import * as React from 'react';
import './style.css';
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal/Modal';

export default function App() {
  const [show, setShow] = React.useState(false);
  const handleShowModalButtonClicked = () => {
    setShow(true);
  };

  return (
    <div className="container">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {show && <Modal onClose={() => setShow(false)} />}
      </AnimatePresence>
      <button onClick={handleShowModalButtonClicked}>Show Modal</button>
    </div>
  );
}
