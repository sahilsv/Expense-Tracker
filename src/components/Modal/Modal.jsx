import styles from "./Modal.module.css"
// import FormButtons from '../FormButtons/FormButtons';
import ModalForm from './ModalForm';

const Modal = (props) => {

    const { toggleModal, text, existingData } = props;
    
    return (
        <div className={styles.Modal} onClick={toggleModal}>
            <div className={styles.modalBody} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHead}>{text}</div>
                <ModalForm existingData={existingData} formType={text} toggleModal={toggleModal}/>
            </div>
        </div>
    );
};

export default Modal;