import RelatedItemsView from './View';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';
import RelatedItemsData from './Data';
const RelatedItemsEdit = (props) => {
	const { data, blocksConfig, onChangeBlock, block, selected } = props;

	return (
		<>
			<RelatedItemsView {...props} />
			<SidebarPortal selected={selected}>
				<RelatedItemsData
					data={data}
					block={block}
					onChangeBlock={onChangeBlock}
					blocksConfig={blocksConfig}
				/>
			</SidebarPortal>
		</>
	);
};

export default withBlockExtensions(RelatedItemsEdit);
