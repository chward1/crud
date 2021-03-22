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
            <p className="lead">I develop beautiful and functional websites using HTML5, CSS3, JavaScript, Bootstrap5. Here are some examples of my work below.</p>
          </div>
          <div className="col-xs-12 col-md-5">
            <img className="rounded-circle img-fluid" src={portrait} alt="Christina Ward" />


          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div class="container marketing">
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
              <h2>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
              <h2>Heading</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div class="col-lg-4">
              <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette" id="aboutMe">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">A little more about me...</h2>
            <p className="lead">Originally from southern California and now based out of Sebastopol, CA.  I am truly grateful for my family, my dogs (Lucy and newest addition Penny - featured left), and any time to relax outdoors.</p>
            <p className="lead"></p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="rounded-circle featurette-image img-fluid mx-auto" width="500" height="500" src="penny.jpg" preserveAspectRatio="xMidYMid slice" focusable="false" />

          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette" id="aboutMe">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Contact Information</h2>
            <p className="lead">I would to hear from you! Feel free to reach out.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /></svg>

          </div>
        </div>

        <hr className="featurette-divider" />
        <footer className="container">
          <p>Christina.harney@gmail.com</p>
          <p className="float-end"><a href="#">Back to top</a></p>

        </footer>
      </main>
    </div >

  );
}

export default App;
