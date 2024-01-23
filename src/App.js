import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
import Signup from "./Components/signup";
import Login from "./Components/login";
import VideoUpload from "./Components/Vupload";
import SearchPage from "./Components/SearchPage";
import VideoPlay from "./Components/VideoPlay";
import MyVid from "./Components/MyVid";
import PageNotfound from "./Components/pageNotfound";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<VideoUpload />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/play-video" element={<VideoPlay />} />
        <Route path="/my-video" element={<MyVid />} />
        <Route path="*" element={<PageNotfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
