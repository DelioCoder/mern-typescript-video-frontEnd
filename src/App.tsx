import HomeScreen from './pages/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootswatch/dist/pulse/bootstrap.min.css';
import { VideoForm } from './components/Videos/VideoForm';
import { Navbar } from './components/Navbar/Navbar';

//NOTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/new-video' component={VideoForm} exact />
      <Route path='/update/:id' component={VideoForm} exact />
      <ToastContainer />
    </Router>
  );
}

export default App;
