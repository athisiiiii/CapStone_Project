import './App.css';
import NavBar from './components/Navbar';


import NoPageFound from './components/NoPageFound';
import SearchAppointmentContainer from './components/SearchAppointmentContainer';
import store from './store/myStore';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import EditAppointmentContainer from './components/EditAppointmentContainer';

function App() {
  return (
     <Provider store = {store}>
      <Routes>
          <Route path='/appointments/search' element={<SearchAppointmentContainer />} />
          <Route path='/appointments/add' element={<EditAppointmentContainer mode="add" />} />
          <Route path='/appointments/edit' element={<EditAppointmentContainer mode="edit" />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoPageFound />} />
      </Routes>
     </Provider>
  );
}

function Home() {
  return (
    <div>
      <NavBar /><br />
      <h1 style={{ textAlign: "center" }}>WELCOME TO THE CLINIC MANAGEMENT SYSTEM</h1>
    </div>
  )
}

export default App;
