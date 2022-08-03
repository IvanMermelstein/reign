import { FC } from 'react';
import { Story } from '../../../typings/types';
import { ContextProps, useAppContext } from '../../context/AppContext';
import { FAVS } from '../../utils/constants';
import styles from './StoryItem.module.css';

type Props = {
    story: Story;
};

const StoryItem: FC<Props> = ({ story }: Props) => {
    const hours = new Date().getHours() - new Date(story.created_at).getHours();
    const { favs, setFavs } = useAppContext() as ContextProps;

    const addFav = (story: Story) => {
        story.isFav = true;
        const newFavList = [...favs, story];
        setFavs(newFavList);
        localStorage.setItem(FAVS, JSON.stringify(newFavList));
    };

    const removeFav = (story: Story) => {
        story.isFav = false;

        const newFavList = favs.filter(
            fav =>
                fav.story_id !== story.story_id ||
                fav.parent_id !== story.parent_id ||
                fav.author !== story.author,
        );
        setFavs(newFavList);
        localStorage.setItem(FAVS, JSON.stringify(newFavList));
    };

    return (
        <div className={styles.container}>
            <a
                href={story.story_url}
                target='_blank'
                className={styles.content}
                rel='noreferrer'>
                <div className={styles.createdAt}>
                    <img src='/clock.svg' alt='clock' />
                    {`${hours} hours ago by ${story.author}`}
                </div>
                <div className={styles.title}>{story.story_title}</div>
            </a>
            <div className={styles.fav}>
                {story.isFav ? (
                    <img
                        className={styles.heart}
                        src='/heartfull.svg'
                        alt='clock'
                        onClick={() => removeFav(story)}
                    />
                ) : (
                    <img
                        className={styles.heart}
                        src='/heartempty.svg'
                        alt='clock'
                        onClick={() => addFav(story)}
                    />
                )}
            </div>
        </div>
    );
};

export default StoryItem;
