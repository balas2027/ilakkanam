
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import a from "../../assets/Awards/a.png";
import n from "../../assets/Awards/n.png";
import s from "../../assets/Awards/s.png";
import i from "../../assets/Awards/i.png";
import k from "../../assets/Awards/k.png";

const cards = [
  {
    url: s,
    title: "SMART INDIA HACKATHON 2024 GRAND FINALE",
    id: 1,
  },
  {
    url: k,
    title:
      "Indian International Science Festival 2021, Goa, won Second Prize for Innovative Product",
    id: 2,
  },
  {
    url: i,
    title:
      "Kurukshetra 2022 at College of Engineering Guindy, Anna University - First Prize for Hand held Braille device",
    id: 3,
  },
  {
    url: n,
    title:
      "National Level Technical Project exhibition & Competition, Kerala – Best Project award",
    id: 4,
  },
  {
    url: a,
    title: "ARC Hindustan Institute of Technology & sciences – Winner",
    id: 5,
  },
];
const Example = () => {
  return (
    <div className="w-full">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-77%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center  overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative rounded-3xl 2xl:h-140 2xl:w-250 h-100 w-75 lg:w-180 md:w-150 sm:w-130 xl:w-220 overflow-hidden  shadow-lg shadow-pink-200/50"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 -z-10 transition-transform duration-300 group-hover:scale-110"
      ></div>

      <p className=" p-8 xl:text-3xl lg:text-4xl md:text-3xl sm:text-2xl text-xl   font-black text-white">
        {card.title}
      </p>
    </div>
  );
};

export default Example;
