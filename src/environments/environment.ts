// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://18.230.23.24:3000/',

  //Configuração Firebase
  firebaseConfig: {
    apiKey: "AIzaSyAdv-5_4sRAnOo6oKhlv5Qln80TGDlBxXQ",
    authDomain: "acamp-brasil.firebaseapp.com",
    projectId: "acamp-brasil",
    storageBucket: "acamp-brasil.appspot.com",
    messagingSenderId: "9503616269",
    appId: "1:9503616269:web:22fe480f4089c8259c1444",
    measurementId: "G-YCL9EYK8GS"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
