import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './carousel.css'
import 'popper.js/dist/popper.min.js'
import portrait from './portrait.jpg'

function App() {

  const handleOpenCloseNav = () => {
    const navBarToggler = document.getElementsByClassName("navbar-toggler");
    if (navBarToggler[0].classList.contains("collapsed")) {
      navBarToggler[0].classList.remove("collapsed");
    } else {
      navBarToggler[0].classList.add("collapsed")
    }

    const showNavToggler = document.getElementById("navbarCollapse");
    if (showNavToggler.classList.contains("show")) {

      showNavToggler.classList.remove("show");
    } else {
      showNavToggler.classList.add("show")
      // showNavToggler.classList.remove("collapsed")
      // showNavToggler.classList.add("collapsing")
    }

    // setTimeout(() => {
    //   if (showNavToggler.classList.contains("collapsing")) {
    //     showNavToggler.classList.remove("collapsing");
    //     showNavToggler.classList.add("collapsed")
    //   }
    // }, 2000)
  }


  return (
    <div>
      <header>
        <nav id="nav" className="navbar navbar-expand-md navbar-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button onClick={() => handleOpenCloseNav()} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#aboutMe">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/in/christina-ward" tabIndex="-1">LinkedIn</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/chward1/crud">GitHub</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="row featurette first justify-content-evenly">
          <div className="col-xs-12 col-md-4">
            <h2 className="featurette-heading">Hi! I'm Christina.</h2>
            <p className="lead">I develop beautiful and functional websites.</p>
          </div>
          <div className="col-xs-12 col-md-5">
            <img className="rounded-circle img-fluid" src={portrait} alt="Christina Ward" />


          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette" id="aboutMe">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">A little more about me...</h2>
            <p className="lead">Originally from southern California and now based out of Sebastopol, CA.  I am truly grateful for my family, my dogs, and any time to relax outdoors. I am instrincally curious and love to learn.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /></svg>

          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Here are a few things I've been working on.</h2>
            <p className="lead"></p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette" id="aboutMe">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Contact Information</h2>
            <p className="lead">Originally from southern California and now based out of Sebastopol, CA.  I am truly grateful for my family, my dogs, and any time to relax outdoors. I am instrincally curious and love to learn.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /></svg>

          </div>
        </div>

        <hr className="featurette-divider" />
        <footer className="container">
          <p className="float-end"><a href="#">Back to top</a></p>

        </footer>
      </main>
    </div >

  );
}

export default App;
