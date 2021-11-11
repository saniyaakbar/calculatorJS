var arr = [ "0", "1", "2", "3", "4", "5", "6", "7","8", "9", ".", "C"]
// var arr2 = ["+", "-", "x", "/", "="]

var top = document.querySelector("#top")

var temp = ``;
var temp2 = ``;
var temp3 = ``;
var temp4 = ``;
var num = 0;
var sum = 0;
var sub = 0;
var currentNum = 0;


    
// arr2.forEach(function(val, index){
//     // console.log(val)
//     temp2 += `
//     <button id="${index}">${val}</button>
//     `
//     document.querySelector("#buttons").innerHTML = temp2;
//        console.log(val)

// })
arr.forEach(function(val, index){
    // console.log(val)
    temp += `
    <div class="num" id = "${index}">${val}</div>
    `
    document.querySelector("#show").innerHTML = temp;
       

})

document.querySelector("#show").addEventListener("click", function(dets){
    temp3 += arr[Number((dets.target.id))];
    top.textContent = temp3;
    // console.log(temp3)
    document.querySelector("#top").innerHTML = temp3;
})


document.querySelector("#plus").addEventListener("click", function(){
    temp3 = ``
    document.querySelector("#top").innerHTML = temp3
    currentNum = Number(top.textContent);
    sum = sum + currentNum;
    currentNum = sum;
    document.querySelector("#top").innerHTML = sum;
    document.querySelector("#plus").textContent = "="
    console.log(Number(currentNum))
    
})

document.querySelector("#minus").addEventListener("click", function(){
    

    temp3 = ``
    document.querySelector("#top").innerHTML = temp3
    currentNum = Number(top.textContent);
    sub = sub - currentNum ;
    document.querySelector("#top").innerHTML = sub;
    console.log(top.textContent)
})


// document.querySelector("#buttons").addEventListener("click", function(){
//     alert("hii")
//     num = top.textContent;
//     console.log(top.textContent)
// })




