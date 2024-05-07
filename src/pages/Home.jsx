import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style.css'

const Home = ({ allData }) => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">

                    { 
                        allData.map((val) => {
                            return (
                                <Card style={{ width: '300px' }} className='m-2'>
                                    <Card.Img className='movie-img' variant="top" src={val.image} />
                                    <Card.Body className='movie-content'>

                                        <div className="d-flex justify-content-between">
                                            <Card.Title className='movie-title'>{val.name}</Card.Title>
                                            <p className='mb-2'>{val.years}</p>
                                        </div>

                                        <Card.Text className='mb-2 movie-des'>
                                            {val.des}
                                        </Card.Text>
                                        <Card.Text className='movi-rate d-flex justify-content-between'>
                                            <button>{val.rate}</button>
                                            <p>{val.category}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Home