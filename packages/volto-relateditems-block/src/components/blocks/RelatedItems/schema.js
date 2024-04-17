import { defineMessages } from 'react-intl';

const messages = defineMessages({
  relatedItemsBlock: {
    id: 'Related Items',
    defaultMessage: 'Related Items',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const relatedItemsSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.relatedItemsBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],
    properties: {
      title: {
        title: props.intl.formatMessage(messages.title),
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
      size: {
        title: props.intl.formatMessage(messages.size),
        widget: 'image_size',
      },
    },
    required: [],
  };
};
