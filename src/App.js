import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/Header/Menu'
import Curso, { Graduacao, Mba, Mestrado, PosGraduacao } from './pages/Cursos';
import Sobre, {NossaHistoria, Unidades, Sustentabilidade, TrabalheConosco} from './pages/Sobre';

function App() {
  return (
   
    <Router>
      <Menu />
      <Switch>
        <Route path='/cursos' exact component={Curso} />
        <Route path='/cursos/graduacao' exact component={Graduacao} />
        <Route path='/cursos/posGraduacao' exact component={PosGraduacao} />
        <Route path='/cursos/mba' exact component={Mba} />
        <Route path='/cursos/mestrado' exact component={Mestrado} />
        <Route path='/sobre' exact component={Sobre} />
        <Route path='/sobre/nossaHistoria' exact component={NossaHistoria} />
        <Route path='/sobre/unidades' exact component={Unidades} />
        <Route path='/sobre/sustentabilidade' exact component={Sustentabilidade} />
        <Route path='/sobre/trabalheConosco' exact component={TrabalheConosco} />
      </Switch>
    </Router>
  );
}

export default App;
