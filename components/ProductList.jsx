import styles from '../styles/ProductList.module.css'

import React from 'react'
import PizzaCard from './PizzaCard'

const ProductList = ({pizzalist}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Laboriosam esse laudantium minus rem tempore ipsam mollitia provident a asperiores dicta veniam iure deleniti 
            reprehenderit nisi voluptas, accusantium ducimus! A, officia.</p>

            <div className={styles.wrapper}> 
            {pizzalist.map((pizza) =>(
                <PizzaCard key={pizza._id} pizza={pizza}/>
            ))}
            
           
            </div>
            
        </div>
    )
}

export default ProductList
