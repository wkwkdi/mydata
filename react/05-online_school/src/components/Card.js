import classNames from "classnames";
import styles from "./Container.module.css";

function Card({className, children}){
        return (
            <div className={classNames(styles.container, className)}>{children}</div>
          );
}

export default Card;