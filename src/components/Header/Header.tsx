import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img
                    src='./logo.svg'
                    alt='Hacker News logo'
                    className={styles.logo}
                    onClick={() => {}}
                />
            </div>
        </header>
    );
};

export default Header;
