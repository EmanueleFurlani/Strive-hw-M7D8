import { Button, Container, FormControl, Form, Row, Col } from 'react-bootstrap';
import SingleSearch from "./SingleSearch";
import { useState, ChangeEvent, FormEvent } from 'react'

export interface Song {
    title: string
    artist: {
        name: string
    }
    album: {
        cover: string
        title: string
    }
    id: number
}

const MySearch = () => {
    const [query, setQuery] = useState<string>("")
    const [songs, setSongs] = useState<Song[]>([])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     try {
        let url ="https://striveschool-api.herokuapp.com/api/deezer/search?q="
        let limit = "&limit=6"
        const response= await fetch(url + query + limit)           
        const result: {data:Song[]} = await response.json()
        setSongs(result.data) 
     } catch (error) {
         console.log(error)
     }
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setQuery(e.target.value)
    }

  return (
    <>
      <Container>
            <Form className="mb-3" onSubmit={handleSubmit}>
                <FormControl
                placeholder="Enter Song name"
                value={query}
                onChange={handleInput}
                />
                <Button type="search" variant="outline-secondary" id="button-addon2">
                Search
                </Button>
            </Form>
      </Container>

        <Container>
            <Row>
            {
                songs.map((song) =><SingleSearch song={song} />)                
            }
            </Row>
        </Container>
    </>
  );
};


export default MySearch