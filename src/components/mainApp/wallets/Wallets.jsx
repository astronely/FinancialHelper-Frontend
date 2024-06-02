import {InfoColumn} from "../infoColumn/InfoColumn.jsx";
import {WalletCard} from "../cards/WalletCards/WalletCard.jsx";
import './Wallets.scss'
import '../../buttons/buttons.scss'
import {useModal} from "../../../hooks/useModal.js";
import axios from "axios";
import {useEffect, useState} from "react";
import {AddWalletModal, ChangeWalletModal} from "./WalletModal.jsx";
import {useApp} from "../../../hooks/useApp.js";
import {toast} from "react-toastify";
import {ConfirmWalletDeleteModal} from "../../confirmation/Confirm.jsx";

export function Wallets() {
    const {wallets, setWallets, updateWallets} = useApp();
    const  {setIsActive, setModal, modal} = useModal();
    const [walletToUpdate, setWalletToUpdate] = useState(Object());

    function openModal(modalName) {
        // console.log("OPEN ADD/CHANGE WALLET")
        setIsActive(true)
        setModal(modalName)
    }

    async function deleteWallet(name){
        setWallets(w => w.filter(item => item.name !== name))

        await axios.delete("http://localhost:8080/api/wallets/delete",{
            data: {
                name: name,
            },
            withCredentials: true},)
            .then(() => {
                toast.success("Кошелек успешно удален")
            })
            .catch(error => {
                toast.error("Кошелек не был удален")
                console.log(error.response)
            })
    }

    const changeWallet = wallet => {
        setWalletToUpdate(wallet)
        // console.log("wallet to update: ", walletToUpdate)
        openModal("changeWallet")
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            updateWallets().then()
            wallets.sort((a, b) => a.id - b.id)
        }, 0)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <InfoColumn>
            <div className={'column__title'}>Доступные средства</div>
            <div className={'wallets'}>
                <div className={'wallets__title'}>Кошельки</div>
                <div className={'wallets__cards'}>
                    {wallets.map((wallet, index) => (
                        <WalletCard wallet={wallet} closeAction={openModal} changeAction={changeWallet} key={index} />
                    ))}
                </div>
            </div>
            <button className={'primary-button'} onClick={() => openModal('addWallet')}>Add</button>
            <AddWalletModal open={modal === 'addWallet'} wallets={wallets} setWallets={setWallets}/>
            <ChangeWalletModal open={modal === 'changeWallet'} current={walletToUpdate}/>
            <ConfirmWalletDeleteModal open={modal === 'confirmDeleteWallet'} deleteAction={deleteWallet}/>
        </InfoColumn>
    )
}