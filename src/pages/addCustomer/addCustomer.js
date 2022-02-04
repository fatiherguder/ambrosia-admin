import React,{useState} from 'react'
import './addCustomer.css'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection, setDoc, doc} from "firebase/firestore";
import { Alert } from 'react-bootstrap';

const firebaseConfig = {
    apiKey: "AIzaSyBE_-xpFeQYe1TOE9DzHPtJNFoyN-2ZlUA",
    authDomain: "ambrosia-bef41.firebaseapp.com",
    projectId: "ambrosia-bef41",
    storageBucket: "ambrosia-bef41.appspot.com",
    messagingSenderId: "278877228571",
    appId: "1:278877228571:web:87c5e693bb5e48fc00b2be",
    measurementId: "${config.measurementId}"
  };

export const AddCustomer = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [adress, setAdress] = useState("");
    const [phone, setPhone] = useState("");
    const [show, setShow] = useState(false);

    const register = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, mail, pass)
        .then(() => {
            const userRef = doc(db, 'users', auth.currentUser.uid);
            setDoc(userRef,{
                email: mail,
                name: name,
                pass: pass,
                adress: adress,
                phone:phone,
                markets: ["2WBgM5IxBtu4feMvPCvN"],
                id: auth.currentUser.uid
            })
              setShow(true);
        })
    }

    return (
        <div className='a'>
            <form>
                <div className='form'>
                    <label>İsim Soyisim :
                        <input
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>E-posta :
                        <input
                        type="text" 
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        />
                    </label>
                    <label>Parola :
                        <input
                        type="text" 
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        />
                    </label>
                    <label>Adres :
                        <input
                        type="text" 
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        />
                    </label>
                    <label> Telefon :
                        <input
                        type="text" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    <input type="submit" className="submitButton" onClick={register}/>
                    <Alert show={show} variant='success'>
                        Kullanıcı Başarıyla Oluşturuldu !
                    </Alert>
                </div>
                
            </form>
        </div>
    )
}
