import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button, Jumbotron, Grid } from 'react-bootstrap'
import './Home.css'
class Home extends Component {
    render() {
        return (
            <Grid >
                <Row lg={4} className="show-grid">
                    <Col md={3}>
                        <div className="Thumbnail text-center">
                            <Image src="assets/images/prof_pic.jpg" rounded />
                            <h3> Arun Kannath</h3>
                            <p>Software Engineer@Advanced</p>
                            <p>Bangalore, Karnataka, India</p>
                        </div>

                    </Col>
                    <Col md={8}>
                    <Jumbotron>
                        <h2>Hello</h2>
                        <hr />
                        <h4><b>My name is Arun Kannath</b></h4><br /><h5>And I am a web developer</h5>
                    </Jumbotron>
                    </Col>
                    

                </Row>


            </Grid>
        )
    }
}

export default Home;