import { set, ref, onValue, remove, update } from "firebase/database";
import { db } from "./firebase";
import { uid } from "uid";
import { toastSuccessNotify } from "./toastNotify";


export const writeCardInfo = (title, imgURL, content, email, date) => {
  const uuid = uid();
  set(ref(db, `/${uuid}`), {
    title: title,
    imgURL: imgURL,
    content: content,
    email: email,
    date: date,
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

  export const updateCardData = (
    updateTitle,
    updateImageURL,
    updateContent,
    email,
    updateDate,
    id
  ) => {
    update(ref(db, `/${id}`), {
      title: updateTitle,
      imgURL: updateImageURL,
      content: updateContent,
      email: email,
      date: updateDate,
      id: id,
    });
  };
  
  export const deleteBlog = (card, navigate) => {
    remove(ref(db, `${card.id}`));
    navigate("/");
    toastSuccessNotify("Card deleted successfully");
  };