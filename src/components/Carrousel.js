import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="row">
        <div className="col-md-8">
            <MDBCarousel showControls showIndicators>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='/images/botox-1.jpg'
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='/images/botox-2.jpg'
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='/images/ts_fisio.jpg'
                    alt='...'
                />
                </MDBCarousel>
        </div>
    </div>
    
  );
}