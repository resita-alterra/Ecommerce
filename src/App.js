import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "unistore/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "./store";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dummy from "./pages/dummy";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Koleksi from "./pages/Koleksi";
import DetilBuku from "./pages/DetilBuku";
import TambahBuku from "./pages/TambahBuku";
import Bukuku from "./pages/Bukuku";
import Transaksiku from "./pages/Transaksiku";
import EditBuku from "./pages/EditBuku";
import GantiProfil from "./pages/GantiProfil";
import EditUser from "./pages/EditUser";
import EditTransaksi from "./pages/EditTransaksi";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dummy" component={Dummy} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/koleksi" component={Koleksi} />
          <Route path="/buku/:id" component={DetilBuku} />
          <Route exact path="/tambahbuku" component={TambahBuku} />
          <Route exact path="/bukuku" component={Bukuku} />
          <Route exact path="/transaksiku" component={Transaksiku} />
          <Route path="/editbuku/:id" component={EditBuku} />
          <Route exact path="/gantiprofil" component={GantiProfil} />
          <Route exact path="/edituser" component={EditUser} />
          <Route exact path="/edittransaksi" component={EditTransaksi} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
