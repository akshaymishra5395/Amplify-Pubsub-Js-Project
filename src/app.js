import Amplify,{ Auth ,PubSub} from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'rr-rrrrrr-1',
  aws_pubsub_endpoint: 'wss://xxxxxxxxx-xx.xxx.rr-rrrrrr-1.amazonaws.com/mqtt',
}));

Auth.currentCredentials().then((info) => {
    const cognitoIdentityId = info.identityId;
    console.log("IDENTITYID: "+ cognitoIdentityId)
    //use the generated idenetityId to register to the iot policy to get subscription messages

});

var subscription;
var TopicName;

function Subscribe(selectedEvent) {
  TopicName = "THINGNAME/1"
  console.log("Connecting to "+TopicName)
  subscription = PubSub.subscribe(TopicName).subscribe({
    next: data => {
        console.log(JSON.stringify(data.value, null, 2));
        alert("check the console data received on subscription")
        //call your own function here
    },
    error: error => {console.log((JSON.stringify(error, null, 2)));},
    close: () => {console.log("Done");},
  });
};

function disconnect() {
  console.log("DisConnecting")
  subscription.unsubscribe();
};


window.SubcribeToEvent = Subscribe    //to use outside this file 

Subscribe()   //just for checking calling Subscribe here only 


/*
Can receive message sample on Test
THINGNAME/1
{
    "message":"Hello world"
}
*/

