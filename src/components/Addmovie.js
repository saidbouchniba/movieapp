import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addmovie({setmovies,movies}) {
    const [show, setShow] = useState(false);
    const [title, settitle] = useState("")
    const [describe, setdescribe] = useState("")
    const [poster, setposter] = useState("")
    const [trailer, settrailer] = useState("")
    const [rating, setrating] = useState(0)
    const [actors, setactors] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const add=()=>{
    const data={title,describe,actors,poster,trailer,rating}
    setmovies([...movies,data])
}
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                AddNewMovie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Title</Form.Label>
                            <Form.Control
                                onChange={(event) => settitle(event.target.value)}
                                type="text"
                                placeholder="put the title of the movie"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Description</Form.Label>
                            <Form.Control
                                onChange={(event) => setdescribe(event.target.value)}
                                type="text"
                                placeholder="put the description"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Poster</Form.Label>
                            <Form.Control
                                onChange={(event) => setposter(event.target.value)}
                                type="text"
                                placeholder="put the link of the poster"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Rating</Form.Label>
                            <Form.Control
                                onChange={(event) => setrating(event.target.value)}
                                type="number"
                                placeholder="Movie Rating"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie trailer</Form.Label>
                            <Form.Control
                                onChange={(event) => settrailer(event.target.value)}
                                type="text"
                                placeholder="put the link of trailer"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Actors</Form.Label>
                            <Form.Control
                                onChange={(event) => setactors(event.target.value)}
                                type="text"
                                placeholder="The list of actors"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={add}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Addmovie;