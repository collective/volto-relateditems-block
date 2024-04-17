import { UniversalLink } from '@plone/volto/components';

const RelatedItemsView = (props) => {
	const { data, content } = props;
	// console.log(content);
	return (
		<div>
			<h2>{data.title}</h2>
			<ul>
				{content.relatedItems.map((item) => (
					<li key={item['@id']}>
						<UniversalLink href={item['@id']}>{item.title}</UniversalLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RelatedItemsView;
