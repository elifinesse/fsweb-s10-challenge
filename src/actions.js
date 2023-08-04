import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
        const newNote = JSON.parse(res.data.data);
        dispatch(notEkle(newNote));
      }
    })
    .catch((error) => console.log(error));
};

export const notSilAPI = (id) => (dispatch) => {
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
        const newNote = JSON.parse(res.data.data);
        dispatch(notSil(newNote.id));
      }
    })
    .catch((error) => console.log(error));
};
