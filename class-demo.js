var Demo = /** @class */ (function () {
    function Demo() {
        this.val1 = 45;
        this.val2 = 'Sample';
    }
    Demo.prototype.display = function () {
        console.log("value 1: " + this.val1 + "\nvalue 2: " + this.val2);
    };
    return Demo;
}());
var demo = new Demo();
demo.display();
