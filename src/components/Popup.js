import { Container, Button,Modal,Row,Col} from 'react-bootstrap';
const Poupup = (props) => {
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-90w"
        // style={{backgroundColor:props.modalData?.color}}
        style={{backgroundColor:`${props.modalData?.color}77`}}
      >
        
        <Modal.Body style={{backgroundColor:`${props.modalData?.color}22`}}>
         <Container>
            <Row>
                <Col md = {6}>
                    <img style = {{width : "100%" , maxHeight : "75vh", borderRadius : "15px"}} src={props.modalData?.urls?.regular} alt="Card image" />
                   
                </Col>
                <Col md = {6}>
                    
                     <h3>Uploaded by : {props.modalData?.user?.name} (@{props.modalData?.user?.id})</h3> 
                    <h5>Upload Date : {props.modalData?.created_at}</h5>
                    <hr />

                    {props.modalData?.description ? (
                      <>
                        <h5>
                          Description: 
                        </h5>
                        <h6>{props.modalData?.description}</h6>
                        <hr/>
                      </>
                    ):false}
                    <br/>
                    <h6>Width : {props.modalData?.width}</h6>
                    <h6>Height : {props.modalData?.height}</h6>
                </Col>

            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary" href = {props.modalData?.links?.download} target = "_blank">Download</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Poupup;