import './App.css';
import MoviesList from './components/MoviesList'

function App() {
  return (
    <div className="App">
      <main role="main" className="container">

        <div className="starter-template">
          <h1>Bootstrap starter template</h1>
          <p className="lead">Use this document as a way to quickly start any new project.
          All you get is this text and a mostly barebones HTML document.</p>
        </div>

      </main>
      <MoviesList/>
    </div>
  );
}

export default App;
