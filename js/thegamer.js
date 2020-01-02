console.log('hello world');


$('#add_post').click('on',function(e) {
    e.preventDefault();
    var title = $('#title').val();
    var textfield = $('#textfield').val();
    add(title, textfield);
    $('#title').val() = "";
    $('#textfield').val() = "";
});


function firebaseConfig() {
    // Your web app's Firebase configuration
    var CONFIG = require('./config.conf');
    var firebaseConfig = {
    apiKey: CONFIG.apiKey,
    authDomain: CONFIG.authDomain,
    databaseURL: CONFIG.databaseURL,
    projectId: CONFIG.projectId,
    storageBucket: CONFIG.storageBucket,
    messagingSenderId: CONFIG.messagingSenderId,
    appId: CONFIG.appId,
    measurementId: CONFIG.measurementId
    };
    return firebaseConfig;
}





function add(title, textfield) {
    var date = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    // Initialize Firebase
    var irebaseConfig = firebaseConfig();
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var database = firebase.database();

    var post = {
        title: title,
        textfield: textfield
    }

    database.ref('users/' + date).set(post);
};
