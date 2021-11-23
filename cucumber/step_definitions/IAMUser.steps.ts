
import { loadFeature, defineFeature } from "jest-cucumber";
import { IAMClient, ListUsersCommand } from "@aws-sdk/client-iam";

 const feature = loadFeature("./cucumber/features/IAMUser.feature");
 

defineFeature(feature, (test) => {

  test('IAMUser Existes', ({ given, when, then }) => {

        given('IAM user exist in AWS', async () => {
           try {
                  const iamClient = new IAMClient({ region: "eu-north-1" })
                  const params = { MaxItems: 10 }
                  const data = await iamClient.send(new ListUsersCommand(params));
                  const users = data.Users || []
                  let found = false
                  users.forEach( function(user) {
                      if (user.UserName == "awsUser") { found = true}
                             expect(found ).toBeTruthy()
                  })

                } catch (err) {
                      console.log("Error", err);
                }
         })
     
        when('the program activate getUser command', () => {

    	});

    	then(/^IAM user name is "(.*)"$/, (user) => {
               expect(user).toBe("awsUser")
    	});
        
    })
})