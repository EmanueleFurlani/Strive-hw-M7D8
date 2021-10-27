import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Bowser, Route } from "react-router-dom"
import { Container } from 'react-bootstrap';
import MyHome from './Components/MyHome';
import MyNavbar from './Components/MyNavbar';
import MyTrack from './Components/MyTrack';

function App() {
  return (
    <Bowser>
      <Container>
        <MyNavbar />
        <Route exact path="/" component={MyHome}/>
        <Route exact path="/:id" component={MyTrack}/>
      </Container>
    </Bowser>
  );
}

export default App;
