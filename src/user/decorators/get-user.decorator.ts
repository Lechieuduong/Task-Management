import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "../user.entity";

export const GetUSer = createParamDecorator(
    (_data, ctx: ExecutionContext): User => {
        const req = ctx.switchToHttp().getRequest();
        return req.user;
    },
);