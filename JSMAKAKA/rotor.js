class Rotor {
    constructor(){
        this.rotor = 0
        this.scl = 1
    }

    animate(an_block){
        this.rotor += 180
        
        if(this.scl == 1)
            this.scl = 1.5
        else
            this.scl = 1
    
        an_block.style.transform = `rotate(${this.rotor}deg)`
        an_block.style.scale = this.scl
        an_block.style.transition = "all .2s ease-in"
    }
}