import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { RouteComponentProps, useParams } from "react-router-dom"
import { Song } from "./MySearch";
import { useState, useEffect } from 'react';

// interface MyTrackParams {
//     id: string
// }

type MyTrackParams = {
    id: string
}

// type AllTheProps = MyTrackParams & RouteComponentProps

// const MyTrack = ({ location, history, match }: AllTheProps) => {
const MyTrack = () => {

    const [song, setSong] = useState<Song | null>(null)
     // const _id = match.params.id
    // const id = parseInt(useParams<MyTrackParams>().id)
    // let { id: string } = useParams()
    const { id } = useParams<MyTrackParams>()


    useEffect(() => {
        const fetchData = async () => {
       try {
           let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`)
            let data = await response.json();
            setSong(data)
       } catch (error) {
           console.log(error)
       }
    }
    fetchData()
    }, [])

    return (
     song
     ?
        <Container>
            <Row>
                <Col sm={6}>
                    <Card className="m-2">
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={song.album.cover} className="text-center m-3" alt="image is unavailable" />
                            </Col>
                            <Col>
                                <Card.Header>{song.title}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{song.artist.name}
                                    </Card.Title>
                                        <Card.Text className="text-left">
                                        {song.album.title}
                                        </Card.Text>
                                        <Button variant="primary" >
                                        <Link to={`/`} className="text-white">
                                                Back to main page
                                        </Link>
                                        </Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    : null
    );
}

export default MyTrack;