import foto1 from "../assets/invierno.jpg";
import foto2 from "../assets/otonio.jpg";
import foto4 from "../assets/verano.jpg";
import foto3 from "../assets/primavera.jpg";
import { Rate } from "./Rate";
import { Contador } from "./contador";
import { useState } from "react";

function MainSection() {
  const [images, setImages] = useState([{"src": foto1, "rate":0, id:0},
                  {"src": foto2, "rate":0, id:1},
                  {"src": foto3, "rate":0, id:2},
                  {"src": foto4, "rate":0, id:3}]);
  const [clicks, setClicks] = useState(0);
  const editaRate = (id, newRate)=>{
    const newImages = images.map((img)=>{
      if (img.id == id)
        return {...img, "rate":newRate};
      else
        return img;
    });

    newImages.sort((a,b)=>{return b.rate-a.rate});

    setClicks((currentClicks) => currentClicks + 1);
    setImages(newImages);

  }

  const average = images.reduce((total, image) => total + image.rate, 0) / images.length;

  return (
    <>
      <Contador clicks={clicks} average={average} />
      <div className="mainSection">

        {images.map((img) => (
          <div className="scoreCard" key={img.id}>
            <img  src={img.src} alt="imagen" />
            <Rate editaRate={editaRate} id={img.id} rate={img.rate}></Rate>
          </div>
        ))}

      </div>
    </>
  );
}

export default MainSection;
