class UserService {
    constructor(){
        this.currentLoggedUser = null;
        this.authenticationToken = null;
    }

    login(){
        this.currentLoggedUser = { id:1, name: 'alou'};
        this.authenticationToken = 'peditGateaouEhNoGirafas';
    };

    logout(){
        this.currentLoggedUser = null;
        this.authenticationToken = null;
    };

    register(){
        
    }
}
export default new UserService();