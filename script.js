for(i=1; i<=100; i++){
    if(i%3== 0 && i%5==0){
        console.log(i + " is fizz buzz number");
        show.innerHTML += `<p style="color: blue;" title ='ise nla'>${i} is fizz and buzz number</p>`
    }else if(i%3 == 0){
        console.log(i + " is an fizz number")
        show.innerHTML += `<p style="color: black;" title ='ise nla'>${i} is an fizz number</p>`
    }else if(i%5 == 0){
        console.log(i + " is an buzz number");
        show.innerHTML += `<p style="color: green;" title ='ise nla'>${i} is an buzz number</p>` 
    }      
} 
for(i=1; i<=100; i++){
    if(i%2== 0 && i%3== 0){
        console.log(i + " is even and fizz number");
        show2.innerHTML += `<p style="color: blue;" title ='ise nla'>${i} is even and fizz number</p>`
    }else if(i%2 == 0){
        console.log(i + " is an even number")
        show2.innerHTML += `<p style="color: black;" title ='ise nla'>${i} is an even number</p>`
    }else if(i%3 == 0){
        console.log(i + " is an fizz number");
        show2.innerHTML += `<p style="color: green;" title ='ise nla'>${i} is an fizz number</p>` 
    }      
} 
for(i=1; i<=100; i++){
    if(i%2== 0 && i%5== 0){
        console.log(i + " is even and buzz number");
        show3.innerHTML += `<p style="color: blue;" title ='ise nla'>${i} is even and buzz number</p>`
    }else if(i%2 == 0){
        console.log(i + " is an even number")
        show3.innerHTML += `<p style="color: black;" title ='ise nla'>${i} is an even number</p>`
    }else if(i%5 == 0){
        console.log(i + " is an buzz number");
        show3.innerHTML += `<p style="color: green;" title ='ise nla'>${i} is an buzz number</p>` 
    }      
} 
for(i=1; i<=100; i++){
    if(i%2== 0 && i%3== 0 && i%5== 0){
        console.log(i + " is even, fizz and buzz number");
        showAll.innerHTML += `<p style="color: red;" title ='ise nla'>${i} is even. fizz and buzz number</p>`
    }else if(i%2== 0 && 1%3==0){
        console.log(i + " is even and fizz number")
        show3.innerHTML += `<p style="color: blue;" title ='ise nla'>${i} is  even and fizz number</p>`
    }else if(i%2== 0 && i%5){
        console.log(i + " is even and buzz number");
        showAll.innerHTML += `<p style="color: black;" title ='ise nla'>${i} is even and buzz number</p>` 
    }
    else if(i%3== 0 && i%5== 0){
        console.log(i + "is fizz and buzz number");
        showAll.innerHTML +=  `<p style="color: green;" title ='ise nla'>${i} is fizz and buzz number</p>`
    }
} 
for( i=99; i>=1; i--){
    if (i>=1){
        console.log(i);
        
        bottle.innerHTML +=     `<p>${i} bottle of beer on the wall, ${i} bottles of bear. <br> Take one down and pass it arround, ${i-1} bottle of bear on the wall  </p>`; 
    }else if(i <= 1){
        bottle.innerHTML +=  `<p>${i} bottle of beer on the wall, ${i} bottles of bear. <br> Take one down and pass it arround, no more bottle of bear on the wall  </p>`;
    }else{
        `<p>No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.</p>`
    } 
}          