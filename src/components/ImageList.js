import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCards from './ImageCards';
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};


const ImageList = (props) => {
  return (
    <Container fluid className="mt-5">
      <Row>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >

          {props.images.map((single_image, idx) => {
            return < Col key={idx}> <ImageCards click={props.cardCLick} image_detals={single_image} /></Col>
          })}
        </Masonry>
      </Row>
    </Container>
  );
}

export default ImageList;