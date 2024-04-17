import MaxWidthWrapper from './MaxWidthWrapper'
import { socials } from "@/constants";

interface SocialItem {
    id: string;
    url: string;
    iconUrl: string;
    title: string;
}

const Footer = () => {
  return (
    <div className="mt-32">
        <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-t border-gray-300">
            <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. The Observer Inc, All rights reserved.
            </p>

            <ul className="flex gap-5 flex-wrap">
            {socials.map((item: SocialItem) => (
                <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                    <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
            ))}
            </ul>
        </div>
        </MaxWidthWrapper>  
    </div>
  );
};

export default Footer;
