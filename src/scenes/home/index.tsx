import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageGraphic from '@/assets/Home.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px")

    return (
        <section
            id='home'
            className='gap-16 py-10 md:h-full md:pb-0'
        >
            {/* image and main header */}
            <motion.div
                // style={{backgroundColor: "#F4F6F5", margin: '10%'}}
                className='md:flex mx-auto w-5/6 md:w-[100%] md:ml-32 items-center justify-center md:h-5/6'
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* headings */}
                    <motion.div
                        className='md:-mt-20'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                                {/* <img src={HomePageText} alt="home-page-text" /> */}
                                <div className='text-4xl font-bold'>Introduce Your Product
                                    Quickly & Effectively </div>
                            </div>
                        </div>

                        <p className='mt-8 text-lg'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse cumque placeat animi sunt consectetur earum. Quam laboriosam explicabo deleniti quibusdam vel, hic error, maxime corrupti facere est iste dignissimos dolores!
                        </p>
                    </motion.div>

                    {/* actions */}
                    <motion.div
                        className='mt-8 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>Purchase Now</ActionButton>
                        <AnchorLink
                            className='text-sm font-bold hover:text-black px-10 py-2 border-solid border-2 border-[#111B47]'
                            onClick={() => setSelectedPage(SelectedPage.Contact)}
                            href={`${SelectedPage.Contact}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>

                    </motion.div>
                </div>

                {isAboveMediumScreens &&
                    <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-5 md:justify-items-end pt-11'>
                        <img src={HomePageGraphic} alt="home-pageGraphic" />
                        {/* <div className='relative'>
                    <div className='before:absolute before:z-[-1] before:content-homeBack'>
                        <img src={HomePageGraphic} alt="home-pageGraphic"  />
                    </div>
                </div> */}
                    </div>
                }
            </motion.div>

        </section>
    )
}

export default Home