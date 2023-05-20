import * as admin from 'firebase-admin';
// import * as serviceAccount from './serviceAccountKey.json';
import firebaseAccountCredentials from './serviceAccountKey.json';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

const databaseURL = 'https://graphql-2ab45.firebaseio.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL,
});

// const deleteAllUsers = (nextPageToken?: string): void => {
//   let uids: string[] = [];
//   admin
//     .auth()
//     .listUsers(100, nextPageToken)
//     .then((listUsersResult) => {
//       uids = uids.concat(listUsersResult.users.map((userRecord) => userRecord.uid));
//       console.log(uids);
//       if (listUsersResult.pageToken) {
//         deleteAllUsers(listUsersResult.pageToken);
//       }
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error);
//     })
//     .finally(() => {
//       admin.auth().deleteUsers(uids);
//     });
// };

// deleteAllUsers();

// Initialize the Firebase Admin SDK
admin.initializeApp();

// Retrieve a list of all users
const listAllUsers = async () => {
  let nextPageToken;
  do {
    const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
    listUsersResult.users.forEach(async (user) => {
      await admin.auth().deleteUser(user.uid);
    });
    nextPageToken = listUsersResult.pageToken;
  } while (nextPageToken);
};

// Call the function to delete all users
listAllUsers()
  .then(() => {
    console.log('All users deleted successfully.');
  })
  .catch((error) => {
    console.error('Error deleting users:', error);
  });
