import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testmonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem quisquam cum voluptates quod, modi nam quam, explicabo vel perspiciatis fuga error consectetur eaque quo facere reiciendis tempora possimus neque.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem quisquam cum voluptates quod, modi nam quam, explicabo vel perspiciatis fuga error consectetur eaque quo facere reiciendis tempora possimus neque.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem quisquam cum voluptates quod, modi nam quam, explicabo vel perspiciatis fuga error consectetur eaque quo facere reiciendis tempora possimus neque.",
  },
  {
    avatar: AVTR4,
    name: "Nama Wana",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem quisquam cum voluptates quod, modi nam quam, explicabo vel perspiciatis fuga error consectetur eaque quo facere reiciendis tempora possimus neque.",
  },
];

function Testmonials() {
  return (
    <section id="testmonials">
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>
      <Swiper
        className="container testmonials__container"
        slidesPerView={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testmonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testmonials;
