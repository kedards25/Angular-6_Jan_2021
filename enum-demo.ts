enum Days{
    Sun=0,
    Mon,
    Tue,
    Sat
}

class EnumDemo
{
    dispEnum():void{
        var x:number=Days.Mon;
        var y:number=Days.Sat;
        console.log("Monday is "+x+"st day of week and Saturday is "+y+"rd");
    }
}

let enumDemo=new EnumDemo();
enumDemo.dispEnum();