var using = require('jasmine-data-provider');
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'//browser name
    },
    frameworks: ['jasmine'],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    suites: {
        jasmine: 'spec/jasmine/*.js',
        pageObject: 'spec/pageObjectTest/*.js',
        homeWork: 'spec/pageObjectTest/flowTest.js',
        demo:'spec/solution/task1Test.js',
        tip:'spec/solution/task2tip.js',
        tip2:'spec/solution/task2tip.1.js',
        task1:'spec/finalTasks/ex1.js',
        task2:'spec/finalTasks/ex2.js',

        
      },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    onPrepare:function(){
        global.pageObjectDir = __dirname+"/pageObject";
        global.using = using;
        
        browser.ignoreSynchronization = true;//non-angular page
    },
};