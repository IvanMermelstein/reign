import { useState } from 'react';
import styles from './StoryItem.module.css';

const StoryItem = () => {
    const [isFav, setIsFavorite] = useState(false);

    return (
        <div className={styles.container}>
            <a
                href='https://google.com'
                target='_blank'
                className={styles.content}
                rel='noreferrer'>
                <div className={styles.createdAt}>
                    <img src='/clock.svg' alt='clock' />2 hours ago by author
                </div>
                <div className={styles.title}>
                    Event-driven state management in React using Storeon
                </div>
            </a>
            <div className={styles.fav}>
                {isFav ? (
                    <img
                        className={styles.heart}
                        src='/heartfull.svg'
                        alt='clock'
                        onClick={() => setIsFavorite(false)}
                    />
                ) : (
                    <img
                        className={styles.heart}
                        src='/heartempty.svg'
                        alt='clock'
                        onClick={() => setIsFavorite(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default StoryItem;
