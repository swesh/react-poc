export const authenticator = {
    isAuthenticated: false,

    authenticate: function (uname, pwd, loginSuccess) {
        var data = `username=${uname}&password=${pwd}`;

        let fData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            mods: "no-cors"
        }

        fetch('https://aw-lx0423:19601/pad/productStateInfo?stateCode=CA', fData).then((res)=>{
            res.json().then((data)=>{
                window.sessionStorage.setItem('tk', data.token);
                this.isAuthenticated = data.success;
                loginSuccess();
            })
        });
    },

    logout: function(){
        window.sessionStorage.clear();
        this.isAuthenticated = false;
    }
}