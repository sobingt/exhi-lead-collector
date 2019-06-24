// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  setupMode: true, // todo: disabled setup mode once created first admin user
  firebase: {
    apiKey: 'AIzaSyDdku-A01Vkk4GiihDcApft59xxhPQ9VNo',
    authDomain: 'https://exhi-collector.firebaseapp.com',
    databaseURL: 'https://exhi-collector.firebaseio.com',
    projectId: 'exhi-collector'
  },
  sheet: {
    baseUrl: 'https://sheets.googleapis.com/v4/spreadsheets',
    id: '1Nmd1YvjqloVzlJT2HM6yw9QS1OqW5pODrRqYy686AZ4',
    apiKey: 'AIzaSyDdku-A01Vkk4GiihDcApft59xxhPQ9VNo'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
