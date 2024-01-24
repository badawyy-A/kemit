import SginUp from "./compents/SginUp"
import NavBar from "./compents/NavBar"
import LandingPage from "./compents/LandingPage"
import MovieContaien from "./compents/MovieContainer"

function App() {

  return (
    <div className="app">
        <NavBar/>
        <SginUp/>
        <LandingPage/>
        <MovieContaien/>
    </div>

  )
}

export default App

