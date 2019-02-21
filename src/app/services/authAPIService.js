export default function authenticator() {
    let fData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        mods: "no-cors"
    };
    const url = BASE_URL;
    console.log("BSAE URL ", url);
    return fetch(`${BASE_URL}/pad/states`, fData).then((response) => {
        return response.json().then((data) => {
            if (!response.ok && response.status !== 401) {
                throw Error(response.statusText);
            }
            return data;
        }).catch(function (err) {
            console.log("err_backend" + err);
        });
    })
}

export function replicate(body){
    let fData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        mods: "no-cors",
        body: JSON.stringify(body)
    };
    const url = BASE_URL;
    console.log("BSAE URL ", fData);
    return fetch(`${BASE_URL}/pad/replaceSch/insertPadReplaceSchedule`, fData).then((response) => {
        return response.json().then((data) => {
            if (!response.ok && response.status !== 401) {
                throw Error(response.statusText);
            }
            return JSON.parse(data);
        }).catch(function (err) {
            console.log("err_backend" + err);
        });
    })
}