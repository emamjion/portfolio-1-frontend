
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const socials = [
    {
        icon: <FaGithub/>,
        path: 'https://github.com/emamjion'
    },
    {
        icon: <FaLinkedinIn/>,
        path: 'https://www.linkedin.com/in/emam-khalid-jion/'
    },
    {
        icon: <FaWhatsapp/>,
        path: '+8801727087717'
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((s, index) => {
                return <Link key={index} href={s.path} className={iconStyles} >{s.icon}</Link>
            })}
        </div>
    );
};

export default Social;