import { Exercises } from "../model/Exercises";
import http from "./config";

export default {
    list: function () {
        return http.get("/exercises/list")
    }
}