import { observable, action, makeObservable } from 'mobx';
import { signUp1Store } from '../SignUp1';

//bir action, bir observable'ı set ederse, o observable'ın kullanıldığı sayfalar update olur
//uygulama kapanmadığı sürece store'daki hiç biri veri kendi kendine silinmez sıfırlanmaz

class LoginStore {
    constructor() { //yapılandırıcı fonksiyon (class için her nesne oluşturulduğunda o nesne için çalışan fonksiyon)
        //this.classSet();

        makeObservable(
            this,
            {
                username: observable,
                setUsername: action,

                password: observable,
                setPassword: action,

                //classSet: action
            }
        );
    }
    // classSet = () => { //eğer class daki state lerin sıfırlanması gibi bir ihtiyaç varsa, bu şekilde yapılabilir
    //     this.username = '';
    //     this.password = '';
    // }
    // setUsername = d => {
    //     this.username = d; //setState
    //     signUp1Store.setName(d);
    // }
    // setPassword = d => this.password = d;


    username = ''; //state
    setUsername = d => {
        this.username = d; //setState

        signUp1Store.setName(d);
    }
    password = '';
    setPassword = d => this.password = d;
}


const loginStore = new LoginStore();

export { loginStore };
