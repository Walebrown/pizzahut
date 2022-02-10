import Image from 'next/image';
import {useState } from 'react';
import styles from '../styles/Featured.module.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";



const Featured = () => {

    const [index , setIndex] = useState(0)
    const images = [
        "/img/image13.jpg",
        "/img/image2.jpg",
        "/img/image8.jpg",
    ]
    const handleArrow = (direction) =>{
        if (direction ==='l'){
            setIndex(index !== 0 ? index-1: 2)
        }
        if (direction ==='r'){
            setIndex(index !== 2 ? index+1: 0)
        }

    }
    console.log(index)

    

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow('l')}>
                <ArrowLeftOutlined fontSize='large' />
            </div>

            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            
                    {images.map((img, i) => (
                        <div className={styles.imgContainer} key={i}>
                            <Image  src={img} key={i} alt='' layout='fill' objectFit='cover' />
                        </div>
                    ))}

                </div>

        
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={ () => handleArrow('r')}>
                <ArrowRightOutlined fontSize='large' />
            </div>


        </div>
    )
}

export default Featured
