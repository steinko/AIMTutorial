import awsUser from '../infAsCode/awsUser'
import * as pulumi from "@pulumi/pulumi";

pulumi.runtime.setMocks({
    newResource: function(args: pulumi.runtime.MockResourceArgs): {id: string, state: any} {
        return {
            id: args.inputs.name + "_id",
            state: args.inputs,
        };
    },
    call: function(args: MockCallArgs) {
        return args.inputs;
    },
});




describe ("unit test IAMUser",() => {
	
    let infra: typeof import("../infAsCode/awsUser");

    beforeAll(async function() {
        // It's important to import the program _after_ the mocks are defined.
        infra = await import("../infAsCode/awsUser");
    })
	 
     it("should have a username",() => {
	     pulumi.all([infra.awsUser.name]).apply(([name]) => {
	     expect (name).toBe("awsUser")
	     }) 
      }) 
})