import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetup from "./Pages/AllMeetup";
import AddMeetup from "./Pages/AddMeetup";
import MyFavorates from "./Pages/MyFavorates";
import MainNavigation from "./Component/layout/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetup />}></Route>
        <Route path="/add-meetup" element={<AddMeetup />}></Route>
        <Route path="/favorates" element={<MyFavorates />}></Route>
        <Route path="*" element={<AllMeetup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
