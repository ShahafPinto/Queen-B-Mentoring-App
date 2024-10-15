import styles from './NavBar.module.css';
import Image from 'next/image'

export default function NavBar () {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={80}
                    height={50}
                />
            </div>
            <span className={styles.greeting}>שלום, אורחת</span>
        </div>
    );
};

