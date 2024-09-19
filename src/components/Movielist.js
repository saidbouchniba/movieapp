import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
import Editmovie from './Editmovie';
import { Link } from 'react-router-dom';

function Movielist(props) {
    console.log(props);
    const [search, setSearch] = useState("")
    console.log(search);
const remove=(title)=>{
    props.setmovies(props.movies.filter(el=>el.title!==title))

}
    return (
        <div>
            <input type='text' placeholder='Search for your favorite movie' onChange={(event) => setSearch(event.target.value)} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px", marginTop: "80px", }}>

                {

                    props.movies.filter(el => el.title.includes(search)).map(el =>
                        <Link to={"/details/"+el.id}>
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
                                <Button className='btn btn-danger' onClick={()=>remove(el.title)}>remove</Button>
                                <Editmovie movie={el} movies={props.movies} setmovies={props.setmovies}/>
                                
                            </Card.Body>
                        </Card>
                        </Link>
                    )
                } 
            </div>
        </div>
    )
}

export default Movielist