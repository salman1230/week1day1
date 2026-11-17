function lunchBrowser(browserName) {
if (browserName === "Chrome") {
    console.log("Lunch Chrome Browser");    
}else{
    console.log("Launch some other browser");
}
}
lunchBrowser("Chrome");
lunchBrowser("Firefox");


function runTest(testType) {
    switch (testType) {
        case "Smoke":
            console.log("Run Smoke Test");
            break;  
        case "Regression":
            console.log("Run Regression Test");
            break;   
        case "Sanity":
            console.log("Run Sanity Test");     
            break;

        default:
            console.log("Run Functional Test");
    }
}   
runTest("Smoke");
runTest("Regression");
runTest("Sanity");
runTest("Functional");