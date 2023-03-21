function ImgShow({ animalSrc }) {
    return (
        <div className="w-25 m-2">
            <img className="rounded w-100" src={require(`../images/${animalSrc}`)} alt="animal" />
        </div>
    )
}

export default ImgShow;