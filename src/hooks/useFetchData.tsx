import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Story } from '../../typings/types';

const useFetchData = (comboSelected: string, page: number, favs: Story[]) => {
    const [list, setList] = useState<Story[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(
                `https://hn.algolia.com/api/v1/search_by_date?query=${comboSelected}&page=${page}`,
            );

            const stories = res.data.hits.filter(
                (story: Story) =>
                    story.story_title &&
                    story.story_url &&
                    story.created_at &&
                    story.author &&
                    story.story_id &&
                    story.parent_id,
            );

            stories.forEach((story: Story) => {
                favs.forEach(fav => {
                    if (
                        story.story_id === fav.story_id &&
                        story.parent_id === fav.parent_id &&
                        story.author === fav.author
                    ) {
                        story.isFav = true;
                    }
                });
            });

            if (page === 0) {
                setList(stories);
            } else {
                setList(prev => [...prev, ...stories]);
            }
        } catch (err) {
            console.log(err);
        }
    }, [comboSelected, page, favs]);

    useEffect(() => {
        fetchData();
    }, [comboSelected, fetchData, page]);

    return { list };
};

export default useFetchData;
