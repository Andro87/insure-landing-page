import styles from "./button.module.scss";
import React from "react";
interface Props {
    readonly title: string;
    readonly size?: string;
}

const Button: React.FunctionComponent<Props> = props => {
    const { title, size } = props;
    return (
        <button
            type="button"
            aria-label="button"
            className={`${styles.btn} ${styles[size]}`}
        >
            {title}
        </button>
    );
};
export default Button;
