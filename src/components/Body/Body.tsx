import styles from './Body.module.css';

type Props = {
    children?: React.ReactNode;
};

const Body = ({ children }: Props) => {
    return <div className={styles.background}>{children}</div>;
};

export default Body;
