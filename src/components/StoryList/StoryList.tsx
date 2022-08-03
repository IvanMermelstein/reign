import { FC } from 'react';
import { Story } from '../../../typings/types';
import StoryItem from '../StoryItem/StoryItem';
import styles from './StoryList.module.css';

type Props = {
    list: Story[];
};

const StoryList: FC<Props> = ({ list }: Props) => {
    return (
        <div className={styles.container}>
            {list.map((story: Story, index) => (
                <StoryItem story={story} key={index} />
            ))}
        </div>
    );
};

export default StoryList;
