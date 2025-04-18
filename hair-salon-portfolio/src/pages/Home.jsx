import PhotoCard from "../components/PhotoCard"

function Home() {

    return (
    <div className="home">
        <div className="home-text">
            <h1 className="intro">
                About Me: Sushma Bhatta
            </h1> 

            <h2 className="aboutMe">
                I love to eat lots of food and drink lots of alcohol.
            </h2>

            <h2 className="aboutMe">
                Oh! I am also really good at doing hair.
            </h2>
        </div>
        
        <div className="home-photo">
            <PhotoCard className="photo-item" photo={{url: "/photos/IMG_6241.jpg", title: "This is me!"}}/>
        </div>
    </div>
    )
}

export default Home