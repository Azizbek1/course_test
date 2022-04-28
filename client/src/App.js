import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;