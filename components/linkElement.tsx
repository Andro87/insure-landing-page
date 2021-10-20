import styles from "./link_element.module.scss";
import React, { Children } from "react";
interface Props {
    readonly header: string;
}

const LinkElement: React.FunctionComponent<Props> = props => {
    const { header } = props;
    return (
        <div className={styles.link_box}>
            <p>{header}</p>
        </div>
    );
};
export default LinkElement;
