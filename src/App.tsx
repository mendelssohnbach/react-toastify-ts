import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeRandomColorStyle } from './lib/makeRandomColorStyle';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div style={makeRandomColorStyle()}>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
