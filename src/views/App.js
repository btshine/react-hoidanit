import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailUser from './Users/DetailUser';
import LoginPage from './Login/LoginPage';
import Dashboard from './Login/DashBoard';
import Logout from './Login/LogOut';
import NewEmployee from './Login/NewEmployee';
import TrelloIntegration from './Login/TrelloIntegration';

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/newEmployee">
              <NewEmployee />
            </Route>
            <Route path="/trello">
              <TrelloIntegration />
            </Route>
          </Switch>
          {/* <MyComponent></MyComponent> */}
          {/* <ListTodo /> */}

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </Router>

  );
}

export default App;
