// Event Loop
const UserOne = () => {
    console.log("Hello I am user one");
}

const UserTwo = () => {
    setTimeout(() => {
        console.log("I am inside user two");
    }, 2000);
    console.log("Hello I am user two");
}

const UserThree = () => {
    console.log("Hello I am user three");
}

UserOne();
UserTwo();
UserThree();




// Promisees (callbacks, promise constractor(then catch), async await)

// 3 stages of Promise---
// --Pending - resolve or rejected (It will be done or not done)
// --Fullfiled - Resolved the issues
// --Reject ()



const MakePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrOne = ["UserOne", "UserTwo", "UserThree"];
    if (arrOne.length > 5) {
      resolve("User Found");
    } else {
      reject("Not Found");
    }
  }, 2500);
});

// syntex: MakePromise.then().catch()
MakePromise.then((reslut) => {
    console.log(reslut);
}).catch((reslut) => {
  console.log(reslut);
})


//----------------------------------------------------------------------//


// Async and Await
const userOne = () => {
  return "I am User One"
};
const userTwo = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve("User Found")
    }, 1500);
  })
};
const userThree = () => {
  return "I am User Three"
};

const Waiter = async() => {
  let GuestOne = userOne();
  console.log(GuestOne);

  let GuestTwo = await userTwo();
  console.log(GuestTwo);

  let GuestThree = userThree();
  console.log(GuestThree);
}

Waiter();



