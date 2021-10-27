import { Container, Jumbotron } from "react-bootstrap";
import "./MyJumbotron.css";

const MyJumbotron = () => {
    return (
        <Container>
            <Jumbotron fluid className="custom-jumbo">
                <Container className="d-flex flex-column align-items-center">
                    <h1 className="display-4 text-center">Strive Music Search Engine</h1>
                    <p className="lead text-center">Search your favorite Strive Music!</p>
                </Container>
            </Jumbotron>
        </Container>
    );
};

export default MyJumbotron;