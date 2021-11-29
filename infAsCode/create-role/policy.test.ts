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




describe ("unit tests policy",() => {
	
    let infra: typeof import("./policy");

    beforeAll(async function() {
        infra = await import("./policy");
    })
	 
     it("should have a username",() => {
	     pulumi.all([infra.policy.name]).apply(([name]) => {
	     expect (name).toBe("policy")
	     }) 
      }) 
})