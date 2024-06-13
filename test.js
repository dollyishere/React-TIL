// 자바스크립트 테스트용 폴더
// 확장 프로그램에서 Code Runner 설치한 후 Ctrl + Alt + N을 누르거나
// 또는 마우스 오른쪽으로 Run Code 눌러서 (선택한) 코드 실행하거나
// function increase(number, callback) {
//   setTimeout(() => {
//     const result = number + 10;
//     if (callback) {
//       callback(result);
//     }
//   }, 1000)
// }

// increase(0, result => {
//   console.log(result);
// })

// function printMe() {
//   console.log('Hello World!');
// }
// setTimeout(printMe, 3000);
// console.log('대기 중...')

function increase1(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000)
  })
  return promise;
}

// increase1(0)
//   .then(number => {
//     // Promise에서 resolve된 값은 .then을 통해 받아올 수 있음
//     console.log(number);
//     return increase1(number); // Promise를 리턴하면
//   })
//   .then(number => { 
//     // 또 .then으로 처리 가능
//     console.log(number);
//     return increase1(number);
//   })
//   .then(number => { 
//     console.log(number);
//     return increase1(number);
//   })
//   .then(number => { 
//     console.log(number);
//     return increase1(number);
//   })
//   .then(number => { 
//     console.log(number);
//     return increase1(number);
//   })
//   .catch(e => {
//     // 도중에 에러발생한다면, .catch를 통해 알 수 있음
//     console.log(e);
//   });


async function runTasks() {
  try { // try/catch 구문을 사용하여 에러를 처리
    let result = await increase1(0);
    console.log(result);
    result = await increase1(result);
    console.log(result);
    result = await increase1(result);
    console.log(result);
    result = await increase1(result);
    console.log(result);
    result = await increase1(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}