import { Module } from "@nestjs/common";
import { PostServices } from "./post.services";

@Module({
    providers: [PostServices]
})
export class PostModule {}