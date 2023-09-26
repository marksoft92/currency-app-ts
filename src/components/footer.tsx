import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { FormattedMessage } from 'react-intl';

const Footer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>(dayjs().format('HH:mm:ss'));


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(dayjs().format('HH:mm:ss'));
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
