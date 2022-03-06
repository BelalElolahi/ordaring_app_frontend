import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../../actions/pizzaActions'
import Card from '../../components/card/Card'
import Error from '../../components/error/Error'
import Loading from '../../components/loading/Loading'
//import pizzas from '../../dumyData'
import './home.css'
export default function Home() {
    const dispatch = useDispatch();
    const pizzasstate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, []);

    return (
        <div>
            <div className="row justify-content-center">

                {loading ? (<Loading />) : error ? (<Error error="Something went wrong" />) : (
                    pizzas.map(pizza => {
                        return <div className="col-md-3 m-3" key={pizza._id}>
                            <div >
                                <Card pizza={pizza} />
                            </div>
                        </div>
                    })
                )}

            </div>
        </div>
    )
}
