export class AuthService{
    isLoggedIn = false;
    
    isAuth(){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {  //like request to backend
                resolve(this.isLoggedIn);
            }, 1000)
        })
    }
    logIn(){
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }
}