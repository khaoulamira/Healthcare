/* eslint-disable react/prop-types */
import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProgressBr() {
    function Section({ image, text, children, title, reverse }) {
        return (
            <div className="container mt-4 px-3">
                <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="col-lg-6">
                        <h6 className="text-green bg-white w-fit rounded-md px-3 py-2 font-bold">{title}</h6>
                        <h3 className="text-4xl font-bold pb-4">{text}</h3>
                        <p className="text-gray-600">
                            Traveling around the beautiful country is enriching. Create unforgettable memories and experiences. Exploring brings joy.
                        </p>
                        <div className="mt-4">
                            {children}
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img className="rounded-circle" src={image} alt="" style={{ width: '80%' }} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Section
                image='./src/assets/animegrl.jpg'
                text="Traveling with us and have a new soul and a different vibe."
                title='We Are One'
                reverse
            >
                <div className="d-flex justify-content-center align-items-center bg-light my-4 p-3 rounded shadow">
                    <div className="w-100 mx-2">
                        <h6 className="text-center">Satisfied Clients</h6>
                        <ProgressBar now={85} label={`${85}%`} className="mb-2 progress-custom" />
                    </div>
                    <div className="w-100 mx-2">
                        <h6 className="text-center">Success Rating</h6>
                        <ProgressBar now={90} label={`${90}%`} className="mb-2 progress-custom" />
                    </div>
                </div>
            </Section>
        </div>
    );
}

export default ProgressBr;
