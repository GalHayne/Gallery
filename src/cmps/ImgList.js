import ImgShow from "./ImgShow";

function ImgList({ animals }) {
    let renderImg = animals.map((animal) => {
        return <ImgShow key={animal.id} animalSrc={animal.src} />
    })


    return (
        <div className="d-flex justify-content-center flex-wrap">
            {renderImg}
        </div>
    )
}

export default ImgList;