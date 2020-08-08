//Arquivo que inicializa o react p nós
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () =>  (<div>Página 404</div>) 

ReactDOM.render(
  <BrowserRouter>
    <Switch> 
      <Route path="/" component={Home} exact/>      
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />   
    </Switch>    
  </BrowserRouter>,
  document.getElementById('root')
);

  // <Route path="/" component={App} />
  // <Route path="/cadastro/video" component={CadastroVideo} />
  //se fosse assim, sem o exact no App e o app em cima, e vc digitar /cadastro/video, abre na home (ordem de prioridade)
  //pois na primeira barra q ele encontra ja retorna

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

