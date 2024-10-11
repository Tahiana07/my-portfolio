import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/styles/Contacts.css';


const Contacts = () => {
	return(
		<>
			<MDBFooter style={{ backgroundColor: '#02255F' }} className='text-center text-lg-start text-muted'> {/* bgColor= 'light' */}
		      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-top border-bottom'>
		        <div className='me-4 d-none d-lg-block' style={{ color: '#fff' }}>
		          <span>Contacts sur les réseaux sociaux:</span>
		        </div>

		        <div className="zindex-ap">
		          <a href='https://www.facebook.com/njaka-tahiana.16' className='me-4 text-reset'>
		            <MDBIcon fab style={{ color: '#fff' }} icon="facebook-f" />
		          </a>
		          {/*<a href='njaka.tahiana07@gmail.com' className='me-4 text-reset'>
		            <MDBIcon fab style={{ color: '#fff' }} icon="google" />
		          </a>*/}
		          <a href='https://www.instagram.com/tahiana07?igsh=MWxrYXcwOW01bzdzbg==' className='me-4 text-reset'>
		            <MDBIcon fab style={{ color: '#fff' }} icon="instagram" />
		          </a>
		          <a href='https://mg.linkedin.com/in/njaka-tahiana' className='me-4 text-reset'>
		            <MDBIcon fab style={{ color: '#fff' }} icon="linkedin" />
		          </a>
		          <a href='https://github.com/Tahiana07' className='me-4 text-reset'>
		            <MDBIcon fab style={{ color: '#fff' }} icon="github" />
		          </a>
		        </div>
		      </section>

		      <section className=''>
		        <MDBContainer className='text-center text-md-start mt-5'>
		          <MDBRow className='mt-3'>
		            <MDBCol /*md="3" lg="4" xl="3"*/ className='mx-auto mb-4'>
		              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#fff' }}>
		                <MDBIcon icon="gem" className="me-3" />
		                Merci de votre visite :)
		              </h6>
		              <p>
		                Je vous envoies aussi d'autres de mes coordonnées.
		              </p>
		            </MDBCol>

		            <MDBCol className='mx-auto mb-md-0 mb-4'>
		              <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#fff' }}>Autres Contacts</h6>
		              <p>
		                <MDBIcon icon="home" className="me-2" />
		                Antananarivo, Lot II Y 5 Bis ACJ Ouest Antanimora, Madagascar
		              </p>
		              <p>
		                <MDBIcon icon="envelope" className="me-2" /> njaka.tahiana07@gmail.com
		              </p>
		              <p>
		                <MDBIcon icon="phone" className="me-3" /> + 261 34 56 813 84
		              </p>
		            </MDBCol>
		          </MDBRow>
		        </MDBContainer>
		      </section>

		      <div className='text-center p-4' style={{ color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
		        © Copyright 2024
		      </div>
		    </MDBFooter>
		</>
	)
}

export default Contacts;
