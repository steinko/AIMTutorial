import { defineFeature, loadFeature } from 'jest-cucumber';
import { IAMClient, GetRoleCommand } from "@aws-sdk/client-iam";

const feature = loadFeature('./cucumber/features/IAMRole.feature');

defineFeature(feature, test => {
  test('Provide IAMRole', ({ given, when, then }) => {
    	given('no IAMRole exist', () => {

    	});

    	when('provide IAMRole command is activated', async () => {
	       const client = new IAMClient({ region: "eu-north-1" })
           const input = {RoleName:"awsRole"}
           const command = new GetRoleCommand(input);
           const role = await client.send(command);
           expect(role.Role.RoleName).toBe('awsRole')
        });

    	then('IAMRole exist', () => {

    	});
    });

});