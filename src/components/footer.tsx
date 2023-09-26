import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useAppSelector } from '../app/hooks';
import { selectArticles } from '../features/news/newsSlice';
import { FormattedMessage } from 'react-intl';

const Footer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>(dayjs().format('HH:mm:ss'));
    const articles = useAppSelector(selectArticles);
    const articlesCount = articles.length;
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(dayjs().format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer>
            <p><FormattedMessage id="footer.count" /> {articlesCount}</p>&nbsp;
            <p><FormattedMessage id="footer.currentTime" /> {currentTime}</p>
        </footer>
    );
};

export default Footer;
