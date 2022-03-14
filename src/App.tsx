import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Navbar from './components/Statics/Navbar/Navbar';
import Footer from './components/Statics/Footer/Footer';
import Login from './pages/Login/Login';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario';
import ListaTema from './components/Temas/ListaTema/ListaTema';
import ListaPostagem from './components/Postagens/ListaPostagem/ListaPostagem';
import CadastroPost from './components/Postagens/CadastroPostagem/CadastroPostagem';
import DeletarPostagem from './components/Postagens/DeletarPostagem/DeletarPostagem';
import CadastroTema from './components/Temas/CadastroTema/Cadastro';
import DeletarTema from './components/Temas/DeletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(): JSX.Element {
  return (
    <Provider store ={ store }>
      <ToastContainer />
<Router>
  <Navbar />
    <Switch>
      <div style={{minHeight: '100vh'}}>
      <Route exact path='/'>
          <Login />
        </Route> 
      <Route path='/login'>
          <Login />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/cadastrousuario'>
          <CadastroUsuario />
        </Route>
        <Route path='/tema'>
          <ListaTema />
        </Route>
        <Route path='/postagem'>
          <ListaPostagem />
        </Route>
        <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>


        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
