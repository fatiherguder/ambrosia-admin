import React,{useState} from 'react'
import './menu'
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc} from "firebase/firestore";
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

export const AddMenu = () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [show, setShow] = useState(false);

    const register = (event) => {
        event.preventDefault();
        const MarketRef = doc(db, 'markets', "2WBgM5IxBtu4feMvPCvN");
            setDoc(MarketRef.menu,{
                name: name,
                desc: desc,
                img: img,
                price:price,
            })
              setShow(true);
    }

    return (
        <div className='a'>
            <form>
                <div className='form'>
                    <label>Başlık :
                        <input
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>Açıklama :
                        <input
                        type="text" 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        />
                    </label>
                    <label>Fotoğraf :
                        <input
                        type="text" 
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        />
                    </label>
                    <label>Fiyat :
                        <input
                        type="text" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <input type="submit" className="submitButton" onClick={register}/>
                    <Alert show={show} variant='success'>
                        Başarıyla Eklendi !
                    </Alert>
                </div>
                
            </form>
        </div>
    )
}
