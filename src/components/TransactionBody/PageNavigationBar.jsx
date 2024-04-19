import React from 'react';
import styles from "./TransactionBody.module.css"
import leftArrowIcon from "../../assets/leftArrow.svg";
import rightArrowIcon from "../../assets/rightArrow.svg";

import Button from '../Button/Button';

const PageNavigationBar = props => {
   
    const {pages, updatePage} = props;
    return ( 
        <div className={`${styles.TransactionBar} ${styles.PageNavigateBar}`}>
            <Button 
            icon={leftArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === 1 ? "" : "shadow"} 
            clickFunction={()=> updatePage("left")}
            />
            <Button 
            text={pages.currentPage} 
            buttonSize="mediumButton" 
            background="backgroundDarkGreen" 
            />
            <Button 
            icon={rightArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === pages.totalPages ? "" : "shadow"} 
            clickFunction={()=> updatePage("right")}
            />
        </div>
    );
};

export default PageNavigationBar;