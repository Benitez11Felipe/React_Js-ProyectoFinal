import styles from "./button.module.css";

const Button = ({txtBtn}) => {

  const saludo = () => {
    alert("Saludos! Bienvenido a mi Libreria Online!")
  }

  return <button className={styles.saludo} onClick={saludo}>{txtBtn}</button>;
  
};

export default Button;