import { useState } from 'react';
import "./Card.css"
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

const Card = (props) => {

    const { text, value} = props;
    
    const [modalOn, setModalOn] = useState(false);

    const toggleModal = () => setModalOn(!modalOn);

    return (
        <div className='card'>
            <span className='cardText'>
                <span>{text}: </span> 
                <span className={text === "Expenses" ? "cardTextRed" : "cardTextGreen"}>
                    ₹{value}
                </span>
            </span>
            <Button 
                text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
                background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
                buttonSize = "largeButton"
                clickFunction={toggleModal}
            />
            {modalOn ? 
                <Modal 
                toggleModal={toggleModal} 
                text={text === "Expenses" ? "Add Expense" : "Add Balance"}/> 
            :null
            }
        </div>
    );
};

export default Card;