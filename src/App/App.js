import './App.css';
import LandingPage from '../components/Pages/LandingPage/LandingPage'
import ClaimPage from '../components/Pages/ClaimPage/ClaimPage';
import LeavePage from '../components/Pages/LeavePage/LeavePage';
import PayPage from '../components/Pages/PayPage/PayPage';
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage}></Route>
      <Route path='/payslip' component={PayPage}></Route>
      <Route path='/claim' component={ClaimPage}></Route>
      <Route path='/leave' component={LeavePage}></Route>
    </Router>
  );
}

export default App;
