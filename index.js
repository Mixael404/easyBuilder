console.log("Hello");
const flag = 1;

const myPromise = new Promise((resolve, reject) => {
    if (flag === 1){
        setTimeout(() => resolve("work"), 1000);
    } else{
        setTimeout(() => reject("not work 2"), 1000);
    }
});

// console.log(global);

myPromise
    .then((value) => console.log(value))
    .then(() => {
        const newValue = flag + 1;
        console.log(newValue);
    }, 
    (value) => {
        console.log(value);
    })
