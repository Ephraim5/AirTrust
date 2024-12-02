var li = document.querySelectorAll("li");

li.forEach((ele)=>{
    ele.onclick = ()=>{
        li.forEach(item => { 
            if(item.classList.contains("active")){
                item.classList.remove("active")
            }
        });
        ele.classList.toggle("active")
    }
})