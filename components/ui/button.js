import React from 'react';
import Link from "next/link";
import classes from "./button.module.css"

function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={classes.btn}>
                    {props.children}
                </a>
            </Link>
        );
    } else {
        return <button className={classes.btn} onClick={props.onClick}></button>
    }

/*
    (props.link) ?

            return (
                <Link href={props.link}>
                    <a className={classes.btn}>
                        {props.children}
                    </a>
                </Link>
            );
        :
        return <button></button>

*/


}

export default Button;