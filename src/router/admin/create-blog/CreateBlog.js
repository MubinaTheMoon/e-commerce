import React, { useState } from "react";
import "./CreateBlog.css";
import { db } from "../../../server/Firebase";
// collection - Array | addDoc - add Document(to upload your data)
import { collection, addDoc } from "firebase/firestore";
// below things for uploading images
import { toast } from "react-toastify";

function CreateBlog() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [load, setLoad] = useState(false);

  const usersInfo = collection(db, "information");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    await addDoc(usersInfo, {
      name,
      text,
    })
      .then(() => {
        toast.success("Ma'lumot saqlandi");
        setName("");
        setText("");
      })

      .catch(() => {
        toast.error("Afsuski ma'lumot saqlanmadi");
      })
      .finally(() => {
        setLoad(false);
      });
  };
  return (
    <div className="create__blog">
        <h2>ManageBlog</h2>
        <form onSubmit={handleSubmit} action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input__blog"
          type="text"
          placeholder="Blogingizni yarating..."
        />
        <textarea
          value={text}  
          onChange={(e) => setText(e.target.value)}
          className="textarea__blog"
          placeholder="Ma'lumot kiriting"
          name="my_textarea"
          id=""
          cols="50"
          rows="4"
        ></textarea>
        <button disabled={load} className="btn__blog">
          {load ? "Kuting..." : "Ma'lumotni qo'shish"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
