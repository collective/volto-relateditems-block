import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';

const RelatedItemsView = (props) => {
  const { data, content, className } = props;
  return (
    <div className={cx('block relatedItems', className, data.align)}>
      <div className="inner-container">
        <h2 className="headline">{data.title}</h2>
        <ul className="items-list">
          {content.relatedItems.map((item) => (
            <li className="item" key={item['@id']}>
              <UniversalLink href={item['@id']}>{item.title}</UniversalLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelatedItemsView;
