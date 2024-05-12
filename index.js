// var codes =0

// document.addEventListener('contextmenu', function(event) {
//     // Prevent the default right-click behavior
//     event.preventDefault();
    
    
//     codes++
//     console.log("right")
// });

// document.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {


//         const processes = window.navigator;
    

//         // const userAgent = navigator.userAgent;
//         console.log(userAgent);
 
//         codes++
//         console.log('Enter')
//     }
// });

// document.addEventListener('keydown', function(event) {
//     if (event.keyCode === 123){
//         event.preventDefault();
//     }
//     console.log('Key Pressed:', event.key);
//     console.log('Key Code:', event.keyCode);
// });

// // navigator.clipboard.readText()
// //     .then(clipboardData => {
// //         console.log('Clipboard Data:', clipboardData);
// //         // Check if the clipboard data contains image information
// //     })
// //     .catch(err => {
// //         console.error('Failed to read clipboard data:', err);
// //     });
//     document.addEventListener('PrintScreen', event => {
//         const clipboardData = event.clipboardData || window.clipboardData;
//         console.log('Clipboard Data:', clipboardData.getData('Text'));
//         // Check if the clipboard data contains image information
//     });
    
//     let isOpen = softwareWindow && !softwareWindow.closed;
//     if (isOpen) {
//         console.log('The software is active.');
//     } else {
//         console.log('The software is not active.');
//     }
    
