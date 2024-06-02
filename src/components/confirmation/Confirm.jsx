import 'reactjs-popup/dist/index.css';
import {Modal} from "../modal/Modal.jsx";
import '../modal/Modal.scss'
import {useForm} from "react-hook-form";

export function ConfirmWalletDeleteModal({open = false}) {


    const {handleSubmit} = useForm()
    const submitHandler = async data => {
        console.log(data)
    }

    return(
        <Modal open={open}>
            <form className='modal__form'>
                <div className='modal__text'>Вы уверены что хотите удалить кошелек?</div>
                <div className='modal__buttons'>
                    <button className='modal-button' type='submit' onSubmit={}>Отменить</button>
                    <button className='modal-button' type='submit'>Удалить</button>
                </div>
            </form>
        </Modal>
    )
}