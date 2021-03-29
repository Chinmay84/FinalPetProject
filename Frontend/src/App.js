
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './Components/Frontpages/HomePages/About.css'
import './Components/Frontpages/frontPage.css'
import Registration from './Components/Frontpages/Registration';
import NavBar from './Components/Frontpages/HomePages/NavBar';
import DoctorPage from './Components/Frontpages/Doctorpage'
import FosterPage from './Components/Frontpages/Fosterpage'
import Login from './Components/Frontpages/Login3'
import FileUpload from './Components/ProfileHome/FileUpload';

//import Navbar from "./Components/Pages/Navbar";
//import Sidebar from "./Components/Pages/SideBar";

//import Posts from "./Components/Pages/Posts";
import Posts from './Components/Pages/Posts';
import SideBar from './Components/Pages/SideBar';
import Profile from './Components/Pages/Profile';
import ForgotPassword from './Components/Frontpages/ForgotPassword'
import About from './Components/Frontpages/HomePages/About'
import Contact from './Components/Frontpages/HomePages/Contact'
import Doctore from './Components/Frontpages/HomePages/Doctore'
import Froster from './Components/Frontpages/HomePages/Froster'
import EditProfile from './Components/Frontpages/HomePages/EditProfile';
import Homepage from './Components/Frontpages/Homepage';
import Deletepage from './Components/Pages/Deletepage';
import Userlist from './Components/Frontpages/HomePages/UserList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/register" component={Registration}></Route>
          <Route path="/doctor" component={DoctorPage}></Route>
          <Route path="/foster" component={FosterPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/file" component={FileUpload}></Route>
          <Route path="/profile/home" component={Profile} />
          <Route path="/profile/edit" component={EditProfile} />
          <Route path="/profile/delete" component={Deletepage} />
          {/* <Route path="/logout" component={Logout}></Route> */}
          <Route path="/forgotpassword" component={ForgotPassword}></Route>
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/doctore" component={Doctore}></Route>
          <Route path="/froster" component={Froster}></Route>
          <Route path="/edit" component={EditProfile}></Route>
          <Route path="/userlist" component={Userlist}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
