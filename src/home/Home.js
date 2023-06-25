import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom';
import './home.css'
import Accordion from 'react-bootstrap/Accordion';
import { useRef } from "react";



const Home = () => {

  const [tweets, setTweets] = useState([])

  const fetchTweets = async () => {
    const result = await axios.get('http://localhost:5000/tweets')
    setTweets(result.data.tweets)
  }
  const navigate = useNavigate()

  useEffect(() => {
    fetchTweets()
  }, [])

  const userCheck = useRef(false);

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      alert("please login")
      navigate("/")
    } 
  },[])

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("userName")
    navigate('/')
  }

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="
            ">Dev-Sup</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">Features</Nav.Link>
              <Nav.Link href="">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Profile">
                <Button>Profile</Button>
              </Nav.Link>
              <Nav.Link href="/">
                <Button onClick={(e) => logout(e)} >Logout</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel >
        <Carousel.Item interval={1000} >
          <img
            style={{ height: "300px" }}
            className="d-block w-100 "
            src="https://revenuesandprofits.com/wp-content/uploads/2022/05/IT-support-for-small-businesses.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
              <h3>MERN Stack community</h3>
              <p>Find a helping hand for your MERN projects</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="https://cloud7.news/wp-content/uploads/2023/03/First-Arch-Linux-ISO-with-Linux-kernel-6.2-is-now-ready-to-download-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>MERN Stack community</h3>
            <p>Find a helping hand for your MERN projects</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
              <h3>MERN Stack community</h3>
              <p>Find a helping hand for your MERN projects</p>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <div className=' bg-light mt-5'>
        <div className='container'>
          <h1 className='text-dark'> MERN Devloper support</h1>
          <h3>Post your quries</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quas facere obcaecati deserunt non eos
            pariatur sint quod sapiente. Cupiditate dolorem eius quasi nam obcaecati blanditiis, quisquam
            fugiat eligendi alias.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut a repellat aperiam sed
            velit tempore sint vel impedit! Doloremque odit perspiciatis veritatis cumque ratione corrupti odio, sint esse iusto?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate expedita aliquid soluta ipsam
            voluptatem iste omnis, inventore impedit facilis
            aliquam, natus voluptas ipsum deserunt sapiente! Inventore recusandae eveniet enim minus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam facere beatae
            molestias, ipsam facilis iure alias illum id recusandae quisquam blanditiis officia odio iste quos
            assumenda quibusdam? Ipsa, et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui ducimus? Corporis ad nulla commodi
            dicta sint, accusantium eum, facilis velit, impedit labore perferendis! Ipsam dolore consectetur doloremque
            placeat architecto!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, veritatis id impedit asperiores
            corporis odit molestiae enim voluptas ut dolorum tempore ipsam qui vel eos ea a quam quos consequatur.
          </p>
        </div>
      </div>

      <div className=''>
        <div className='p-2 gapIdd' style={{}}>
          <Row className='mt-5 '>
            {
              tweets?.map((tweet) => (
                <Card className='m-3 lg={6} md={6} ' style={{ width: '18rem' }}>
                  <Card.Img className='mt-2' variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PiVc8dXj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e2ymn14orzpgtbny0wzt.png" />
                  <Card.Body>
                    <Card.Title className='mt-3'> Devloper Name {tweet.uname} </Card.Title>
                    <Card.Title className='mt-3'>{tweet.proName} </Card.Title>
                    <Card.Text> {tweet.info} </Card.Text>
                  </Card.Body>

                  <Accordion defaultActiveKey="-1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Comments</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </p>
                        <hr />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <div className=' container mt-3 mb-2 text-center'>
                    <input className='form-control w-100 ' type="text" />
                    <button className='btn bg-black mt-1 text-danger  form-control'> fesa </button>
                  </div>
                </Card>
              ))
            }
          </Row>
        </div>
      </div>

      <div className='mt-5'>
        <div className='container'>
          <h1 className='text-dark'> MERN Devloper support</h1>
          <h3>Post your quries</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam facere beatae
            molestias, ipsam facilis iure alias illum id recusandae quisquam blanditiis officia odio iste quos
            assumenda quibusdam? Ipsa, et.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui ducimus? Corporis ad nulla commodi
            dicta sint, accusantium eum, facilis velit, impedit labore perferendis! Ipsam dolore consectetur doloremque
            placeat architecto!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, veritatis id impedit asperiores
            corporis odit molestiae enim voluptas ut dolorum tempore ipsam qui vel eos ea a quam quos consequatur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home