/*

  attachment = {
  name: fileName || node.textContent,
  data: dataUrl,
  extension,
  type: 'eform
  }
*/

export const initialState = {
    attachments: [],
};

export function providerMessagingReducer(state = initialState,action) {
    switch (action.type) {
        case "providerMessaging/set":
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            };
        case "providerMessaging/setAll":
            return { ...state,...action.payload };
        case "providerMessaging/reset":
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
