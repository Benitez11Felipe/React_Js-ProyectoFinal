import styles from "./span.module.css";

const Span = ({txtSpn}) => {

  const saludo = () => {
    alert("boton span")
  }

  return <span type="button" className={styles.span} onClick={saludo}>{txtSpn}</span>;
  
};

export default Span;