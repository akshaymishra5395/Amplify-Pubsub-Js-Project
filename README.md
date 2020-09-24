# AmplifyPubsubJsProject
This project is a sample that you can use to add AmplifyPubsub Js Implementation in project 

STEPS :
1. git clone https://github.com/akshaymishra5395/AmplifyPubsubJsProject.git

2. cd AmplifyPubsubJsProject

3. requirement :Node.js v10.x or later, npm v5.x or later , git v2.14.1 or later

4. sudo npm install -g @aws-amplify/cli

5. npm install
	 (uses available package.json see files after clone)

// Can we avoid avoid 6,7 step
6. aws configure
	(configure with existing Iam User or New IAM User,  having Administrator policy )
7. Pull AWS AmplifyBackend  to this project by AppId  (if created already).
	(Get appId from AWS Amplify >all apps > ProjectName  > backend environment > Edit backend)
	7.1 amplify pull --appId XXXXXXXXXXXX --envName dev
	7.2 amplify pull      (to pull the other  auth ,api etc)

8. If not Create New AWS Amplify Project:

9. npm start 
	(This generates index.html and main.js in dist/webpack_bundles/ . 
	Open the index.html in browser generated .)
	(npm start for dev or npm run build on production)


Subscribing to AWSIOT THING
1.Create thing THINGNAME,certificate CERTINAME ,policy POLICYNAME
2.Attach thing THINGNAME with certificate CERTINAME  with policy POLICYNAME .


Register AWSIDentityPoolID to Acess  AWSIOT Policy POLICYNAME :

3.Get identityID from the console: ex:ap-XXXXX-X : XXXXXXX   (need to do one time)
    sudo apt-get install awscli
    aws iot attach-policy --policy-name 'POLICYNAME' --target 'ap-XXXXX-X : XXXXXXX' 

To Interact with AWSIOT THING:

4. Modify aws_pubsub_region ,aws_pubsub_endpoint  in src/app.js .
	(copy text from AWSIOT > Manage >Things >THINGNAME>Interact >Https >Text and replace text in < >)
	(Thing THINGNAME to which  the Policy POLICYNAME is attached)
	aws_pubsub_region = ‘ap-XXXX-1’ 
	aws_pubsub_endpoint = ‘wss://     <xxxxxxxxx-ats.iot.<region>.amazonaws.com>      /mqtt’

5. AWS IOT > Test > Publish to topic :
	THINGNAME/1
	{“message”:”Hello­ World”}

	
