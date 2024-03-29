import room from "../models/room";
import { IController, IHttpRequest, IHttpResponse } from "../shared/adapt-route";

export class CreateRoomController implements IController {

    async handle(request: IHttpRequest): Promise<IHttpResponse<any>> {
        try {
            await room.create({
                owner: "Nicolindo",
                guests: []
            })
            return {
                body: "Oieee",
                statusCode: 200
            }
        } catch (error) {
            return {
                body: error,
                statusCode: 400
            }
        }
    }
}