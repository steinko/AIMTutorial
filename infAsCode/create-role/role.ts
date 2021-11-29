import * as aws from "@pulumi/aws";
import {user} from "./user"

export const role = new aws.iam.Role("awsRole", {
	name:'awsRole',
    assumeRolePolicy: user.arn.apply(arn => {
        return aws.iam.assumeRolePolicyForPrincipal({AWS: arn});
    }), 
})