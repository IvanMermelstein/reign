import Combo from './components/Combo/Combo';
import Header from './components/Header/Header';
import SelectorButtons from './components/SelectorButtons/SelectorButtons';
import StoryList from './components/StoryList/StoryList';

const App = () => {
    return (
        <>
            <Header />
            <SelectorButtons />
            <Combo />
            <StoryList />
        </>
    );
};

export default App;
