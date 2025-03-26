/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as functions from "firebase-functions";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

/**
 *  Declaring fuctions
 * @name = @value
 *
 */

export const helloFirebase = onRequest((request, response) => {
	// Response - what the client gets

	//request - what the client asks for

	functions.logger.info("Hello logs!", { structuredData: true });
	response.send("Hello from Firebase!");
});

/**
 * Blocked by CORS
 * concurrency 1-100$
 * omit be here  but won't be evaluated or deployed
 * maximum instance - how many to run  on account
 */
// export const helloWorldV2 = onRequest(
// 	{
// 		cors: ["localhost:3000"],
// 		timeoutSeconds: 1200,
// 		concurrency: 200,
// 		invoker: "Public",
// 		memory: "1GiB",
// 		omit: true,
// 		maxInstances: 2,
// 	},
// 	(request, response) => {
// 		if (request.method === "POST") {
// 			functions.logger.info(request.body);
// 			functions.logger.info(request.query);
// 		}

// 		if (request.method === "GET") {
// 			functions.logger.info("Hello logs!", { structuredData: true });
// 			response.send("Hello from Firebase!");
// 		} else {
// 			functions.logger.error("Not Get Request");
// 		}
// 	},
// );

/***************************** */

/**
 * Firestore  Event triggers
 * onDocumentCreated-new addition of data
 * onDocumentUpdated-updating a document
 * onDocumentDeleted-deleted from firestor
 * onDocumentWritter- crud  perfomed on an application
 *
 *
 * **/

// Snapshot ,
// export const eventsCreated = document("eventss/{pid}").onCreate((snap,context)=>{});

// export const onNeweventssCreated = onDocumentCreated(
// 	"eventss/{pId}",
// 	(event) => {
// 		functions.logger.info(`new events event ${event.params}`);
// 		return firestore
// 			.collection("eventss")
// 			.doc(event.params.pId)
// 			.set({ createdAt: Timestamp.now }, { merge: true });
// 	},
// );

/***
 * Auth triggers
 *
 */

// export const sendWelcomeEmail = functions.auth.user().onCreate((user) => {
// 	functions.logger.info(`new user with email ${user.email}`);
// 	return Promise.resolve(user.uid);
// });
