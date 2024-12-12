import SpotifySvg from '../assets/partners/spotify.svg';
import GoogleSvg from '../assets/partners/google.svg';
import UberSvg from '../assets/partners/uber.svg';
import MicrosoftSvg from '../assets/partners/microsoft.svg';
import ShopifySvg from '../assets/partners/shopify.svg';

const Frame56 = () => {
    return (
        <div className="flex flex-wrap justify-center items-center">
        <img src={SpotifySvg} alt="Spotify" className="w-24 h-24 m-4" />
        <img src={GoogleSvg} alt="Google" className="w-24 h-24 m-4" />
        <img src={UberSvg} alt="Uber" className="w-24 h-24 m-4" />
        <img src={MicrosoftSvg} alt="Microsoft" className="w-24 h-24 m-4" />
        <img src={ShopifySvg} alt="Shopify" className="w-24 h-24 m-4" />
        </div>
    );
};

export default Frame56;