/*

  attachment = {
  name: fileName || node.textContent,
  data: dataUrl,
  extension,
  type: 'eform
  }

  Note: I'll leave some cases in place in case there are some upgrades in the provider messaging.
*/

export const initialState = {
    attachment: {},
    attachments: []
};

export function providerMessagingReducer(state = initialState,action) {
    switch (action.type) {
        case "providerMessaging/set":
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            };
        case "providerMessaging/reset":
            return {
                ...state,
                [action.payload]: initialState[action.payload]
            };
        case "providerMessaging/setAll":
            return { ...state,...action.payload };
        case "providerMessaging/resetAll":
            return { ...state,...initialState };
        case "providerMessaging/addAttachment":
            return { ...state,attachments: [...state.attachments,action.payload] };
        case "providerMessaging/deleteAttachment":
            return {
                ...state,
                attachments: state.attachments.filter(
                    (attachment) => attachment.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}
