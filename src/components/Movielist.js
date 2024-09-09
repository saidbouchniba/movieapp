import React from 'react'

import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

function Movielist(props) {
    console.log(props);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px", marginTop: "80px", }}>
            {
                props.Movies.map(el =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={el.poster} style={{ height: "400px", }} />
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text style={{ height: "300px", overflowY: "auto", }}>
                                {el.describe}

                            </Card.Text>
                            <Card.Text>
                                rating: <ReactStars
                                    count={5}
                                    value={el.rating}
                                    size={24}
                                    color2={'#ffd700'} />
                            </Card.Text>
                            <Card.Text>
                                <a href={el.trailer}>Trailer</a>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}

export default Movielist