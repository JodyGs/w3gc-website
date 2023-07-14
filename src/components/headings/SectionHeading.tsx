import { motion } from "framer-motion";
import { ITEM_VARIANTS } from "../../utils/anim";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  description,
}: Props) {
  return (
    <>
      <motion.h3
        variants={ITEM_VARIANTS}
        className="mb-8 text-[40px] font-extrabold uppercase leading-[48px] tracking-[-2px]"
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.p
          variants={ITEM_VARIANTS}
          className="mb-4 font-extrabold uppercase leading-6"
        >
          {subtitle}
        </motion.p>
      )}
      {description && (
        <motion.p
          variants={ITEM_VARIANTS}
          className="font-inter leading-6 text-custom-grey-lightest"
        >
          {description}
        </motion.p>
      )}
    </>
  );
}
