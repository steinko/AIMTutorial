import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

//const config = new pulumi.Config();
//const unprivilegedUsername = config.require("unprivilegedUsername");

export const user = new aws.iam.User("awsUser", {name: "awsUser"} );
