import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
const Gallerys = () => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;

  };
  return (
    <div data-aos="fade-down" className="bg-galley">
      <div className="md:mt-32 mt-20 container">
        <div className="mb-8">
          <h1 className="text-center text-3xl font-semibold">
            Our Heros Gallery
          </h1>
        </div>

        <LightGallery
          onInit={onBeforeSlide}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/NtytPWt/serge-kutuzov-meq-Vd5zwyl-I-unsplash-1-1.jpg"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img1"
              src="https://i.ibb.co/NtytPWt/serge-kutuzov-meq-Vd5zwyl-I-unsplash-1-1.jpg"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/gJcyv4b/banner5.jpg"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img2"
              src="https://i.ibb.co/gJcyv4b/banner5.jpg"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/dWxWbzX/pngwing-com-14-1.png"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img3"
              src="https://i.ibb.co/dWxWbzX/pngwing-com-14-1.png"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/QKRTpQQ/pngwing-com-13-1.png"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img4"
              src="https://i.ibb.co/QKRTpQQ/pngwing-com-13-1.png"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/vqQSKcG/pngwing-com-12-1.png"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img5"
              src="https://i.ibb.co/vqQSKcG/pngwing-com-12-1.png"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/jTM2cf3/ravi-palwe-EGJhk2-Gz-PMA-unsplash-1.jpg"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img6"
              src="https://i.ibb.co/jTM2cf3/ravi-palwe-EGJhk2-Gz-PMA-unsplash-1.jpg"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/fqn4NJH/yogi-purnama-en7-G3h-TSj-BQ-unsplash-1.jpg"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img7"
              src="https://i.ibb.co/fqn4NJH/yogi-purnama-en7-G3h-TSj-BQ-unsplash-1.jpg"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/fqn4NJH/yogi-purnama-en7-G3h-TSj-BQ-unsplash-1.jpg"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img8"
              src="https://i.ibb.co/fqn4NJH/yogi-purnama-en7-G3h-TSj-BQ-unsplash-1.jpg"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/fqn4NJH/yogi-purnama-en7-G3h-TSj-BQ-unsplash-1.jpg"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img9"
              src="https://i.ibb.co/fqn4NJH/yogi-purnama-en7-G3h-TSj-BQ-unsplash-1.jpg"
            />
          </a>
          <a
            className=" overflow-hidden border-4 border-white shadow-xl w-full h-60 bg-gray-700 rounded-lg"
            href="https://i.ibb.co/k0TKHdY/banner4.jpg"
          >
            <img
              className="w-full h-60 bg-gray-700"
              alt="img10"
              src="https://i.ibb.co/k0TKHdY/banner4.jpg"
            />
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallerys;
