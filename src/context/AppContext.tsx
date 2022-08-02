import { createContext, FC, useContext, useState } from 'react';

type Props = {
    children?: React.ReactNode;
};

enum Selected {
    All,
    MyFaves,
}

export type ContextProps = {
    selected: Selected;
    setSelected: (selected: Selected) => void;
};

export const AppContext = createContext<ContextProps | null>(null);
export const useAppContext = () => useContext(AppContext);

const AppProvider: FC<Props> = ({ children }) => {
    const [selected, setSelected] = useState(Selected.All);

    return (
        <AppContext.Provider value={{ selected, setSelected }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
