import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Editmovie({setmovies,movie,movies}) {
    const [show, setShow] = useState(false);
    const [title, settitle] = useState(movie.title)
    const [describe, setdescribe] = useState(movie.describe)
    const [poster, setposter] = useState(movie.poster)
    const [trailer, settrailer] = useState(movie.trailer)
    const [rating, setrating] = useState(movie.rating)
    const [actors, setactors] = useState(movie.actors)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
/*const add=()=>{
    const data={title,describe,actors,poster,trailer,rating}
    setmovies([...movies,data])
}*/
const edit=(movie)=>{
    const data={title,describe,actors,poster,trailer,rating}
    setmovies(movies.map(el=>el.title===movie.title?el=data:el))
    handleClose()
}
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Movie
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
                                defaultValue={movie.title}
                                type="text"
                                placeholder="put the title of the movie"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Description</Form.Label>
                            <Form.Control 
                            defaultValue={movie.describe}
                                onChange={(event) => setdescribe(event.target.value)}
                                type="text"
                                placeholder="put the description"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Poster</Form.Label>
                            <Form.Control
                            defaultValue={movie.poster}
                                onChange={(event) => setposter(event.target.value)}
                                type="text"
                                placeholder="put the link of the poster"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Rating</Form.Label>
                            <Form.Control
                            defaultValue={movie.rating}
                                onChange={(event) => setrating(event.target.value)}
                                type="number"
                                placeholder="Movie Rating"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie trailer</Form.Label>
                            <Form.Control
                            defaultValue={movie.trailer}
                                onChange={(event) => settrailer(event.target.value)}
                                type="text"
                                placeholder="put the link of trailer"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Actors</Form.Label>
                            <Form.Control
                            defaultValue={movie.actors}
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
                    <Button variant="primary"onClick={()=>edit(movie)} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Editmovie;