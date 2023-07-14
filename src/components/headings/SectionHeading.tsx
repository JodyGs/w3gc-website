import { motion } from "framer-motion";
import { ITEM_VARIANTS } from "../../utils/anim";

type Props = {
  title: string;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subtitle?: string;
  description: string;
};

export default function SectionHeading({
  title,
  titleAs,
  subtitle,
  description,
}: Props) {
  const TitleTag = titleAs || "h3";
  return (
    <>
      <TitleTag>
        <motion.div
          variants={ITEM_VARIANTS}
          className="mb-8 text-[40px] font-extrabold uppercase leading-[48px] tracking-[-2px]"
        >
          {title}
        </motion.div>
      </TitleTag>
      {description && (
        <motion.p
          variants={ITEM_VARIANTS}
          className="mb-4 font-extrabold uppercase leading-6"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.p
        variants={ITEM_VARIANTS}
        className="font-inter leading-6 text-custom-grey-lighter"
      >
        {description}
      </motion.p>
    </>
  );
}
