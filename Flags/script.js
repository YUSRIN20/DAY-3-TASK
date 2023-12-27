const url = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
 
xhr.open("GET",url);
xhr.send();

xhr.onload = () => {
    // console.log(JSON.parse(xhr.response))
    let data = JSON.parse(xhr.response)
    
    // for (let key in data ){
    //     console.log(key,"=>",data[key])
    // }
    
    // for (let val of Object.keys(data)){
    //     console.log(val,"=>",data[val])
    // }

    for (let i =0; i<data.length; i++){
        console.log("Flags=>",data[i].flags.png)
    }
  
}

