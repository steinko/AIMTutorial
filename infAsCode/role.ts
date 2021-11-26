import * as aws from "@pulumi/aws";

export const role = new aws.iam.Role("awsRole", {
	name:'awsRole',
    assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Sid: "",
            Principal: {
                Service: "ec2.amazonaws.com",
            },
        }],
    }),
    
});