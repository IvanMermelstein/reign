import { useCallback, useEffect, useRef, useState } from 'react';
import Combo from './components/Combo/Combo';
import Header from './components/Header/Header';
import SelectorButtons from './components/SelectorButtons/SelectorButtons';
import StoryList from './components/StoryList/StoryList';
import { ContextProps, Selected, useAppContext } from './context/AppContext';
import useFetchData from './hooks/useFetchData';
import { FAVS } from './utils/constants';

const App = () => {
    const { buttonSelected, comboSelected, favs, setFavs } =
        useAppContext() as ContextProps;
    const [page, setPage] = useState(0);
    const { list } = useFetchData(comboSelected, page, favs);
    const loader = useRef(null);

    useEffect(() => {
        setPage(0);
    }, [comboSelected]);

    const handleObserver = useCallback((entries: any[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage(prev => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);

        return () => observer.disconnect();
    }, [handleObserver]);

    useEffect(() => {
        setFavs(
            localStorage.getItem(FAVS)
                ? JSON.parse(localStorage.getItem(FAVS) as string)
                : [],
        );
    }, [setFavs]);

    return (
        <>
            <Header />
            <SelectorButtons />
            {buttonSelected === Selected.All && <Combo />}
            <StoryList list={buttonSelected === Selected.All ? list : favs} />
            <div style={{ height: '150px' }} ref={loader} />
        </>
    );
};

export default App;
