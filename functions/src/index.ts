/* eslint-disable comma-spacing */
/* eslint-disable key-spacing */
/* eslint-disable brace-style */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// eslint-disable-next-line require-jsdoc
async function grandCeoRole(email:string) :Promise<void> {
  // eslint-disable-next-line padded-blocks
  const user = await admin.auth().getUserByEmail(email);
  if (user.customClaims && (user.customClaims as any).ceo ===true)
  {
    return;
  }
  return admin.auth().setCustomUserClaims(user.uid,{
    ceo:true,
  });
}
