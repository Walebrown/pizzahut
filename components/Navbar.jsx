import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import {useSelector} from 'react-redux'
import Link from 'next/link'

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/image4.jpg" alt='image' width=' 32' height='32' />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}> ORDER NOW</div>
                    <div className={styles.text}> 012 345 678</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href='/'  passHref>
                    <li className={styles.listItem}> Homepage</li>
                    </Link>
                    
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}> Menu</li>
                    <h1>TASTY. PIZZA</h1>
                    <li className={styles.listItem}> Event</li>
                    <li className={styles.listItem}> Blog</li>
                    <li className={styles.listItem}> Contact</li>

                </ul>
            </div>
            <Link href='/cart' passhref>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Badge badgeContent={quantity} color='secondary'>
                        <ShoppingCartOutlined htmlColor='white' />
                    </Badge>
                </div>
            </div>
            
            </Link>
           

        </div>
    )
}

export default Navbar
