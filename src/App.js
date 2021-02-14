import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { lazy, Suspense } from 'react';

const Menu = lazy (() => import('./Components/Menu'));
const Rotas = lazy(() => import('./rotas'))
const Rodape = lazy(() => import('./Components/Rodape'))

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Suspense fallback={ <p>Carregando... Aguarde por favor</p>}>
          <Menu />
        </Suspense>        
      </header>
      
      <main>
        <Container>
        <Suspense fallback={ <p>Carregando... Aguarde por favor</p>}>
          <Rotas />
        </Suspense>   
        </Container>
      </main>
      <br /><br /><br />
      
      <footer>
       <Suspense fallback={ <p>Carregando... Aguarde por favor</p>}>
        <Rodape />
        </Suspense>   
      </footer>      
    </div>
    </BrowserRouter>    
  );
}

export default App;
