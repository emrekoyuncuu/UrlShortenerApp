import { Card, Button } from 'react-bootstrap';

const AboutMe = () => {
  const emailAddress = 'emrekoyuncujob@gmail.com';

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card bg='dark' text='white'>
            <Card.Img className="card-img-top rounded-circle w-25 mx-auto mt-3" variant="top" src="https://avatars.githubusercontent.com/u/80685689?v=4" />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center">Emre Koyuncu</Card.Title>
              <Card.Text>I just started working with React. This is my first large-scale project of this kind. I've used various structures and techniques, making it an educational and enjoyable experience for me. I won't go into detail about all the technologies I've used, but I'll aside attach a few of them.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card bg='dark' text='white'>
            <Card.Img className="card-img-top rounded-circle w-25 mx-auto mt-3" variant="top" src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png" />
            <Card.Body className="text-center">
              <Card.Title className="mb-4">Contact Me</Card.Title>
              <a href="https://github.com/emrekoyuncuu" target="_blank" rel="noopener noreferrer">
                <Button className="me-3" variant="secondary">Github</Button>
              </a>
              <a href={`mailto:${emailAddress}`}>
                <Button className="me-3" variant="secondary">Mail</Button>
              </a>
              <a href="https://www.linkedin.com/in/emrekoyuncuu/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Linkedin</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card bg='dark' text='white'>
            <Card.Img className="card-img-top rounded-circle w-25 mx-auto mt-3" variant="top" src="https://cdn-icons-png.flaticon.com/512/17/17640.png" />
            <Card.Body className="text-center">
              <Card.Title className="mb-4">Stack Used</Card.Title>
              <Button className="me-3 mb-3" variant="secondary">React JS</Button>
              <Button className="me-3 mb-3" variant="secondary">Bootstrap</Button>
              <Button className="me-3 mb-3" variant="secondary">React Router</Button>
              <Button className="me-3" variant="secondary">Shrtco API</Button>
              <Button className="me-3" variant="secondary">Google Font</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AboutMe