



function fibs(alpha){

    let fibarr =[];
    
    
     for (let i=0; i <= alpha ; i++){

        if (i == 0){
            fibarr.push(0);
        }else if (i == 1){
            fibarr.push(1);
        }else if (i == 2){
            fibarr.push(1);
        }else {
            let numone = fibarr[fibarr.length -1];
            let secnum = fibarr[fibarr.length -2];
            let outty = numone + secnum;
           
            fibarr.push(outty);

        }
     };
    
      console.log(fibarr);

    
}
 


let recArr = [];

function fibsRec(alpha,bravo){
  
   // let recArr = [];

    if (alpha == bravo){
       console.log('complete') 
    }else if(bravo == 0){
        recArr.push(0);
        fibsRec(alpha,bravo +1);
    }else if(bravo == 1){
        recArr.push(1);
        fibsRec(alpha,bravo +1);
        
    }else if (bravo == 2){
        recArr.push(1);
        fibsRec(alpha,bravo +1);
    }else{
        let firstnum = recArr[recArr.length -1];
        let numtwo = recArr[recArr.length -2];
        let totnum = firstnum + numtwo;

        recArr.push(totnum);
        fibsRec(alpha,bravo +1);

    }
};


fibsRec(10,0);

console.log(recArr);
