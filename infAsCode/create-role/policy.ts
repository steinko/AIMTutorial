import * as aws from "@pulumi/aws";
import {role} from "./role"

export const policy = new aws.iam.RolePolicy("allow-s3-management-policy", {
	name: "policy",
    role: role,
    policy: {
        Version: "2012-10-17",
        Statement: [{
            Sid: "AllowS3Management",
            Effect: "Allow",
            Resource: "*",
            Action: "s3:*",
        }],
    },
}, {parent: role});