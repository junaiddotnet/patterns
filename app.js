var topLevel  = topLevel || {};
var secondLevel  = secondLevel || {};
topLevel.castle  = function(name)
{
    this.name =name;
    this.print=function()
    {
        console.log(this.name);
    }
}
topLevel.castle.prototype.printSecond=function()
{
    console.log('second..'+this.name);
}

var secondCastle   = (function(){
    function secondCastle(name)
    {
        this.name = name;
    }
    secondCastle.prototype.print=function()
    {
        console.log(this.name);
    };
    return secondCastle;
})();
secondLevel.castles = secondCastle;
var cc = new secondLevel.castles("ammar");
cc.print();
var a  = new topLevel.castle('junaid mahmood');
var b  = new topLevel.castle('mahmood ahmed');
a.print();
b.print();

a.printSecond();
b.printSecond();