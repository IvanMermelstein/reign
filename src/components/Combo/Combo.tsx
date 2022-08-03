import { useEffect, useState } from 'react';
import { ContextProps, useAppContext } from '../../context/AppContext';
import styles from './Combo.module.css';

const COMBO_SELECTED = 'COMBO_SELECTED';
const itemList = [
    {
        name: 'Angular',
        value: 'angular',
        image: 'angular.png',
    },
    {
        name: 'Reactjs',
        value: 'reactjs',
        image: 'react.png',
    },
    {
        name: 'Vuejs',
        value: 'vuejs',
        image: 'vue.png',
    },
];

const Combo = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
        null,
    );
    const { setComboSelected } = useAppContext() as ContextProps;

    useEffect(() => {
        const comboSelectedLS = localStorage.getItem(COMBO_SELECTED);
        if (comboSelectedLS) {
            setComboSelected(comboSelectedLS);
            setSelectedItemIndex(
                itemList.findIndex(item => item.value === comboSelectedLS),
            );
        }
    }, [setComboSelected, setSelectedItemIndex]);

    return (
        <div className={styles.container}>
            <div className={styles.dropdown}>
                <div
                    className={styles.selection}
                    onClick={() => {
                        setIsDropdownVisible(!isDropdownVisible);
                    }}>
                    {selectedItemIndex !== null ? (
                        <div className={styles.item}>
                            <img
                                src={`/${itemList[selectedItemIndex].image}`}
                                alt={`${itemList[selectedItemIndex].name} logo`}
                                className={styles.logo}
                            />
                            {itemList[selectedItemIndex].name}
                        </div>
                    ) : (
                        'Select your news'
                    )}
                    {isDropdownVisible && (
                        <div className={styles.items}>
                            {itemList.map((item, index) => (
                                <div
                                    key={item.value}
                                    className={styles.item}
                                    onClick={() => {
                                        setSelectedItemIndex(index);
                                        setComboSelected(item.value);
                                        localStorage.setItem(
                                            COMBO_SELECTED,
                                            item.value,
                                        );
                                        setIsDropdownVisible(false);
                                    }}>
                                    <img
                                        src={`/${item.image}`}
                                        alt={`${item.name} logo`}
                                        className={styles.logo}
                                    />
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Combo;
