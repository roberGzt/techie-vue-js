export let unaPromise = () =>
  new Promise(resolve => {
    setTimeout(function() {
      resolve("Promise!");
    }, 2500);
  });
