import { FormattedMessage } from "react-intl";

const columns = [
    {
        title: <FormattedMessage id="popup.author" />,
        dataIndex: 'author',
        key: 'name',
    },
    {
        title:<FormattedMessage id="titleColumn" />,
        dataIndex: 'title',
        key: 'age',
    },
    {
        title: <FormattedMessage id="publishedAtColumn" />,
        dataIndex: 'publishedAt',
        key: 'publishedAt',
    },
    {
        title: <FormattedMessage id="descriptionColumn" />,
        dataIndex: 'description',
        key: 'description',
    },
    {
        
        dataIndex: 'url',
        key: 'url',
        render: (v: string) => { return <a target="_blank" rel="noopener noreferrer" href={v}><FormattedMessage id="checkButton"/></a> }
    },
];

export default columns