import { set, ref, onValue, remove, update } from "firebase/database";
import { db } from "./firebase";
import { uid } from "uid";
// import { toastSuccessNotify } from "./toastNotify";

export const writeCardInfo = (title, imgURL, content, email) => {
  const uuid = uid();
  set(ref(db, `/${uuid}`), {
    title: title,
    imgURL: imgURL,
    content: content,
    email: email,
    id: uuid,
    
  });
};

export const getCardData = (setCardInfo, cardInfo) => {
    onValue(ref(db), (snapshot) => {
      setCardInfo([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((card) => {
          setCardInfo((oldArray) => [...oldArray, card]);
        });
      }
    });
  };