import { PRODUCT_LISTING } from "../../common/HttpService/HttpConstants";
import HttpService, { HttpSuccessResponse } from "../../common/HttpService/HttpService";
import { Product } from "./Products";

export const getProductLists = () => {
    return HttpService.get(PRODUCT_LISTING).then((res: unknown) => {
        const response = res as HttpSuccessResponse<Product[]>;
        if (response && response.statusCode === 200) {
            return response.data as (Product[] | PromiseLike<Product[]>);
        }

        return [] as (Product[] | PromiseLike<Product[]>);
    });
};
