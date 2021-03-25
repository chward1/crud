import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import CafeProject from './components/CafeProject';

const App = () => {
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
    < Router >
      <div>
        <header>

          <nav id="nav" className="navbar navbar-expand-md navbar-light fixed-top">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand d-block d-sm-none" id="brand" >Christina Ward</Link>
              <button onClick={() => handleOpenCloseNav()} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
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
                <div className="d-none d-md-block d-lg-block d-xl-block">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="navbar-brand">Christina Ward</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cafeproject" component={CafeProject} />
          </Switch>
        </main>
      </div>
    </Router >
  )
}

export default App;
