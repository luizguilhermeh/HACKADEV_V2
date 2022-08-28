import React from "react";
import styles from './Registration.module.css'
import Formulario from "../../components/Formulario";

function registration() {
  return (
  <div className={styles.registration_container}>
    <h1>Crie seu cadastro</h1>
    {/* <p id="p-registro">*preenchimento obrigatório</p> */}
    <Formulario btnText="Cadastrar" />
  </div>
  );
}

export default registration;
