import { io } from "socket.io-client";
import { URL_API } from "../Data/dataEntity";

export const socket = io(`${URL_API}`);
