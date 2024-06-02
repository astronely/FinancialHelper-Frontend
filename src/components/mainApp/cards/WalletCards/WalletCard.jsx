import styles from "./WalletCard.module.scss";
import './WalletCard.scss'
import {CircleX, Pen} from 'lucide-react'

export function WalletCard({wallet, closeAction, changeAction}) {

    // console.log(wallet)
    return (
        <div className={styles.wallet__card}>
            <div className={"wallet__info"}>
                <div className={'wallet__text'}>
                    {wallet.name}
                    <button onClick={() => changeAction(wallet)} className={"wallet__button wallet__pen"}><Pen/></button>
                </div>
                <div className={'wallet__text'}>{wallet.value} {wallet.currency}</div>
            </div>
            {/*<button onClick={() => closeAction(wallet.name)} className={"wallet__button"}><CircleX/></button>*/}
            <button onClick={() => closeAction('confirmDeleteWallet')} className={"wallet__button"}><CircleX/></button>

        </div>
    )
}