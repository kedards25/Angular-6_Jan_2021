class Demo
{
    val1:number;
    val2:string;

    constructor()
    {
        this.val1=45;
        this.val2='Sample';
    }

    display():void{
        console.log("value 1: "+this.val1+"\nvalue 2: "+this.val2)
    }
}

var demo=new Demo();
demo.display();