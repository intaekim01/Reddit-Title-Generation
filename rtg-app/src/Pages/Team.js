import Intae from "../Images/Intae.png";
import George from "../Images/George.png";
import Qi from "../Images/Qi.png";
import Tymon from "../Images/Tymon.png";

function Team() {

    return (

        <div className="container-fluid text-center page pb-5">

            <div className="container">
                <div className="row">
                    <h2 className="pt-5">The Development Team</h2>
                </div>
            </div>

            <div className="container px-md-5">
                <div className="row">

                    <div className="col-sm-12 col-md-6">
                        <div className="py-5">
                            <div className="row d-flex justify-content-center">
                                <img className="Intae.png" src={Intae} style={{maxWidth: "200px", maxHeight: "200px"}} alt="..."/>
                            </div>
                            <div className="row">
                                <p><a href="https://www.ischool.berkeley.edu/people/tae-kim">Intae Kim</a></p>
                            </div>
                            <div className="row">
                                <span>Contact: intaekim01@gmail.com</span>
                                <span>Employment: Data Scientist, IBM</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-6">
                        <div className="py-5">
                            <div className="row d-flex justify-content-center">
                                <img className="George.png" src={George} style={{maxWidth: "200px", maxHeight: "200px"}} alt="..."/>
                            </div>
                            <div className="row">
                                <p><a href="https://www.ischool.berkeley.edu/people/george-rodriguez">George Rodriguez</a></p>
                            </div>
                            <div className="row">
                                <span>Contact: georgerodriguez@ischool.berkeley.edu</span>
                                <span>Employment: Data Assurance & Analytics Consultant, PwC</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-sm-12 col-md-6">
                        <div className="py-5">
                            <div className="row d-flex justify-content-center">
                                <img className="Tymon.png" src={Tymon} style={{maxWidth: "200px", maxHeight: "200px"}} alt="..."/>
                            </div>
                            <div className="row">
                                <p><a href="https://www.ischool.berkeley.edu/people/tymon-silva#profile-main">Tymon Silva</a></p>
                            </div>
                            <div className="row">
                                <span>Contact: tymon.silva@berkeley.edu</span>
                                <span>Employment: Industrial Engineer/Developer, Boeing</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="py-5">
                            <div className="row d-flex justify-content-center">
                                <img className="Qi.png" src={Qi} style={{maxWidth: "200px", maxHeight: "200px"}} alt="..."/>
                            </div>
                            <div className="row">
                                <p><a href="https://www.ischool.berkeley.edu/people/qi-yao">Qi Yao</a></p>
                            </div>
                            <div className="row">
                                <span>Contact: aliviny@berkeley.edu</span>
                                <span>Employment: </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

};

export default Team
