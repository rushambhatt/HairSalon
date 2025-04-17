
function PhotoCard({photo}) {

    function onFavoriteClick(){
        alert("clicked")
    }

    return <div className="photo-card">

                <div className="photo-image">

                    <img src={photo.url} alt={photo.title}/>

                    <div className="photo-overlay">

                        <button className="favorite-btn" onClick={onFavoriteClick}>
                            ♥
                        </button>

                    </div>
                    
                </div>
            
            <div className="photo-info">
                <h3>{photo.title}</h3>
            </div>
            
            </div>
}

export default PhotoCard