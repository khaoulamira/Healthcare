// src/Homepage.jsx
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

function Homepage() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center"> {/* Center items vertically */}
        {/* Left Section: Image */}
        <div className="col-md-4 d-flex justify-content-center"> {/* Center image horizontally */}
          <img 
            src="././src/assets/img.jpg" // Replace with your image URL
            alt="Sample"
            className="img-fluid" // Ensures the image is responsive
            style={{ maxWidth: '100%', height: 'auto' }} // Ensure image fits well
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className='col-md-8 d-flex flex-column justify-content-center'> {/* Center content vertically */}
          <h2>Welcome </h2>
          <p>
                      When it comes to helth care. Our doctors are a group of an elite known for there rich experiences
            more that 6 years in the sector of med. We will be honored to serve you and help you to get better and better. 
         <p> Stop wasting time and take your :</p>
                  </p>

          {/* Small Button in the Center */}
          <div className="d-flex justify-content-center mt-1">
            <Button style={{ backgroundColor: 'green' }} variant="primary" size="bg">Appointment</Button> {/* Resized Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
