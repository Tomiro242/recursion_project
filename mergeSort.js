

const currentNum = [26,1,4];

function mergeSort(arry){
    let totAr = arry.length; 

    if (totAr <2){
        return arry
    }else {
    let mid   = totAr /2; 
    let leftArr = arry.slice(0,mid);
    let rightArr =arry.slice(mid,totAr);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
    
    }


};


function merge(leftArr,rightArr){
    const sortedArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]

}

console.log(mergeSort(currentNum));