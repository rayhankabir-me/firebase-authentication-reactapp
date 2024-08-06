import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase";

export default function MultipleFilesUpload() {
  const [images, setImages] = useState();

  const handleSubmit = async () => {
    for (let i = 0; i < images.length; i++) {
      const storageRef = ref(storage, `/files/multiples/${images[i].name}`);

      const result = await uploadBytes(storageRef, images[i])
        .then(() => {
          console.log("sucess");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={(event) => setImages(event.target.file)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
