import styles from "./card.module.css";

const Card = () => {

    const alertLapicera = () => {
        alert("Tenemos todo tipo de  lapicera!\nTrazo fino o grueso\nDe color: Negro-Azul-Rojo-etc\nMarcas: Bic-Faber Castell-etc")
    }

    const alertResaltadores = () => {
        alert("Tenemos todo tipo de  Resaltadores!\nTrazos de todo tipo\nDe color: Neon-Pastel-etc\nMarcas: Filgo-Sharpie-etc")
    }

    const alertLapices = () => {
        alert("Tenemos todo tipo de  Lapices!\nDe todos los colores\nMarcas: Bic-Maped-etc")
    }

    const alertGoma = () => {
        alert("Tenemos todo tipo de  Gomas para Borrar!\nMarcas: Maped-Pizzini-Faber Castell-etc")
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <button className={styles.cardIn} type="button" onClick={alertLapicera}>Lapiceras</button>
            </div>
            <div className={styles.card}>
                <button className={styles.cardIn} type="button" onClick={alertResaltadores}>Resaltadores</button>
            </div>
            <div className={styles.card}>
                <button className={styles.cardIn} type="button" onClick={alertLapices}>Lapices</button>
            </div>
            <div className={styles.card}>
                <button className={styles.cardIn} type="button" onClick={alertGoma}>Goma de Borrar</button>
            </div>
        </div>
    )

}

export default Card