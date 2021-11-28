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




describe ("unit test accessKey",() => {
	
    let infra: typeof import("./accessKey");

    beforeAll(async function() {
        infra = await import("./accessKey");
    })
	 
     it("should have a username",() => {
	     pulumi.all([infra.accessKey.user]).apply(([user]) => {
	     expect (user).toBe("awsUser")
	     }) 
      }) 
})