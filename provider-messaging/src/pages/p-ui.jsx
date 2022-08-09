import { h } from "preact";
import AButton from "../components/atoms/a-button";
import AInput from "../components/atoms/a-input";

import ASvg from "../components/atoms/a-svg";
import CPlugin from "../components/organisms/c-plugin";
import CPatientCard from "../components/organisms/c-patient-card";
import MChatTools from "../components/molecules/m-chat-tools";
import CMessageList from "../components/organisms/c-message-list";
import MSearch from "../components/molecules/m-search";
import MSend from "../components/molecules/m-send";

const patientData = {
  name: 'Hanson Deck',
  facility: 'Kensington Medical Clinic',
  gender: 'female',
  birthDate: new Date(),
  healthCardNumber: '1234567890'
}

const messageDetails = [
  {
    author: 'me',
    avatar: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    content: 'Et consequatur sit enim voluptatem illo dolorum inventore ad in. Ex qui provident est neque odit. Aperiam aperiam sequi consequuntur. Eaque qui consequatur. A dignissimos voluptas dignissimos doloribus omnis aut.',
    date: new Date(),
    assets: [
      {
        type: 'jpg',
        src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80'
      }
    ]
  },
  {
    author: 'me',
    avatar: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    content: 'Proin vel mollis orci. Vivamus eget efficitur purus. Proin ultricies tincidunt nisi, a condimentum turpis molestie quis. Donec pellentesque turpis id semper ultricies.',
    date: new Date(),
    assets: []
  },
  {
    author: 'Jane Doe',
    avatar: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    content: 'Pellentesque venenatis nibh quis dui malesuada accu.',
    date: new Date(),
    assets: [
      {
        type: 'jpg',
        src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80'
      }
    ]
  },
  {
    author: 'Jerry',
    avatar: 'https://static.wikia.nocookie.net/bb6b9a39-8699-4ab7-9f8d-3109ac9cc0b0/scale-to-width/755',
    content: 'Et consequatur sit enim voluptatem illo dolorum inventore ad in. Ex qui provident est neque odit. Aperiam aperiam sequi consequuntur. Eaque qui consequatur. A dignissimos voluptas dignissimos doloribus omnis aut.',
    date: new Date(),
    assets: []
  }
]

const chatRoom = {
  patientDiscussionId: '1234567890',
  users: [
    {
      name: 'Dr. Jane Doe'
    },
    {
      name: 'Mrs. Hanson Deck'
    }
  ],
  messages: messageDetails
}



const PUi = () => (
  <div className="p-ui">
    <section className="py-16 o-container max-w-o_container__lg">
    <h1 className="text-title1 mb-4">Atoms</h1>

    <h2 className="text-title2 mb-4">Buttons: </h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 w-fit gap-4 mb-4">
      <AButton className="w-44" variant="button-primary-lg">Large primary</AButton>
      <AButton className="w-44" variant="button-secondary-lg">Large secondary</AButton>
      <AButton className="w-44" variant="button-tertiary-lg">Large tertiary</AButton>
      <AButton className="w-36">Small primary</AButton>
      <AButton className="w-36" variant="button-secondary-sm">Small secondary</AButton>
      <AButton className="w-36" variant="button-tertiary-sm">Small tertiary</AButton>
    </div>

    <h2 className="text-title2 mb-4">Icons: </h2>
    <div className="flex gap-x-16 gap-y-8 items-center flex-wrap mb-4">

    <ASvg className="cursor-pointer" src="logo"/>
      <ASvg className="cursor-pointer" src="grid"/>
      <div className="cursor-pointer bg-primary-700 rounded-full w-10 h-10">
        <ASvg src="selected" className="stroke-white m-auto h-full" />
      </div>
      <ASvg src="selected" className="stroke-secondary-500" />
      <ASvg className="cursor-pointer" src="users"/>
      <ASvg className="cursor-pointer" src="settings"/>
      <ASvg className="cursor-pointer" src="selected2"/>
      <ASvg className="cursor-pointer" src="info"/>
      <ASvg className="cursor-pointer" src="log-out"/>
      <ASvg className="cursor-pointer" src="plug"/>
      <ASvg className="cursor-pointer" src="search"/>
      <ASvg src="send" />

      <div className="border cursor-pointer p-auto border-primary-700 rounded-full w-7 h-7">
        <ASvg src="accept" className="m-auto h-full" />
      </div>
      <ASvg src="attach" />
      <ASvg className=" child:fill-white child:stroke-primary-700" src="attach" />
      <div className="bg-primary-700 cursor-pointer rounded-full w-7 h-7">
        <ASvg onClick={()=> alert('download')} src="download" className="m-auto h-full" />
      </div>

      <ASvg onClick={()=> alert('avatar1')} src="avatar" />

      <ASvg className="first:child:fill-primary-300" onClick={()=> alert('avatar2')} src="avatar" />
    </div>

    <h2 className="text-title2 mb-4">Inputs: </h2>
    <div className="mb-4">
      <MSearch/>
      {/* <MSend className="mb-4" /> */}
    </div>


    <h1 className="text-title1 mb-4">Organisms</h1>
      <CPlugin/>



      {/* <MChatTools chatRoom={chatRoom}/> */}

      <CPatientCard className="my-4 px-5 w-96" patientData={patientData} />

      <CPatientCard className="my-4 px-5 w-96" />

      <CMessageList messageData={chatRoom} />
  
    </section>
  </div>
 




    // Web component aproach
  //   <div className="my-16 o-container o-container--lg">
  //   <h1 className="text-title1 mb-4">Atoms</h1>

  //   <h2 className="text-title2 mb-4">Buttons: </h2>
  //   <div className="grid grid-cols-3 w-fit gap-4 mb-4">
  //     <a-button variant="button-primary-lg">Large primary</a-button>
  //     <a-button variant="button-secondary-lg">Large secondary</a-button>
  //     <a-button variant="button-tertiary-lg">Large tertiary</a-button>
  //     <a-button>Small primary</a-button>
  //     <a-button variant="button-secondary-sm">Small secondary</a-button>
  //     <a-button variant="button-tertiary-sm">Small tertiary</a-button>
  //   </div>

  //   <h2 className="text-title2 mb-4">Icons: </h2>
  //   <div className="flex gap-10 items-center flex-wrap">

  //     <a-svg src="logo"/>
  //     <a-svg src="grid"/>
  //     <div className="bg-primary-700 rounded-full w-7 h-7">
  //       <a-svg src="selected" className="stroke-white m-auto h-full" />
  //     </div>
  //     <a-svg src="users"/>
  //     <a-svg src="settings"/>
  //     <a-svg src="selected2"/>
  //     <a-svg src="info"/>
  //     <a-svg src="log-out"/>
  //     <a-svg src="plug"/>
  //     <a-svg src="search"/>
  //     <div className="bg-primary-700 rounded-full w-7 h-7">
  //       <a-svg src="send" className="stroke-primary-700 m-auto h-full" />
  //     </div>
  //     <div className="border p-auto border-primary-700 rounded-full w-7 h-7">
  //       <a-svg src="accept" className="m-auto h-full" />
  //     </div>
  //     <div className="border border-primary-700 rounded-full w-7 h-7">
  //       <a-svg src="attach" className="m-auto h-full" />
  //     </div>
  //     <div className="bg-primary-700 rounded-full w-7 h-7">
  //       <a-svg onClick={()=> alert('download')} src="download" className="m-auto h-full" />
  //     </div>
  //   </div>
  //   <h2 className="text-title2 mb-4">Inputs: </h2>
  //   <a-input />
  // </div>
);

export default PUi;
