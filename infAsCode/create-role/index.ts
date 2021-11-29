import {user} from './user'
import {role} from './role'
import {accessKey} from './accessKey'
import {policy} from './policy'


user
accessKey
role
policy

export const accessKeyId = accessKey.id;
export const secretAccessKey = accessKey.secret;
export const roleArn = role.arn;