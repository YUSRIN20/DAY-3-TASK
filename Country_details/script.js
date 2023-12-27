const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {

    let data = JSON.parse(xhr.response)
    
    
    for (let i =0; i<data.length; i++){
        console.log("Name ==>",data[i].name.common)
        console.log("Region ==>",data[i].region)
        console.log("Sub-Region ==>",data[i].subregion)
        console.log("Population ==>",data[i].population)
    }
    
}
