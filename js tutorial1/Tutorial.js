//Variavle
// 변수를 선언할때
var a;
// 변수에 값 할당
var a = 12;
/////////////////////////////////////////////////////////////////////////////////////////
////Funrion
var myAwesomeFunction = function(myargument)
{
    //does something
}
// 호출할때
myAwesomeFunction(somthing);
//..
square = function(a){
    return a*a;
}
applyOperation = function(f,a){
    return f(a);
}
applyOperation(square,10);
////////////////////////////////////////////////////////////////////////////////////////////////
// 반환값
myfunction =function(a){
    return a *3;
    explodeComputer(); // 실행 되지 않는다. 반환값 뒤에 있기 때문이다.
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//if 문
if(foo){
    return bar;
}
// if /else  
if(foo){
    function1();
}
else{
    function2();
}

//if/else 조건부 판단
foo? function1():function2();
// foo가 true이면 funtion1 아니면 funtion2

//조건에 따라 변수를 할당해야 할 때
var n = foo? 1:2;
// 언제 foo가 사실이면 1 그렇지않으면 2

//if elseif
if(foo)
{
    function1();
}
else if(bar){
    function2();
}
else{
    function3();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 배열
a=[123,456,789];
a[1]; //456
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//객채 선언
myProfile = {
    name: "blabla",
    email: "euna",
    'zip code' : 123,
    isInvited: true
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//값의 객체 세트로 구성된 다른 객체 또는 배열의 중첩
myProfile = {
    name: "blabla",
    email: "euna",
    'zip code' : 123,
    isInvited: true,

    friend:[
        {
            name: "ddd",
            email: "ddd"

        },
        {
            name: "sss",
            email:"sss"
        }
    ]
}

//객체의 속성에 엑세스 및 배열 구성원의 엑세스
myProfile.name; // blabla
myProfile.friend[1].name // sss
/////////////////////////////////////////////////////////////////////////////////////////////////
//if Cocos creator 
var MyComponet = cc.Class({
    extends: cc.Component
});
//{extends: cc.Component} 함수매개 변수로 사용되는 객체

//여러 함수 선언 대체
applyOperation = function(f,a){
    return f(a);
}
applyOperation(
    function(a){
        return a*a;
    },
    10
) // 100
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Chain-type grammar

var myArray = [123,456];
myArray.push(789) //123,456,789
var myString = "abcdef"; 
myString.replace("a","z"); // zbcdef

var n = 5;
n.double().square();//100

//this
//객체의 정보를 볼수 있음
myfunction = function(a,b){
    console.log(this)
}
//변수 할당
myfunction = function(a,b){
    var myObject = this;
    //do somthing
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Operetor

a ="12";
a == 12; //true
a === 12; //false

a = 12;
a!==11; //true

a = true;
!a; //false

a=12;
!a; //false
!!a; //true

//  또는
a=0;
!a; //true
!!a; // false

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// code style

var comp = cc.Class({
    extends: cc.Componet,

    properies:{
        target: {
            default: null,
            type: cc.Entity
        }
    },

    onStart: function(){
        this.target = cc.Entity.find('/main Player/Bip/Head');
    },

    update: function(){
        this.transform.worldPosition = this.target.transform.worldPosition;

    }
});


