let courses:string[]=[]

function AddItem():void{
    let item:any=document.querySelector("#course");
    if(courses.filter(e=>e==item.value).length>0)
    {
        alert("item already exist !")
    }
    else{
    courses.push(item.value)
    BindItems(courses)
    }
}

function BindItems(items:string[]):void{

    let list=`<ul>`
    items.forEach((e,i)=>{
        list+=`<li>${e} <span class="close" onclick="removeItem(${i})">&times;</span></li>`
    })
    list+=`</ul>`
    document.querySelector("#result").innerHTML=list
}

function removeItem(i:number):void{
    courses.splice(i,1);
    BindItems(courses)
}



function FilterData(txt:string){

    let filtercourses=courses.filter((item:string)=>{
        if(item.startsWith(txt))
        return item;
    })
    if(filtercourses.length>0){
        BindItems(filtercourses)
    }
    else{
        BindItems(courses)
    }
}

document.querySelector("#course").addEventListener("keyup",function()
{
FilterData(this.value)
})


let btn=document.querySelector("#btn");
btn.addEventListener("click",AddItem);