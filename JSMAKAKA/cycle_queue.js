class CycleQueue{
    constructor(array){
        this.array = Array.from(array)
        this.now = 0
    }

    step(){
        this.now++
        this.now %= this.array.length 
    }

    get_next(){
        let return_value = this.array[this.now]
        this.step()
        return return_value
    }
}