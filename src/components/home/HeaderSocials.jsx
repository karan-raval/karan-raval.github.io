import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/karan-raval' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/karan-raval-8b5b0b203/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
        </div>
    );
};

export default HeaderSocials;
