const name = "Luna the Owl";
const workDone= 70;

const keepWorking = workDone<=70;
const workAdvice = keepWorking
                    ?"you should create a study plan to cover the last chapters effectively"
                    :"Maybe you should also schedule some fun breaks to keep my mind fresh."
                    ;
const Message = 'Hello '+name+',It is the week of finals.You need to prepare adequately for your exam, this is what you should do '+workAdvice;
console.log(Message);