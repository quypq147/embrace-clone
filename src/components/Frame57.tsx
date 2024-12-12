import EvernoteSvg from '../assets/partners/evernote.svg';
import AdobeSvg from '../assets/partners/adobe.svg';
import PayPalSvg from '../assets/partners/paypal.svg';
import AmazonSvg from '../assets/partners/amazon.svg';
import AsanaSvg from '../assets/partners/asana.svg';

const Frame57 = () => {
    return(
        <div className='flex flex-wrap justify-center items-center'>
            <img src={EvernoteSvg} alt="Evernote" className="w-24 h-24 m-4"/>
            <img src={AdobeSvg} alt="Adobe"  className="w-24 h-24 m-4"/>
            <img src={PayPalSvg} alt="PayPal" className="w-24 h-24 m-4"/>
            <img src={AmazonSvg} alt="Amazon" className="w-24 h-24 m-4"/>
            <img src={AsanaSvg} alt="Asana" className="w-24 h-24 m-4" />
        </div>
    );
};

export default Frame57;