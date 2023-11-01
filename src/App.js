// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header/Header';
import Blog from './components/BlogForm/Blog';
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './components/home/Home'
function App() {
  return (
    <>
    {/* <Home/> */}
     {/* <BrowserRouter>
      
      <Routes>
         <Header/>
        <Route path="/" element={<Home/>}>
      
          <Route path="blogs" element={<Blog />} />
    
        </Route>
      </Routes>
    </BrowserRouter> */}
          <BrowserRouter>

<Routes>
    <Route path="/" element={<Home />} />

    <Route path="/players">
    {players.map((player) => {
        return (
        <Route exact key={player.name} path={`/players/${player.name}`}>
            <Player player={player} />
        </Route>
        );
    })}
    </Route>
</Routes>  

</BrowserRouter>
   

    </>
  );
}

export default App;
