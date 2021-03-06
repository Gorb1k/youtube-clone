import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {ConfigService} from "@nestjs/config";
import {InjectModel} from "nestjs-typegoose";
import {UserModel} from "../../user/user.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {Injectable} from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly configService:ConfigService,
        @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: configService.get('JWT_SECRET')
        });
    }

    async validate({id}: Pick<UserModel, 'id'>) {
        return this.userModel.findById(id).exec()
    }
}