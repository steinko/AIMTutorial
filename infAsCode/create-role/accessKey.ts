import {user} from "./user";
import * as aws from "@pulumi/aws";


export const accessKey = new aws.iam.AccessKey("acessKey", {
    user: user.name,
}, { additionalSecretOutputs: ["secret"] });
