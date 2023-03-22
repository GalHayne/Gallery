function GalleryDisplayType({ onClick = () => { 'default printing no pass to this cmp function' }, circleGallery = true }) {
    let galleryDisplayType = !circleGallery ? "bi bi-box-arrow-right" : "bi bi-border";

    return (
        <div>
            <button className="btn btn-secondary m-2" title="Change the way gallery images are displayed" onClick={onClick}><i className={galleryDisplayType}></i></button>
        </div>
    )

}

export default GalleryDisplayType;



