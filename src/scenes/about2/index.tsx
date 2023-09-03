import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion"
import AboutGraphic from '@/assets/about2.png'
import HText from '@/shared/HText';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const About2 = ({ setSelectedPage }: Props) => {

  return (
    <section id="about" className="mx-auto w-5/6 pt-24 pb-32 md:h-full">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={AboutGraphic}
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <HText>Light, Fast & Powerful</HText>
            <p className='mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam optio hic necessitatibus atque alias sed voluptates quasi, tempora repellat omnis enim veritatis explicabo ea illo adipisci libero possimus voluptatibus. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam optio hic necessitatibus atque alias sed voluptates quasi, tempora repellat omnis enim veritatis explicabo ea illo adipisci libero possimus voluptatibus.
            </p>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About2