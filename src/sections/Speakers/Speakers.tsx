import React from "react";
import Button from "~/components/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHeading from "~/components/headings/SectionHeading";
import {
  LeftArrow,
  RightArrow,
  SpeakersDecoration,
} from "~/components/svg/svg";
import Image from "next/image";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import { motion } from "framer-motion";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "~/utils/anim";

type CardProps = {
  name: string;
  title: string;
  img: string;
  placeholder: string;
};

const DATA_SPEAKERS = [
  {
    name: "Dan Biton",
    title: "CEO at Starchain Gazer",
    img: "/images/speakers/DanBiton.webp",
    placeholder: "/images/speakers/DanBiton-placeholder.webp",
  },
  {
    name: "Pierre Laurent",
    title: "Co-Founder at Atka",
    img: "/images/speakers/DanBiton.webp",
    placeholder: "/images/speakers/PierreLaurent-placeholder.webp",
  },
  {
    name: "William Piquard",
    title: "Co-Founder at Atka",
    img: "/images/speakers/DanBiton.webp",
    placeholder: "/images/speakers/WilliamPiquard-placeholder.webp",
  },
];

function CustomButtonGroup({ next, previous }: ButtonGroupProps) {
  return (
    <motion.div
      variants={ITEM_VARIANTS}
      className="col-span-full space-x-4 xl:hidden"
    >
      <Button
        onClick={previous}
        variant="secondary"
        size="small"
        className="group"
        id="previous"
      >
        <LeftArrow className="h-6 w-6 fill-white group-hover:fill-black group-active:fill-[#3A3C4B]" />
      </Button>
      <Button
        id="next"
        onClick={next}
        variant="secondary"
        size="small"
        className="group"
      >
        <RightArrow className="h-6 w-6 fill-white group-hover:fill-black group-active:fill-[#3A3C4B]" />
      </Button>
    </motion.div>
  );
}

function CardSpeaker({ name, title, img, placeholder }: CardProps) {
  return (
    <motion.div
      variants={ITEM_VARIANTS}
      className="group relative h-full w-full overflow-hidden"
    >
      <motion.div variants={ITEM_VARIANTS} className="overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
        <motion.div
          variants={ITEM_VARIANTS}
          className="absolute inset-0 bg-[#2c2d38] opacity-0 mix-blend-color transition duration-300 ease-out group-hover:opacity-0 lg:opacity-100"
        ></motion.div>
      </motion.div>
      <motion.div
        variants={ITEM_VARIANTS}
        className="absolute -bottom-[1px] z-10 w-full translate-y-0 space-y-2 bg-white p-4 text-custom-grey-middle transition-all duration-300 ease-out group-hover:-bottom-[1px] md:p-8 lg:-bottom-full lg:translate-y-full"
      >
        <h3 className="whitespace-nowrap text-xs font-extrabold uppercase leading-4 md:text-base md:leading-6">
          {name}
        </h3>
        <p className="whitespace-pre font-inter text-xs leading-4 md:text-base lg:leading-6">
          {title}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Speakers() {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={CONTAINER_VARIANTS}
      id="speakers"
      className="grid18 relative col-span-full px-2 pb-20 md:col-span-full xl:py-[280px]"
    >
      <motion.div
        variants={ITEM_VARIANTS}
        className="absolute right-0 top-[112px] hidden h-[224px] w-[680px] bg-custom-red-middle xl:block"
      ></motion.div>
      <motion.div
        variants={ITEM_VARIANTS}
        className="md:col-span-16 md:grid16 col-span-full"
      >
        <motion.div
          variants={ITEM_VARIANTS}
          className="col-span-full md:col-span-6"
        >
          <SectionHeading
            className="col-span-full"
            title="Speakers"
            description="Lorem ipsum dolor sit amet consectetur. Interdum nunc sem facilisis egestas mauris. Et amet vehicula nulla ullamcorper venenatis dictum velit. Sit adipiscing aliquam lectus volutpat suspendisse. Sit lacus diam egestas ut."
          />
          <motion.div
            variants={ITEM_VARIANTS}
            className="col-span-full mb-[180px] mt-8 hidden space-x-4 xl:flex"
          >
            <Button
              onClick={() => {
                document.getElementById("previous")?.click();
              }}
              variant="secondary"
              size="small"
              className="group"
              id="previous"
            >
              <LeftArrow className="h-6 w-6 fill-white group-hover:fill-black group-active:fill-[#3A3C4B]" />
            </Button>
            <Button
              onClick={() => {
                document.getElementById("next")?.click();
              }}
              variant="secondary"
              size="small"
              className="group"
            >
              <RightArrow className="h-6 w-6 fill-white group-hover:fill-black group-active:fill-[#3A3C4B]" />
            </Button>
          </motion.div>
          <Button
            variant="secondary"
            className="col-span-full mt-8 hidden w-full md:block md:w-fit"
          >
            Become a speaker
          </Button>
        </motion.div>
        <motion.div
          variants={ITEM_VARIANTS}
          className="col-span-full space-y-8 pt-8 md:col-span-10 md:col-start-7 md:col-end-17 md:grid md:grid-cols-10 md:pt-0"
        >
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="col-span-full"
            containerClass="col-span-full"
            customButtonGroup={<CustomButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            sliderClass="space-x-4"
            itemClass="h-[280px] xs:h-[380px] sm:h-[460px] md:h-[560px]"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={{
              xl: {
                breakpoint: { max: 9000, min: 1280 },
                items: 2,
              },
              lg: {
                breakpoint: { max: 1280, min: 1024 },
                items: 2,
              },
              sm: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
              },
              xs: {
                breakpoint: { max: 768, min: 640 },
                items: 2,
              },
              xxs: {
                breakpoint: { max: 640, min: 0 },
                items: 2,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            swipeable
          >
            {DATA_SPEAKERS.map(({ name, title, img, placeholder }) => (
              <CardSpeaker
                key={name}
                name={name}
                title={title}
                img={img}
                placeholder={placeholder}
              />
            ))}
          </Carousel>
        </motion.div>
        <Button
          variant="secondary"
          className="col-span-full mt-8 w-full md:hidden md:w-fit"
        >
          Become a speaker
        </Button>
      </motion.div>
    </motion.section>
  );
}
