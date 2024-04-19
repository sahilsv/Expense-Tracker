import React from 'react';
import styles from "../Modal/Modal.module.css"
import Button from '../Button/Button';

const FormButtons = (props) => {
  
    const { text, toggleModal } = props;
    return (
        <div className={styles.formButtons}>
            <Button 
            text={text} 
            background="backgroundOrange" 
            buttonSize="largeButton"
            buttonType="submit"
            />
            <Button 
            text="Cancel" 
            background="backgroundWhite" 
            buttonSize="largeButton"
            clickFunction={toggleModal}
            />
        </div>
    );
};

export default FormButtons;