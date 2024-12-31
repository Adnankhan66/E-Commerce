import Navbar from './components/Navbar'
import Header from './components/Header'
import ExploreMenu from './components/ExploreMenu'
import Footer from './components/Footer'
import { useState } from 'react';
import { CounterProvider } from './components/CounterContext';
import { Route,Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {

  const [counter, setCounter] = useState(0); 

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter > 0 ? counter - 1 : 0);

  return (
    <CounterProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div>
          <Header />
          <ExploreMenu/>
          </div>
        }/>
      </Routes>
      <Footer />
    </CounterProvider> 
  )
}

export default App
