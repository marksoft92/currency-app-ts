import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { FormattedMessage } from 'react-intl';
const getCurrentTime = () => dayjs().format('HH:mm:ss');
const Footer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <footer>
            <p><FormattedMessage id="footer.currentTime" /> {currentTime}</p>
        </footer>
    );
};

export default Footer;
