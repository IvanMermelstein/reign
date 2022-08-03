import { createContext, FC, useContext, useState } from 'react';
import { Story } from '../../typings/types';

type Props = {
    children?: React.ReactNode;
};

export enum Selected {
    All,
    MyFaves,
}

export type ContextProps = {
    buttonSelected: Selected;
    setButtonSelected: (selected: Selected) => void;
    comboSelected: string;
    setComboSelected: (selected: string) => void;
    favs: Story[];
    setFavs: (favs: Story[]) => void;
};

export const AppContext = createContext<ContextProps | null>(null);
export const useAppContext = () => useContext(AppContext);

const AppProvider: FC<Props> = ({ children }) => {
    const [buttonSelected, setButtonSelected] = useState(Selected.All);
    const [comboSelected, setComboSelected] = useState('');
    const [favs, setFavs] = useState<Story[]>([]);

    return (
        <AppContext.Provider
            value={{
                buttonSelected,
                setButtonSelected,
                comboSelected,
                setComboSelected,
                favs,
                setFavs,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
