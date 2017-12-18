export default function Fetch(type,url,data){
    let proxy = "https://bird.ioliu.cn/v1/?url=";
    if(type === 'get'){
        return fetch(proxy + url);
    }else if(type === 'post'){
        let datas = "";
        for(let i in data){
            if(data.hasOwnProperty(i)){
                datas += i + '=' + data[i] + "&"
            }
        }
        datas.splice(data.length - 1,1);
        return fetch(proxy + url,{
            method: 'post',
            headers: {
                "Content-typr": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: datas
        })
    }
}