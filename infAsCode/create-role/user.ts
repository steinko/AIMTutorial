import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";


export const user = new aws.iam.User("awsUser", {name:"awsUser"} );
