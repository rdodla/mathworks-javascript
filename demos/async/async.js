let baseUrl = 'http://localhost:8000/api/zippay/v1/users/';

let resultsPromise = fetch(baseUrl);

resultsPromise.then(function (results) {
  console.log('Finished the request, got results!');
});

// Promise API
// promise.then(successCallback, failureCallback)
//              (resolved)       (rejected)
//
// promise.then(successCallback)
// promise.catch(errorCallback) / promise.then(null, errorCallback)
//
// promise.then(callbackA)
// promise.then(callbackB)
// promise.then(callbackC)
// promise.then(callbackD)
// promise.catch(callbackError)
//
// let p2 = promise.then() (or promise.catch())
// p2.then() / p2.catch()
//
//         fails->fall-thru----->fall-thru------>fall-thru-> gets caught
// fetch().then(callbackA).then(callbackB).then(callbackC).catch(callbackError)

// fetch().then(callbackA)
//        .then(callbackB)
//        .then(callbackC)
//        .catch(callbackError);

//
// let p1 = fetch(); // takes 10 seconds
// let p2 = p1.then(callbackA); // fails
// let p3 = p2.then(callbackB);
// let p4 = p3.then(callbackC);
// p4.catch(callbackError);

// promise.finally(() => {})

// Do other stuff until the fetch comes back
console.log('After calling fetch()');

try {
  // 1
  // 2
  // 3
} catch (err) {
  // First thing that went wrong in 1, 2, or 3.
}

// 4
