import { Route, Routes } from 'react-router-dom';
import { routes } from './Components/utils/routes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import { useContextGlobal } from "./Components/utils/global.context";



function App() {
  const {theme} = useContextGlobal()

  return (
    
      <div style={{ background: theme.background, color: theme.font }}>
        <Navbar/>
        <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path="*" element={<h1>Página no encontrada. ERROR 404</h1>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;
