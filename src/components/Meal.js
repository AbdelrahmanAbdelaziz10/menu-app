import React from 'react';
import { Row,Col, Card, Button } from 'react-bootstrap';

const Meal = ({itemdata}) => {
  return (
    <Row className='justify-content-right mt-3'>
    {
      itemdata.length >0 ? (itemdata.map((item)=>{
        return(
          <Col key={item.id} md={11} className='mb-3'>
            <Card className="d-flex card">
            <div sm="4" className="image">
                <img className='m-2' src={item.image} alt={item.title}></img>
            </div>
            <div sm="8" className='text'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className='font fs-5 fw'>{item.price}</p>
                <Button className='b-light p-l' variant='light'>طلب الوجبة</Button>
            </div>
            </Card>
        </Col>
        )
      }))  :<h3 className='text-center'> لا يوجد اصناف الان .......</h3>
    }
    </Row>
  )
}

export default Meal