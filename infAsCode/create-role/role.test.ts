
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




describe ("unit test IAMRole",() => {
	
    let infra: typeof import("./role");

    beforeAll(async function() {
        infra = await import("./role");
    })
	 
     it("should have a username",() => {
	     pulumi.all([infra.role.name]).apply(([name]) => {
	     expect (name).toBe("awsRole")
	     }) 
      }) 
})