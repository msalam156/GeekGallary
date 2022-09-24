
import Card from 'react-bootstrap/Card';

function ImageCards(props) {
  const click = () => {
    props.click(props.image_detals.id);
  }
  return (
    <Card className="bg-dark text-white mb-4" onClick = {click}>
      <Card.Img src={props.image_detals.urls.small} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{props.image_detals.user.name}</Card.Title>
        <Card.Text>{props.image_detals.description}</Card.Text>
        <Card.Text>{props.image_detals.created_at}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCards;