import { ContextProps, useAppContext } from '../../context/AppContext';
import styles from './SelectorButtons.module.css';

enum Selected {
    All,
    MyFaves,
}

const SelectorButtons = () => {
    const { selected, setSelected } = useAppContext() as ContextProps;

    return (
        <div className={styles.container}>
            <button
                className={
                    selected === Selected.All
                        ? styles.buttonAllSelected
                        : styles.buttonAll
                }
                onClick={() => setSelected(Selected.All)}>
                All
            </button>
            <button
                className={
                    selected === Selected.MyFaves
                        ? styles.buttonMyFavesSelected
                        : styles.buttonMyFaves
                }
                onClick={() => setSelected(Selected.MyFaves)}>
                My faves
            </button>
        </div>
    );
};

export default SelectorButtons;
