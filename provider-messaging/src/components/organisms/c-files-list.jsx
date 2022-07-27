import { useMemo, useState } from "preact/hooks";
import React from "react";
import { useStore } from "../../state";

const CFilesList = () => {
  const { discussions } = useStore();

  const [ filterType, setFilterType ] = useState('');
  const assets = useMemo(() => {
    const messages = discussions?.all.find(
      (disc) => disc.id == discussions?.selected
    ).messages;
    const files = [].concat.apply(
      [],
      messages.map((message) => message.assets)
    );

    let assetsTypes = {};
    files.forEach(file => {
      assetsTypes[file.type] ? 
      assetsTypes[file.type]++ : 
      assetsTypes[file.type] = 1
    })

    return {
      files: files,
      assetsTypes: assetsTypes
    }
  }, []);

  return (
    <div className="mx-6 mt-6">

      { filterType ?
      <>
      <div role="button" className="text-secondary-500 font-bold text-h3 mb-5" onClick={() => setFilterType('')}>&lt;  Back</div>
       {assets.files.filter( type => filterType!='all' ? type.type == filterType : true ).map((file) => {
        return <a target="_blank" href={file.src} className="flex py-1.5 px-2.5 mb-1 rounded items-center gap-x-4 hover:bg-secondary-50">
          
          <div 
            className="bg-white rounded text-primary-500 flex justify-center items-center w-8 h-8 font-medium text-h6">
            { file.type }
          </div>
          <p className="text-secondary-500 text-h3">{file.name}</p>

        </a>;
      })}
      </>
      :
        <>
      <h2 className="mb-6 font-bold text-h3 text-secondary-500">File type</h2>
      {
        Object.entries(assets.assetsTypes).map( ([key,value]) => {
          return <div key={key} role="button" onClick={() => setFilterType(key)} className="flex mb-2.5 justify-between items-center">
            <div className="flex items-center gap-x-4">
              <div 
                className="bg-white rounded text-primary-500 flex justify-center items-center w-12 h-12 font-medium text-h6">
                { key }
              </div>
              <div>
                <p className="font-medium text-h3 text-secondary-500">{key.toUpperCase()} Format</p>
                <p className="text-h6 text-secondary-300">{value} files</p>
              </div>
            </div>

            <div className="text-seconday-300"> &gt; </div>
          </div>
        })
      }
      <div role='button' onClick={() => setFilterType('all')} className="text-primary-500 text-h3 font-medium text-center mt-4">View all files</div>
      </>
  }


      
    </div>
  );
};

export default CFilesList;
