import ActionButton from '@/shared/ActionButton'
import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types';

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-[#929ECC] py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <HText>Website Name</HText>
                <p className='my-5 '>
                    Complete your business with website template.
                </p>
                <p>© 2023 KW. All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0 '>
                <h4 className='my-5'>Links</h4>
                <p className='my-5 '>Share location</p>
                <p className='my-5 '>Order Tracking</p>
                <p>FAQs</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0 '>
                <h4 className='my-5'>Contact Us</h4>
                <p className='my-5'>66637-38884-33</p>
                <ActionButton setSelectedPage={setSelectedPage}>Purchase Now</ActionButton>
            </div>
        </div>
    </footer>
  )
}

export default Footer