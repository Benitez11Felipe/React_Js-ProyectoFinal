import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar estas dos funciones de la librería Firebase. 
//initializeApp = esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE. 
//getFirestore = se utiliza para obtener una instancia de Firestore.

//Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá se incluye la key personal de acceso a la BD.

const firebaseConfig = {
  apiKey: "AIzaSyDVkmEaMir5AhLuVW_-0hMnVUEC0-lEN-U",
  authDomain: "reactjs-coderhouse-93e08.firebaseapp.com",
  projectId: "reactjs-coderhouse-93e08",
  storageBucket: "reactjs-coderhouse-93e08.appspot.com",
  messagingSenderId: "1001766861833",
  appId: "1:1001766861833:web:2c87cb8794700a95668cd8",
};

//Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
//Exportamos esta referencia para que este disponible en toda nuestra aplicación. 