import './App.css';
//import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Overview from './pages/Overview';
//import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
//import Team from './pages/Team';
//import Header from './components/Header';
//import Menu from './components/Menu';
//import Teste from './components/Teste';

import Menu from './components/Header/Menu'
import Curso, { Graduacao, PosGraduacao } from './pages/Cursos';

function App() {
  return (
   
    <Router>
      <Menu />
      <Switch>
        <Route path='/cursos' exact component={Curso} />
        <Route path='/cursos/graduacao' exact component={Graduacao} />
        <Route path='/cursos/posGraduacao' exact component={PosGraduacao} />
      </Switch>
    </Router>
  );
}

export default App;