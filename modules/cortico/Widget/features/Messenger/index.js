/*

  attachment = {
  name: fileName || node.textContent,
  data: dataUrl,
  extension,
  type: 'eform
  }
*/

export const initialState = {
  to: null,
  subject: null,
  body: null,
  scheme: "email",
  encounter: null,
  attachments: [],
  document: null,
  eform: null,
  phone: null,
  inboxDocument: null,
};

export function messengerReducer(state = initialState, action) {
  switch (action.type) {
    case "messenger/set":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "messenger/setAll":
      return { ...state, ...action.payload };
    case "messenger/reset":
      return { ...state, ...initialState };
    case "messenger/addAttachment":
      return { ...state, attachments: [...state.attachments, action.payload] };
    case "messenger/deleteAttachment":
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
