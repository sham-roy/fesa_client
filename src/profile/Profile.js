import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './profile.css'
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';


const Profile = () => {

  // const navigate = useNavigate();

  // Create a new Date object
  var now = new Date();

  // Get the current date and time in the desired format
  var pid = now.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata'
  });

  

  // console.log(id);

  var uname = localStorage.getItem('userName');

  const [uTweets, setUtweets] = useState([])

  const userTweets = async () => {
    const utwe = {
      uname
    }

    try {
      const result = await axios.post('http://localhost:5000/uTweets', utwe)
      setUtweets(result.data.message)
    }
    catch (error) {
      alert(error.data.message)
    }
  }

  useEffect(() => {
    userTweets()
  })

  const [data, setData] = useState(" ")
  const [heading, setHeading] = useState(" ")

  const postMessage = async (e) => {


    e.preventDefault()
    const pdata = {
      uname,
      proName: heading,
      info: data,
      pid
    }

    try {
      const result = await axios.post("http://localhost:5000/post", pdata);
      alert(result.data.message)
    }
    catch (error) {
      alert(error.response.data.message)
    }
    window.location.reload();
  }
  // console.log(heading);
  // console.log(data);

  const deleteTweet = async () => {
    const result = await axios.delete("http://localhost:5000/deleteFesa")
    alert(result.data.message)
    userTweets()
  }


  return (

    <div className='pb-5'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Dev-Sup</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">Features</Nav.Link>
              <Nav.Link href="">Pricing</Nav.Link>
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h3 className='container mt-3'>welcome {uname}</h3>
      <p className='container'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio eligendi, at quis, sit consectetur
        illum delectus, nam est assumenda error minima molestiae accusantium libero suscipit ipsam similique. Corrupti, nobis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        quam labore sapiente error iste consequuntur facere nulla soluta ipsum dolorum totam laboriosam quis suscipit cumque, similique dicta eaque nisi consequatur. </p>

      <div className='m-3 mb-5'  >

        <br />
        <br />

        <h1 className='container'>Post your Fesa</h1>
        <div className='p-2 ' >
          <Card className='w-50 mx-auto' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PiVc8dXj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e2ymn14orzpgtbny0wzt.png"
              style={{ height: '150px' }} />
            <Card.Body className='bg-dark text-white'>
              <Card.Title> {uname}  </Card.Title>

              <label className='mt-3'>Project Name</label>
              <input onChange={(e) => setHeading(e.target.value)} className='form-control' type="text" placeholder='Project Name' />
              <label className='mt-3'>Project info</label>
              <textarea onChange={(e) => setData(e.target.value)} className='form-control mt-1' type="text" placeholder='enter your data' />
              <Button onClick={(e) => postMessage(e)} className='mt-3 w-25 mx-auto' variant="primary">Post</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br />
      <br />
      <p className='container'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure praesentium
        ex maxime necessitatibus repellat, blanditiis sapiente, provident eum aliquid quasi vel adipisci incidunt? Quas rerum dicta repellendus! Vero, quidem! </p>
      <br />
      <hr />
      <h1 className='ms-5 mt-5'>My Tweets</h1>

      <div>
        <div className='mx-auto'>
          <Row className='mt-5 ms-5 '>
            {
              uTweets?.map((uTweet) => (

                <Card className='m-3 lg={6} md={6} ' style={{ width: '18rem' }}>
                  <Card.Img className='mt-2' variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PiVc8dXj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e2ymn14orzpgtbny0wzt.png" />
                  <Card.Body>
                      <Card.Title className='mt-3'> Devloper Name {uname} </Card.Title>
                      <Link to={`/Edit/${uTweet.id}`}>
                      <Card.Title className='mt-3'> {uTweet.proName} </Card.Title>
                      <Card.Text> Fesa @  {uTweet.pid} {uTweet.date} </Card.Text>
                    </Link>
                    <Card.Text> {uTweet.info} </Card.Text>
                  </Card.Body>
                  <Button className='mb-2' variant="primary">Edit</Button>
                  <Button onClick={() => deleteTweet()} variant="primary">Delete</Button>
                </Card>
              ))
            }
          </Row>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div className='container'>
          <hr />
        </div>      </div>
      <p className='container'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet, harum veritatis natus
        inventore aliquam illo saepe, sunt commodi exercitationem porro sapiente, dolores placeat. Consequatur, qui ab. Velit, quasi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad veritatis iure impedit sit pariatur dolorum veniam ullam.
        Fuga laudantium provident, enim asperiores quaerat doloribus voluptates sint aspernatur ipsa culpa! voluptatum! </p>
    </div >
  )
}

export default Profile