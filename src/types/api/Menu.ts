import {PopulateType} from "@/types/api/Response";
import {MenuItemType} from "@/types";

export interface MenuType {
    title: string
    position: string
    menu_items: PopulateType<MenuItemType>
}