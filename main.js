
const inp = document.getElementById('in');
const container = document.getElementById('container');
const sub = document.getElementById('sub');

sub.addEventListener('click', function(){
    // alert(e.key + ' ' + typeof(e.key));
    if(inp.value != ""){
        let message = inp.value;
        let div = document.createElement("span");
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        let str = '<div style="width: 44rem" class="border-slate-200 mt-6 text-slate-100 bg-slate-500 p-3 hover:scale-[1.01] cursor-pointer shadow-md hover:shadow-xl rounded-lg flex justify-between items-center"><span>'+message+'</span><span class="w-20"></span><strong>'+time+'</strong></div>';
        div.innerHTML = str;
        container.innerHTML = div.innerHTML + container.innerHTML; 
        // container.append(div);
        inp.value = "";
    }
});

inp.addEventListener('keypress', function(e){
    // alert(e.key + ' ' + typeof(e.key));
    if(e.key == 'Enter'){
        if(inp.value != ""){
            let message = inp.value;
            let div = document.createElement("span");
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes();
            let str = '<div style="width: 44rem" class="border-slate-200 mt-6 text-slate-100 bg-slate-500 p-3 hover:scale-[1.01] cursor-pointer shadow-md hover:shadow-xl rounded-lg flex justify-between items-center"><span>'+message+'</span><span class="w-20"></span><strong>'+time+'</strong></div>';
            div.innerHTML = str;
            container.innerHTML = div.innerHTML + container.innerHTML; 
            // container.append(div);
            inp.value = "";
        }
    }
});









////// burger
const menuIcon = document.getElementsByClassName('menu-icon')[0];
const mi1 = document.getElementsByClassName('mi1')[0];
const mi2 = document.getElementsByClassName('mi2')[0];
const mi3 = document.getElementsByClassName('mi3')[0];

function clickOne(){
    mi1.classList.remove('notActive1');
    mi1.classList.add('active1');
    mi2.classList.remove('notActive2');
    mi2.classList.add('active2');
    mi3.classList.remove('notActive3');
    mi3.classList.add('active3');
}
function clickTwo(){
    mi1.classList.remove('active1');
    mi1.classList.add('notActive1');
    mi2.classList.remove('active2');
    mi2.classList.add('notActive2');
    mi3.classList.remove('active3');
    mi3.classList.add('notActive3');
}

menuIcon.addEventListener('click', () => {
    if(!mi1.classList.contains('active1')){
        clickOne();
        setTimeout(() => {
            clickTwo();
        }, 3000);
    }
    else{
        clickTwo();
        container.innerHTML = null;
    }
})