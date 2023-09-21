import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={3} xs={12} key={item.id} >
                        <CartList item={item}/>
                    </Col>
                ))
            }
        </>
    )
}

// HACER DE ESTO OTRO COMPONENTE LUEGO

const CartList = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }} className='mt-5'>
            <Card.Img variant="top" src={item.image}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant="primary">Ver detalles</Button>
            </Card.Body>
        </Card>
    )

}

export default ItemList
