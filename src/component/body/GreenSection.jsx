
import 'bootstrap/dist/css/bootstrap.min.css';

function GreenSection() {
  return (
    <div
      className="text-white mx-auto text-center"
      style={{
        backgroundColor: '#626F47',
        padding: '25px 0',
        width: '100%',
        overflow: 'hidden',
        textTransform: 'uppercase',
        fontWeight: 'bold'
      }}
    >
      <section className="numbers pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-3 col-sm-4 mb-3">
              <div className="d-lg-block d-inline-flex align-items-center justify-content-center">
                <h3 className="mb-0 me-2">+1200</h3>
                <h4 className="mb-0">Hospital</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-3">
              <div className="d-lg-block d-inline-flex align-items-center justify-content-center">
                <h3 className="mb-0 me-2">+23K</h3>
                <h4 className="mb-0">Doctors</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="d-lg-block d-inline-flex align-items-center justify-content-center">
                <h3 className="mb-0 me-2">+9</h3>
                <h4 className="mb-0">Consultations</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="d-lg-block d-inline-flex align-items-center justify-content-center">
                <h3 className="mb-0 me-2">+120</h3>
                <h4 className="mb-0">City</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 mb-3">
              <div className="d-lg-block d-inline-flex align-items-center justify-content-center">
                <h3 className="mb-0 me-2">+25</h3>
                <h4 className="mb-0">Countries</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GreenSection;
