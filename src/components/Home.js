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
import pointReyes from '../images/pointReyes.jpeg'



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

            if (response.data.status === 'success') {
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
                    <div className="col-xs-12 col-md-4 pb-8">
                        <h2 className="featurette-heading mt-4">Hi! I'm Christina.</h2>
                        <p className="lead">I am software developer based out of northern California.</p>
                        <p className="lead">I create beautiful and functional websites using HTML5, CSS3, JavaScript, Bootstrap5. Check out some examples of my work below.</p>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <img className="rounded-circle img-fluid" src={portrait} alt="Christina Ward" />


                    </div>
                </div>
                <hr className="featurette-divider"></hr>
                <div class="container marketing">
                    <div class="row">
                        <div class="col-lg-4"><Link to="/cafeproject" className="text-decoration-none link-secondary">
                            <img className="rounded-circle" src={teaBackground} alt="Tea leaves" width="140" height="140" />
                            <h2>Cafe Project</h2>
                            <p>Exercise in CSS3 and fun with formatting.</p></Link>
                        </div>


                        <div class="col-lg-4"><a href="#" className="text-decoration-none link-secondary">
                            <img className="rounded-circle" src={pointReyes} alt="" width="140" height="140" />
                            <h2>E-Commerce</h2>
                            <p>E-Commerce sandbox featuring an upcoming photographer.</p></a>
                        </div>

                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2>Style Guide</h2>
                            <p>Sample style guide for Tina in Progress.</p>
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" id="aboutMe"></hr>

                <div className="row featurette">
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

                        <form id="contact-form" onSubmit={(e) => submitEmail(e)} method="POST" className="pb-5">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-med-6 pb-1">
                                        <input placeholder="Name" id="name" type="text" className="form-control" required value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-med-6 pb-1">
                                        <input placeholder="Email" id="email" type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group pb-1">
                                <input placeholder="Subject" id="subject" type="text" className="form-control" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="form-group pb-2">
                                <textarea id="message" className="form-control" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button type="submit" className="btn-secondary btn-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </main >
        </div >

    );
}

export default Home;
