import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NavigationMenu from "./components/NavigationMenu";
import AllTeam from "./pages/AllTeam";
import Home from "./pages/Home";
import AllPlayer from "./pages/AllPlayer";
import RandomPlayer from "./pages/RandomPlayer";
import DetailPlayer from "./pages/DetailPlayer";
import Login from './pages/Login';
import { AuthProvider, useAuth } from './components/AuthContext';

function App() {

  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );

}


  function AppContent() {
    const { isAuthenticated } = useAuth();

    const pages = [
      {
        name: "Beranda",
        path: "/beranda",
      },
      {
        name: "Random Player",
        path: "/random-player",
      },
      {
        name: "All Team",
        path: "/all-team",
      },
      {
        name: "All Player",
        path: "/all-player",
      },
    ];
  
    const [currentURL, setCurrentURL] = React.useState("/");
  
    React.useEffect(() => {
      const url = window.location.href;
      const path = "/" + url.split("/").at(-1);
      setCurrentURL(path);
    }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 justify-center text-center">
      <NavigationBar>
        {pages.map((page, index) => (
          <NavigationMenu
            key={index}
            isActive={currentURL === page.path}
            onClick={() => setCurrentURL(page.path)}
          >
            <Link to={page.path}>{page.name}</Link>
          </NavigationMenu>
        ))}
      </NavigationBar>
      <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/beranda" exact element={<Home />} />
        <Route path="/random-player" exact element={<RandomPlayer />} />
        <Route path="/all-team" exact element={<AllTeam />} />
        <Route path="/all-player" exact element={<AllPlayer />} />
        <Route path="/detail-player" exact element={<DetailPlayer />} />
      </Routes>
    </div>
  );
  }

export default App;
