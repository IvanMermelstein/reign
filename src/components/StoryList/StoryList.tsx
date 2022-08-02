import StoryItem from '../StoryItem/StoryItem';
import styles from './StoryList.module.css';

const StoryList = () => {
    return (
        <div className={styles.container}>
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
        </div>
    );
};

export default StoryList;
