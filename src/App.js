import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notfound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NewMovieForm from "./components/newMovieForm";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/movies/new" component={NewMovieForm} />
        <Route path="/movies/:id" component={NewMovieForm} />
        <Route path="/movies" component={Movies} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>

      {/* <Movies /> */}
    </main>
  );
}

export default App;
