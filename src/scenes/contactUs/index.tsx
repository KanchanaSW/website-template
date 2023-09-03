import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {

  return (
    <section id="contact" className="mx-auto h-3/4 flex items-center justify-center pt-24 pb-32 bg-[#E7ECFF]">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-4xl">A Price To Suit Everyone</span> 
          </HText>
          <p className="my-5 md:mx-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur ullam dignissimos reprehenderit quis natus, dolor est autem hic beatae fuga! Similique non iste animi quam cumque voluptates excepturi modi.
          </p>
        </motion.div>

        <motion.div
            className="md:mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
          <HText>
              <span className="text-7xl">$50</span> 
          </HText>

          <p className="mt-12 mb-4 text-[#5D6970]">See, One price. Simple.</p>

          <ActionButton setSelectedPage={setSelectedPage}>Purchase Now</ActionButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;