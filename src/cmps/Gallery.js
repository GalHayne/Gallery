import { useState } from "react";
import ImgShow from "./ImgShow";

function Gallery({ animals, firstImage = 0, infiniteSlide = true, onChange = () => { console.log('no function'); } }) {

    const [currImageIdx, setCurrImage] = useState(firstImage)

    const handleNextPhoto = () => {
        onChange('The user click on next img button');
        if (currImageIdx === animals.length - 1) {
            if (infiniteSlide) {
                setCurrImage(0);
            }
        } else {

            setCurrImage((idx) => idx + 1)
        }
    }

    const handlePrevPhoto = () => {
        onChange('The user click on prev img button');
        if (currImageIdx === 0) {
            if (infiniteSlide) {
                setCurrImage(animals.length - 1);
            }
        } else {

            setCurrImage((idx) => idx - 1)
        }
    }

    let currentAnimal = animals[currImageIdx];

    return (
        <div>
            <div className="gallery w-100 rounded d-flex align-items-center justify-content-center">
                <button disabled={!infiniteSlide && currImageIdx === 0} className="bi bi-arrow-left rounded btn btn-primary w-70" onClick={handlePrevPhoto} title={"back to prev image"}></button>
                <ImgShow animalSrc={currentAnimal.src} />
                <button disabled={!infiniteSlide && currImageIdx === animals.length - 1} className="bi bi-arrow-right rounded btn btn-primary w-70" onClick={handleNextPhoto} title={"go to next image"}> </button>
            </div>
            <p className="text-center fs-3">{currImageIdx + 1}/{animals.length}</p>
            <div className="card w-25 text-center mx-auto m-5">
                <div className="card-header">
                    <h3>Animal Information</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Animal Name: {currentAnimal.animalName}</li>
                    <li className="list-group-item">Age: {currentAnimal.animalAge}</li>
                    <li className="list-group-item">Weight: {currentAnimal.Weight} Kg</li>
                </ul>
            </div>
        </div >



    )

}

export default Gallery;