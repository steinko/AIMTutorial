import * as aws from "@pulumi/aws";

export const awsUser = new aws.iam.User("awsUser", {name:"awsUser"},);
