let id = 0

export default class IncrementId {

    constructor() {
        this.id = id++
    }
    get() {
        return this.id
    }
}