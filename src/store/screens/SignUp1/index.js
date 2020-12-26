import { observable, action, makeObservable } from 'mobx';

class SignUp1Store {
    constructor() {
        makeObservable(
            this,
            {
                name: observable,
                setName: action
            }
        );
    }


    name = '';
    setName = d => this.name = d;
}


const signUp1Store = new SignUp1Store();

export { signUp1Store };
