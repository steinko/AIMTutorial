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
	
    let infra: typeof import("./user");
   // const config = new pulumi.Config();
  //  const unprivilegedUsername = config.require("unprivilegedUsername");


    beforeAll(async function() {
        // It's important to import the program _after_ the mocks are defined.
        infra = await import("./user");
    })
	 
     it("should have a username",() => {
	     pulumi.all([infra.user.name]).apply(([name]) => {
	     expect (name).toBe("awsUser")
	     }) 
      }) 
})