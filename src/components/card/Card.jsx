import React, { useRef, useState } from 'react'
import { Modal } from 'react-bootstrap';
import './card.css';
import {useSelector,useDispatch} from 'react-redux';
import { addToCart } from '../../actions/cartActions';

export default function Card(props) {
    const { pizza } = props;
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState("small");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch() 
    function addtocart(){
     dispatch(addToCart(pizza,quantity,varient))   
    }

    return (
        <div className='m-1 p-3 shadow-lg p-3 mb-5 bg-white rounded'>
           <div className="" onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} alt="" className='img-fluid' />
           </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Verients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((obj, indx) => {
                            return <option value={indx + 1}>{indx + 1}</option>
                        })}
                    </select>

                </div>
            </div>

            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className='mt-4'>price: {pizza.prices[0][varient] * quantity} Rs/-</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn mt-2" onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img className='modalImg img-fluid' src={pizza.image} alt="" />
                 <p>{pizza.description}</p>
                 </Modal.Body>

                <Modal.Footer>
                    <button className='btn' variant="secondary" onClick={ handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>




    )
}
