const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    // console.log(JSON.parse(xhr.response))
    let data = JSON.parse(xhr.response)
    
    for (let key in data ){
        console.log(key,"=>",data[key])
    }
    
    for (let i =0; i<data.length; i++){
        console.log("Name ==>",data[i].name.common)
        console.log("Region ==>",data[i].region)
        console.log("Sub-Region ==>",data[i].subregion)
        console.log("Population ==>",data[i].population)
    }
    
}
