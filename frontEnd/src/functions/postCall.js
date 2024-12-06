async function  postCall(url,data) {
    options.body = JSON.stringify(data); 
    let result = await fetch(url,options);
    result = await result.json(); 
    return result;
}

let options = {
    method :'POST',
    credentials: 'include',
    headers : {
        'Content-Type': 'application/json'
    }
}

export default postCall;