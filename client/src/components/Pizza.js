import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, userDispatch, useSelector } from 'react-redux'
import { addToCart } from "../actions/cartActions"

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    function addtocart() {
        dispatch(addToCart(pizza, quantity, variant))
    }

    return (
        <div className='m-7 shadow-lg p-3 mb-5 bg-white rounded'>
            <h1>{pizza.name}</h1>

            <div onClick={handleShow}>
                <img src={pizza.image} className="img-fluid" />
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <p > Variants</p>
                    <select className='form-control'>
                        {pizza.varients.map(variant => {
                            return <option value={variant} onChange={(e) => { setVariant(e.target.value) }}>{variant}</option>
                        })}
                    </select>

                </div>

                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select
                        className="form-control"
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value);
                        }}
                    >
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>;
                        })}
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price: {pizza.prices[0][variant] * quantity} RON</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className="btn" onClick={addtocart}>ADD TO CART</button>
                </div>


            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} clasName="img-fluid" alt="" style={{ height: '300px', width: '300px' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
} 