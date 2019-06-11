$(function () {
    let lis = $('.tab > li');
    let contentBox =$('.content');
    let todolist = [
        {id:1,content:'一套企业网站',status:true,ctime:'2019年5月6号'},
        {id:2,content:'一套移动端商城',status:true,ctime:'2019年6月10号'},
        {id:3,content:'jQuery - todolist',status:false,ctime:'2019年6月11号'},
        {id:4,content:'nodejs运行的环境',status:false,ctime:'2019年6月12号'},
        {id:5,content:'wamp集成开发环境',status:false,ctime:'2019年6月13号'},
        {id:6,content:'vue前端mvvm的框架',status:false,ctime:'2019年6月14号'}
    ];


    let str = localStorage.getItem("todolist");
    if(!str){
        localStorage.setItem('todolist',JSON.stringify(todolist));
    }
    todolist = JSON.parse(str);

    lis.on('click',function () {
        let _this = $(this);
        let type = _this.attr('type');
        _this.addClass('hot').siblings('li').removeClass('hot');

        let data = filterDate(type);
        // console.log(1);
        render(data);
    });

    //lis.trigger('click')
    lis.triggerHandler('click');

    /////////////////////////////////////////////
    contentBox.on('click','del',function () {
       let _this = $(this);

       let li = _this.closest('li').attr('id');
    });
    contentBox.on('click','input',function () {
       console.log(2);
    });

////////////////////////////////filterData/////////////////////////////
/*
*  type string
* 返回值 数组
* */

    function filterDate(type) {
        let arr =[];
        switch (type) {
            case  'all':
                arr=todolist;
                break;
            case  'done':
                arr=todolist.filter(ele=>ele.status);
                break;
            case  'doing':
                arr=todolist.filter(ele=>!ele.status);
                break;
        }
        return arr;
    }

    ////////////////////render//////////////////////
    function render(arr) {
        let html = '';
        arr.forEach(ele=>{
            if(ele.status){
                html+=`
                <li>
                <input type="checkbox" checked>
             <p>${ele.content}</p>
             <del>X</del>
             <time>${ele.ctime}</time></li>`
            }else{
                html+=`
                <li>
                <input type="checkbox"> 
            <p>${ele.content}</p>
             <del>X</del>
             <time>${ele.ctime}</time></li>`
            }
        })
    }
});