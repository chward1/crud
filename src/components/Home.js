import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/carousel.css'
import 'popper.js/dist/popper.min.js'
import portrait from '../images/portrait.jpg'
import penny from '../images/penny.jpg'
import { Link } from 'react-router-dom'
import teaBackground from '../images/teaBackground.jpg'
import { useState } from 'react'
import axios from 'axios';


function Home() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitEmail = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3001/send",
            data: { name, email, subject, message }
        }).then((response) => {
            debugger;

            if (response.data.status === 'success') {
                alert("Message Sent.");
                resetForm();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }



    return (

        <div>

            <main>
                <div className="row featurette first justify-content-evenly">
                    <div className="col-xs-12 col-md-4">
                        <h2 className="featurette-heading">Hi! I'm Christina.</h2>
                        <p className="lead">I am software developer based out of northern California.</p>
                        <p className="lead">I create beautiful and functional websites using HTML5, CSS3, JavaScript, Bootstrap5. Check out some examples of my work below.</p>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <img className="rounded-circle img-fluid" src={portrait} alt="Christina Ward" />


                    </div>
                </div>
                <hr className="featurette-divider"></hr>
                <div className="container marketing">
                    <div className="row">
                        <Link to="/cafeproject">
                            <div className="col-lg-4">
                                <img className="rounded-circle" src={teaBackground} alt="Tea leaves" width="140" height="140" />
                                <h2>Cafe Project</h2>
                                <p>Exercise in CSS3 and fun with formatting.</p>
                            </div>
                        </Link>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
                            <h2>E-commerce</h2>
                            <p>Sample online store for a upcoming landscape photographer.</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
                            <h2>Style Guide</h2>
                            <p>Sample style guide for Tina in Progress.</p>
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider"></hr>

                <div className="row featurette" id="aboutMe">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">A little more about me...</h2>
                        <p className="lead">I am originally from southern California and now based out of Sebastopol, CA.  I am truly grateful for any time I have to spend time with my family, relax outdoors or play with my puppies (Lucy and our newest addition, puppy Penny - featured left).</p>
                        <p className="lead"></p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="rounded-circle img-fluid mx-auto" src={penny} alt="Puppy Penny" />

                    </div>
                </div>

                <hr className="featurette-divider" />
                <div className="row featurette" id="contactMe">
                    <div className="col-md-7 order-md-12">
                        <h2 className="featurette-heading">Contact Me</h2>
                        <p className="lead">Do you want to work with me? I would love to hear from you!</p>
                        <form id="contact-form" onSubmit={(e) => submitEmail(e)} method="POST">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-med-6">
                                        <input placeholder="Name" id="name" type="text" className="form-control" required value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-med-6">
                                        <input placeholder="Email" id="email" type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input placeholder="Subject" id="subject" type="text" className="form-control" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <textarea id="message" className="form-control" rows="1" required value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button type="submit" className="primary-btn submit">Submit</button>
                        </form>
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

export default Home;
