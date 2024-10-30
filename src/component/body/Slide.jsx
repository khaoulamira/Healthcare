/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'; // Import Card from Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Slide = () => {
  // Sample Data: List of Objects
  const data = [
    { name: 'John Doe', profession: 'Psychiatry', experience: '19 years', img: './src/assets/img.jpg', title: 'Deals with mental health disorders, including diagnosis, treatment, and prevention.', city: 'Rabat' },
    { name: 'Shiguraki Kimora', profession: 'Internal Medicine', experience: '8 years', img: './src/assets/animegrl.jpg', title: 'Eyes consult and surgery', city: 'Casa' },
    { name: 'Atagami Ryou', profession: 'Family Medicine', experience: '20 years', img: './src/assets/oldman2.jpg', title: 'Focuses on comprehensive healthcare for individuals and families across all ages, genders, and diseases.', city: 'Tanger' },
    { name: 'Minama Key', profession: 'Surgery', experience: '15 years', img: './src/assets/img.jpg', title: 'Involves performing surgical procedures to treat diseases, injuries, or deformities.', city: 'Rabat' },
    { name: 'Shizouko Moriota', profession: 'Emergency Medicine', experience: '10 years', img: './src/assets/oldman3.jpg', title: 'Focuses on the immediate care of patients with acute illnesses or injuries.', city: 'Rabat' },
    { name: 'Livey Dirman', profession: 'Anesthesiology', experience: '15 years', img: './src/assets/blackeyeshair.jpg', title: 'Specializes in pain relief and anesthesia.', city: 'Casa' },
    { name: 'Andy Tanaka', profession: 'Gastroenterology', experience: '30 years', img: './src/assets/img.jpg', title: 'Specializes in the digestive system and its disorders.', city: 'Tanger' },
    { name: 'Minouri Takahashi', profession: 'Cardiology', experience: '22 years', img: './src/assets/animebymafia.jpg', title: 'Specializes in diagnosing and treating heart and blood vessel disorders.', city: 'Rabat' },
  ];

  const Explore = ({ name, profession, experience, title, city }) => {
    return (
      <Card 
        className="text-center text-black" 
        style={{ 
          width: '300px', 
          height: '400px', // Fixed height for the card
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
          border: 'none', // No border for the card
          overflow: 'hidden', // Prevent content overflow
        }}
      >
        <Card.Body>
          <Card.Title className="display-6">{name}</Card.Title>
          <Card.Subtitle className="text-muted">{profession}</Card.Subtitle>
          <Card.Text>{experience} of experience</Card.Text>
          <Card.Text><strong>Our job is:</strong> {title}</Card.Text>
          <Card.Text><strong>From:</strong> {city}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="container pt-1">
      <div className="py-2">
        <div className="text-center mb-2">
          <h4 className="display-4">Explore Doctors</h4>
        </div>
        <Carousel interval={2000} controls={true} indicators={false}>
          {data.map((doctor, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center align-items-center">
                <img 
                  src={doctor.img} 
                  alt={doctor.name} 
                  style={{ 
                    width: '100%', // Full width
                    height: '330px', // Fixed height for the image
                    objectFit: 'cover' // Maintain aspect ratio
                  }} 
                />
                <Carousel.Caption 
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{ 
                    position: 'absolute', // Make the caption absolute to keep it fixed
                    top: '50%', // Center the caption vertically
                      left: '50%', // Center the caption horizontally
                    transform: 'translate(-50%, -50%)', // Adjust for centering
                    width: '300px', // Fixed width for the caption
                    height: '290px', // Match the height of the card
                    display: 'flex', // Use flexbox for alignment
                    justifyContent: 'center', // Center content vertically
                    alignItems: 'center', // Center content horizontally
                  }}
                >
                  <Explore
                    name={doctor.name}
                    profession={doctor.profession}
                    experience={doctor.experience}
                    title={doctor.title}
                    city={doctor.city}
                  />
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;
