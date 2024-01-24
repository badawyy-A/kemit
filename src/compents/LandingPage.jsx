import MovieSlide from "./MovieSlide"



const LandingPage = ()=> {
    const randomNumber = Math.floor(Math.random() * 20);

    const currentIndex = randomNumber
  


    return(
        <div className="landing-page">
            <div className="slider">
                <MovieSlide index={currentIndex} />
            </div>
        <script>
      </script>
        </div>

    )
}
export default  LandingPage;