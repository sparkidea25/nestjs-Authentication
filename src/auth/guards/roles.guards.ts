import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { RoleType } from "src/user/constants/role-type.constant";
import { ROLES_KEY } from "../decorators/roles.decorators";
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(readonly reflector: Reflector) {}


    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<RoleType[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if(!requiredRoles) {
            return true;
        }
        const {user} = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role?.includes(role));
    }
}