import Movie from "./components/Movie";
import { dummy } from "./movieDummy";

function App() {
  return (
    <div>
      <h1 className="app-subject"> Movie</h1>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

