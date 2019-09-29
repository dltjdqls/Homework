import { observable, action } from 'mobx';

class States {
    @observable extended: boolean = false
    @observable adding: boolean = false

    @action
    changeExtended = () => {
        console.log("states.changeextended")
        this.extended = !(this.extended)
    }

    @action
    changeAdding = () => {
        console.log("states.changeadding")
        this.adding = !(this.adding)
    }
}

export default States;