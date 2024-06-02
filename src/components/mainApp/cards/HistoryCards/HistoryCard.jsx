import styles from "./HistoryCard.module.scss";
import './HistoryCard.scss'
import {CircleX} from 'lucide-react'

export function HistoryCard({item, closeAction}) {
    return (
        <div className={styles.history__card}>
            <div className={"history-card__header"}>
                <div className={"history-card__primary-text history-card__operation-date"}>{item.date}</div>
                <button onClick={() => closeAction(item)} className={"wallet__button"}><CircleX /></button>
            </div>
            <div className={"history-card__container"}>
                <div className={"history-card__info"}>
                    <div className={"history-card__primary-text"}>{item.category}</div>
                    <div className={"history-card__primary-text history-card__shop-name"}>{item.shop_name}</div>
                </div>
                <div className={"history-card__price"}>
                    <div className={"history-card__primary-text"}>{item.price} {item.currency}</div>
                    <div className={"history-card__primary-text history-card__wallet-name"}>{item.wallet_name}</div>
                </div>
            </div>
        </div>
    )
}