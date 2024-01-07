type AllowedMessages = 'fetch-bestsellers';

const ALLOWED_MESSAGES: { [key in AllowedMessages]: AllowedMessages } = {
  'fetch-bestsellers': 'fetch-bestsellers',
};

const handleCases = (msg: any) => {
  switch (msg.type) {
    case ALLOWED_MESSAGES['fetch-bestsellers']: {
      console.log('xxxxxxx');
      break;
    }
  }
};

if (figma.editorType === 'figma') {
  figma.showUI(__html__);

  figma.ui.onmessage = (msg) => {
    handleCases(msg);
  };
}

if (figma.editorType === 'figjam') {
  figma.showUI(__html__);

  figma.ui.onmessage = (msg) => {
    handleCases(msg);

    figma.closePlugin();
  };
}
