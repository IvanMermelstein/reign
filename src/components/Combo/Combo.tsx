import { useState } from 'react';
import styles from './Combo.module.css';

const Combo = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [itemList, setItemList] = useState([
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
    ]);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
        null,
    );

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
