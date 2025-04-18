
function PhotoCard({photo}) {


    return <div className="photo-card">

                <div className="photo-image">

                    <img src={photo.url} alt={photo.title}/>

                    <div className="photo-overlay">
                    </div>
                    
                </div>
            
            <div className="photo-info">
                <h3>{photo.title}</h3>
            </div>
            
            </div>
}

export default PhotoCard