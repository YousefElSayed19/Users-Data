let left=document.querySelector(".left");
let right=document.querySelector(".right");



// https://jsonplaceholder.typicode.com/users


// get user from array

// let names=["Leanne Graham","Leanne Graham","Clementine Bauch","Patricia Lebsack","Chelsey Dietrich","Mrs. Dennis Schulist","Kurtis Weissnat","Nicholas Runolfsdottir V","Glenna Reichert","Clementina DuBuque"];
// let emails=["Sincere@april.biz","Shanna@melissa.tv","Nathan@yesenia.net","Julianne.OConner@kory.org","Lucio_Hettinger@annie.ca","Karley_Dach@jasper.info","Telly.Hoeger@billy.biz","Sherwood@rosamond.me","Chaim_McDermott@dana.io","Rey.Padberg@karina.biz"];
// for(let i=0;i<names.length;i++){
//     let dad=document.createElement("div");
//     dad.classList.add("dad");
//     let div =document.createElement("div");
//     let h1=document.createElement("h1");
//     h1.textContent=names[i];
//     let p =document.createElement("p");
//     p.textContent=emails[i];
//     div.appendChild(h1)
//     div.appendChild(p)
//     dad.appendChild(div)
//     left.appendChild(dad);
// }
// active()



function active(){
    document.querySelector(".dad").setAttribute("data","active")
    let dad=document.querySelectorAll(".dad");
    dad.forEach(function(el,index){
        el.addEventListener("click",function(){
            dad.forEach(l=>{
                l.removeAttribute("data")
            })
            if (el.hasAttribute("data")){
                el.removeAttribute("data");
            }else{
                el.setAttribute("data","active")
                getDate(index+1);
            }
        })
    })
}





// get user from api (XMLHttpRequest)

// function getUsers(){
//     let rq=new XMLHttpRequest();    
//     rq.open("GET","https://jsonplaceholder.typicode.com/users");
//     rq.send();
//     rq.onload=function(){
//         let names=JSON.parse(rq.responseText);    
//         for(let name of names){
//             let dad=document.createElement("div");    
//             dad.classList.add("dad");
//             let div =document.createElement("div");
//             let h1=document.createElement("h1");
//             h1.textContent=name.name;
//             let p =document.createElement("p");
//             p.textContent=name.email;
//             div.appendChild(h1)
//             div.appendChild(p)
//             dad.appendChild(div)
//             left.appendChild(dad);
//         }
//         active()
//     }
// }
// getUsers();
// getDate(1)





// function getDate(number){
//     right.innerHTML='';
//     let fullReq=new XMLHttpRequest();
//     fullReq.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
//     fullReq.send(); 
//     fullReq.onload=function(){
//     let posts =JSON.parse(fullReq.responseText)
//         for(let post of posts){
//             let div=document.createElement("div");
//             let h1Title =document.createElement("h1");
//             h1Title.textContent=post.title;

//             let hr=document.createElement("hr");

//             let h1Body =document.createElement("h1");
//             h1Body.textContent=post.body;

//             div.appendChild(h1Title);
//             div.appendChild(hr);
//             div.appendChild(h1Body);
//             right.appendChild(div);
//         }
//     }
// }





// get user from api (fetch)

// function getUsers(){
//     return new Promise((resolve,reject)=>{
//         let rq = fetch("https://jsonplaceholder.typicode.com/users").then(req=>{
//             if (req.ok){
//                 return req.json();
//             }
//             else{
//                 reject("error");
//             }
//         }).then(names=>{
//             for(let name of names){
//                 let dad=document.createElement("div");
//                 dad.classList.add("dad");
//                 let div =document.createElement("div");
//                 let h1=document.createElement("h1");
//                 h1.textContent=name.name;
//                 let p =document.createElement("p");
//                 p.textContent=name.email;
//                 div.appendChild(h1)
//                 div.appendChild(p)
//                 dad.appendChild(div)
//                 left.appendChild(dad);
//             }
//             active()
//             resolve()
//         }).catch(error=>{
//             console.log("eror ?")
//         })
//     })
// }

// function getDate(number){
    //     right.innerHTML='';
    //     let fullReq=fetch(`https://jsonplaceholder.typicode.com/posts?userId=${number}`).then(dat=>{
        //         if (dat.ok){
            //             return dat.json();
            //         }
            //     }).then(data=>{
                //         for(let post of data){
                    //             let div=document.createElement("div");
                    //             let h1Title =document.createElement("h1");
                    //             h1Title.textContent=post.title;
                    
                    //             let hr=document.createElement("hr");
                    
                    //             let h1Body =document.createElement("h1");
                    //             h1Body.textContent=post.body;
                    
                    //             div.appendChild(h1Title);
//             div.appendChild(hr);
//             div.appendChild(h1Body);
//             right.appendChild(div);
//         }
//     })
// }
// getUsers().then(()=>{
//     getDate(1)
// }).catch(eror=>{
//     console.log(eror);
// })



// get user from api (Axios)


function getUsers(){
    return new Promise((resolve,reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(users=>{
            for(let name of users.data){
                let dad=document.createElement("div");
                dad.classList.add("dad");
                let div =document.createElement("div");
                let h1=document.createElement("h1");
                h1.textContent=name.name;
                let p =document.createElement("p");
                p.textContent=name.email;
                div.appendChild(h1)
                div.appendChild(p)
                dad.appendChild(div)
                left.appendChild(dad);
            }
            active()
            resolve()
        })
    })
}

function getDate(number){
    right.innerHTML='';
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    .then(posts=>{
        for(let post of posts.data){    
        let div=document.createElement("div");
        let h1Title =document.createElement("h1");
        h1Title.textContent=post.title;

        let hr=document.createElement("hr");

        let h1Body =document.createElement("h1");
        h1Body.textContent=post.body;

        div.appendChild(h1Title);
        div.appendChild(hr);
        div.appendChild(h1Body);
        right.appendChild(div);
        }
    })
}

getUsers().then(()=>{
    getDate(1);
}).catch(eror=>{
    console.log(eror);
})
setTimeout(()=>{
    if (window.screenY  >=500){
        console.log("hello")
    }
},2000)
