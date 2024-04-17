import { BlockDataForm } from '@plone/volto/components';
import { useIntl } from 'react-intl';

const RelatedItemsData = (props) => {
	const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
		props;
	const intl = useIntl();
	const schema = blocksConfig.relatedItems.blockSchema({
		...props,
		intl,
	});

	return (
		<BlockDataForm
			schema={schema}
			title={schema.title}
			onChangeField={(id, value) => {
				onChangeBlock(block, {
					...data,
					[id]: value,
				});
			}}
			onChangeBlock={onChangeBlock}
			formData={data}
			block={block}
			blocksConfig={blocksConfig}
			navRoot={navRoot}
			contentType={contentType}
		/>
	);
};

export default RelatedItemsData;
