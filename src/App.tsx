import HomeScreen from './pages/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootswatch/dist/pulse/bootstrap.min.css';
import { VideoForm } from './components/Videos/VideoForm';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/create-video' component={VideoForm} exact />
    </Router>
  );
}

export default App;
