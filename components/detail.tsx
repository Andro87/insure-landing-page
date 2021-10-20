import styles from "./detail.module.scss";
import React, { ReactNode } from "react";
interface Props {
    readonly icon: ReactNode;
    readonly header: string;
    readonly paragraph: string;
}

const Detail: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph } = props;
    return (
        <div className={styles.detail}>
            {icon}
            <h4>{header}</h4> <p>{paragraph}</p>
        </div>
    );
};
export default Detail;
