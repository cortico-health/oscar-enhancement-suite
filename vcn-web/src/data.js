export const usersData = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    languages: ['English', 'French'],
    status: 'Online',
    pronouns: 'He/His',
    title: 'Podatrist',
    location: 'Vancouver, Canada',
    email: 'janedoe@hisemail.com',
    phone: '+1234567788',
    avatar: "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    twitter: '',
    instagram: '',
    linkedin: 'linkedin.com',
    facebook: '',
    bio:'Phasellus condimentum at turpis et aliquet. Etiam urna velit, gravida pretium nisl quis, iaculis finibus tortor. Nullam eget bibendum sapien.Nullam sem massa, efficitur sed tortor eget, vestibulum commodo dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi id risus faucibus, feugiat purus quis, placerat dolor. In pretium ullamcorper arcu. Maecenas sit amet mi arcu. Fusce molestie velit id justo fermentum, convallis euismod ex fermentum. ',
    interests:'Phasellus in neque mattis, ultricies diam vel, malesuada orci.',
    emailNotify: 'Once a day',
    smsNotify: 'Every message',
    clinic: "Kensington Medical Clinic"
  },
  {
    id: 2,
    name: "Dr. Jason Response",
    status: 'Unavailable',
    title: "Urologist",
    languages: ['English', 'French'],
    pronouns: 'He/His',
    location: 'Toronto, Canada',
    email: 'jasonresponse@hisemail.com',
    phone: '+1234567788',
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    twitter: 'twitter.com',
    instagram: 'instagram.com',
    linkedin: 'linkedin.com',
    facebook: 'facebook.com',
    bio:'Phasellus condimentum at turpis et aliquet. Etiam urna velit, gravida pretium nisl quis, iaculis finibus tortor. Nullam eget bibendum sapien.Nullam sem massa, efficitur sed tortor eget, vestibulum commodo dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi id risus faucibus, feugiat purus quis, placerat dolor. In pretium ullamcorper arcu. Maecenas sit amet mi arcu. Fusce molestie velit id justo fermentum, convallis euismod ex fermentum. ',
    interests:'Phasellus in neque mattis, ultricies diam vel, malesuada orci.',
    emailNotify: 'Once a day',
    smsNotify: 'Every message',
    clinic: "Kensington Medical Clinic"
  },
  {
    id: 3,
    name: "Dr. Niles Peppertrout",
    status: 'Away',
    title: 'Psychiatrist',
    languages: ['English', 'French'],
    pronouns: 'She/Her',
    location: 'Ottawa, Canada',
    email: 'nilespeppertrout@heremail.com',
    phone: '+1234567788',
    avatar: "https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    twitter: '',
    instagram: '',
    linkedin: '',
    facebook: '',
    bio:'Phasellus condimentum at turpis et aliquet. Etiam urna velit, gravida pretium nisl quis, iaculis finibus tortor. Nullam eget bibendum sapien.Nullam sem massa, efficitur sed tortor eget, vestibulum commodo dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi id risus faucibus, feugiat purus quis, placerat dolor. In pretium ullamcorper arcu. Maecenas sit amet mi arcu. Fusce molestie velit id justo fermentum, convallis euismod ex fermentum. ',
    interests:'Phasellus in neque mattis, ultricies diam vel, malesuada orci.',
    emailNotify: 'Once a day',
    smsNotify: 'Every message',
    clinic: "Kensington Medical Clinic"
  },
];

export const patientsData = [
  {
    id: 1,
    firstName: "Hanson",
    lastName: "Deck",
    image: '',
    facility: "Kensington Medical Clinic",
    gender: "female",
    email: 'Octavia41@yahoo.com',
    birthDate: new Date(),
    healthCardNumber: "1234567890",
  },
  {
    id: 2,
    firstName: "Stanley",
    lastName: "Roob",
    image: '',
    facility: "Ankunding, Runolfsson and Hyatt",
    email: 'Sophie.Langosh5@hotmail.com',
    gender: "male",
    birthDate: 
    new Date(),
      // "Fri Jan 21 2022 18:42:42 GMT+0100 (Central European Standard Time)",
    healthCardNumber: "5443255670",
  },
];

const messageDetails = [
  {
    author: usersData[0],
    content:
      "Et consequatur sit enim voluptatem illo dolorum inventore ad in. Ex qui provident est neque odit. Aperiam aperiam sequi consequuntur. Eaque qui consequatur. A dignissimos voluptas dignissimos doloribus omnis aut.",
    date: new Date(),
    assets: [
      {
        type: "jpg",
        src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80",
        name: "Doctor Photo"
      },
    ],
    links: []
  },
  {
    author: usersData[0],
    content:
      "Proin vel mollis orci. Vivamus eget efficitur purus. Proin ultricies tincidunt nisi, a condimentum turpis molestie quis. Donec pellentesque turpis id semper ultricies.",
    date: new Date(),
    assets: [],
    links: []
  },
  {
    author: usersData[1],
    content: "Pellentesque venenatis nibh quis dui malesuada accu.",
    date: new Date(),
    assets: [
      {
        type: "jpg",
        src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80",
        name: "Next Doctor Photo"
      },
    ],
    links: []
  },
];

const messageDetailsTwo = [
  {
    author: usersData[0],
    content: "Nothing important",
    date: new Date(),
    assets: [],
    links: []
  },
  {
    author: usersData[0],
    avatar:
      "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    content: "Something else",
    date: new Date(),
    assets: [],
    links: []
  },
];


const messageDetailsThree = [
  {
    author: usersData[0],
    content: "Check this: https://countable.ca/",
    date: new Date(),
    assets: [
      {
        type: "jpg",
        src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80",
      },
    ],
    links: [
      'https://countable.ca/'
    ]
  },
  {
    author: usersData[2],
    avatar:
      "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    content: "Another answer",
    date: new Date(),
    assets: [
      {
        type: "jpg",
        src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80",
      },
    ],
    links: []
  },
];

export const discussionsData =  [
      {
        id: 1,
        patientId: patientsData[0].id,
        participiants: [usersData[0], usersData[1]],
        messages: messageDetails,
      },
      {
        id: 2,
        patientId: patientsData[0].id,
        participiants: [usersData[0], usersData[1]],
        messages: messageDetailsTwo,
      },
      {
        id: 3,
        patientId: patientsData[1].id,
        participiants: [usersData[0], usersData[2]],
        messages: messageDetailsThree,
      },
    ];
