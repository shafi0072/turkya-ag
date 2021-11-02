import React from 'react';
import Location from '../../../Resorce/images/Icon material-location-on.png';
import Massage from '../../../Resorce/images/Icon zocial-email.png';
import Phone from '../../../Resorce/images/Icon awesome-phone-alt.png';
import Clock from '../../../Resorce/images/Icon simple-clockify.png';
import Img1 from '../../../Resorce/images/Mention.png';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact-container py-5">
            <div className="container">
                <h1 className="contact-title">Contact</h1>
                <p className="contact-p py-4">Aucun projet n'est trop petit ! Contactez nous pour ajouter de la valeur à votre projet et matérialiser vos idées.</p>
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <h6>Contactez-nous</h6>
                        <form>
                        <div class="form-group">
                            <input type="text" class="form-control contact-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control contact-input" id="exampleInputPassword1" placeholder="Courriel"/>
                        </div>
                        <textarea className="contact-textarea" name="" id="" cols="30" rows="3" placeholder="Massage">

                        </textarea>
                        <button type="submit" class="btn contact-button">Submit</button>
                        </form>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="text-left">
                            <h2 className="m-0 text-lime">The Shark</h2>
                            <p className="my-2">Pour obtenir une soumission dans les 24 heures, envoyez-nous votre modèle 3D (format STL) par courriel. Nous pouvons également faire le transfert de différents formats de fichiers.<br/><br/>
                            Sinon, un sketch à la main ou des photos peuvent très bien initier</p>
                            <div className="d-flex my-2 mt-4">
                                <div className="contact-icon-container">
                                    <img className="contact-icon" src={Location} alt="" />
                                </div>
                                <p className="information-p">Street: 3804 Sunburst Drive. City: Fort Myers Beach.</p>
                            </div>
                            <div className="d-flex my-2">
                                <div className="contact-icon-container">
                                    <img className="contact-icon" src={Massage} alt="" />
                                </div>
                                <p className="information-p">info@sample.com</p>
                            </div>
                            <div className="d-flex my-2">
                                <div className="contact-icon-container">
                                    <img className="contact-icon" src={Phone} alt="" />
                                </div>
                                <p className="information-p text-lime">123456789</p>
                            </div>
                            <div className="d-flex my-2">
                                <div className="contact-icon-container">
                                    <img className="contact-icon" src={Clock} alt="" />
                                </div>
                                <p className="information-p">lundi au vendredi de 8h00 à 17h00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img className="mt-5" src={Img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;