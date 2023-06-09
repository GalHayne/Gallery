import { useState } from "react";

/////import cmps//////
import Gallery from "./cmps/Gallery";
import Header from "./cmps/Header";
import Checkbox from "./cmps/CheckBox";
import ImgList from "./cmps/ImgList";
import GalleryDisplayType from "./cmps/GalleryDisplayType";
import Footer from "./cmps/Footer";

/////import animals/////////
import animals from "./data/animals"

function App() {
  const [infiniteSlide, setMyInfiniteSlide] = useState(false);
  const [circleGallery, setCircleGallery] = useState(true);

  const handlePhotoChange = (str) => {
    console.log(str);
  };


  const handleCheckBoxChange = () => {
    setMyInfiniteSlide(!infiniteSlide)
  }

  const handleGalleryDisplayTypeChange = () => {
    setCircleGallery(!circleGallery);
  }


  return (
    <div>
      <Header />
      <GalleryDisplayType onClick={handleGalleryDisplayTypeChange} circleGallery={circleGallery} />
      {circleGallery ? <Gallery animals={animals} firstImage={0} infiniteSlide={infiniteSlide} onChange={handlePhotoChange} /> : <ImgList animals={animals} />}
      {circleGallery && <Checkbox onChange={handleCheckBoxChange} label="Infinite photo slide" />}
      <Footer />
    </div>
  );
}

export default App;
