const BACKENDURL = "http://localhost:8426/api/vcn";

//In getting the conversation
export const getData = async() => {
    let data;

    try {
        //await fetch(`${BACKENDURL}/conversations`).then((result) => {data = result.json()});

        data = await fetch('http://localhost:8426/api/vcn/conversations')
        
        /* data = await data.json(); */
        
        return data;
    } catch (err) {
        console.log(err);
        
        return {};
    }
}