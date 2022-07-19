import { h } from "preact";
import MWelcomeOption from "../molecules/m-welcome-option";

import { usersData } from '../../data';

const fields =
  [
    {
      link: '/select',
      logo: 'user',
      heading: 'Select a patient',
      copy: 'Praesent ut gravida elit. Cras vehicula felis diam, sed mollis nisl cursus vitae. '
    },
    {
      link: '/chat',
      logo: 'selected',
      heading: 'General chat',
      copy: 'Proin viverra aliquam justo, vel porta arcu efficitur non. Pellentesque maximus'
    },
    {
      link: '#profile',
      logo: 'settings',
      heading: 'Your profile',
      copy: 'Nullam eget bibendum sapien. Nullam sem massa, efficitur sed tortor eget'
    }
  ];

  const loggedUser = usersData[0];

const CWelcome = () => {
  return (
    <div className="bg-white py-20 max-w-4xl mx-auto">
      <h1 className="font-bold text-title2 text-secondary-500 mb-2">Welcome back { loggedUser.name }</h1>
      <p className="text-secondary-300 mb-16">Let's start with one option below</p>
      <div className="lg:flex">
        {
          fields.map( field => {
            return <MWelcomeOption field={field} />
          })
        }
        
      </div>
    </div>
  );
};

export default CWelcome;
